#!/bin/bash
# To run this script:
# ./script/start-db.sh <password>
set -e

DB="frg_db";
PW=$1;
SERVER="local-postgres";

echo "stop & remove old docker [$SERVER] and starting fresh instance of [$SERVER]"
(docker stop $SERVER || :) && \
  (docker rm $SERVER || :) && \
  docker run --name $SERVER \
  -p 5432:5432 \
  -e POSTGRES_PASSWORD=$PW \
  -d postgres \
  -rm

# wait for postgres to start
echo "sleep wait for postgres server [$SERVER] to start";
SLEEP 3;

# create the database
echo "CREATE DATABASE $DB ENCODING 'UTF-8';" | docker exec -i $SERVER psql -U postgres
echo "\l" | docker exec -i $SERVER psql -U postgres
