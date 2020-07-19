```text
 ______ ______  __   __  ______ ______  ______  __  __       ______  ______ ______
/\  ___/\  __ \/\ "-.\ \/\__  _/\  __ \/\  ___\/\ \_\ \     /\  == \/\  == /\  ___\
\ \  __\ \  __ \ \ \-.  \/_/\ \\ \  __ \ \___  \ \____ \    \ \  __<\ \  _-\ \ \__ \
 \ \_\  \ \_\ \_\ \_\\"\_\ \ \_\\ \_\ \_\/\_____\/\_____\    \ \_\ \_\ \_\  \ \_____\
  \/_/   \/_/\/_/\/_/ \/_/  \/_/ \/_/\/_/\/_____/\/_____/     \/_/ /_/\/_/   \/_____/

 ______  ______  __   __  ______  ______  ______  ______ ______  ______
/\  ___\/\  ___\/\ "-.\ \/\  ___\/\  == \/\  __ \/\__  _/\  __ \/\  == \
\ \ \__ \ \  __\\ \ \-.  \ \  __\\ \  __<\ \  __ \/_/\ \\ \ \/\ \ \  __<
 \ \_____\ \_____\ \_\\"\_\ \_____\ \_\ \_\ \_\ \_\ \ \_\\ \_____\ \_\ \_\
  \/_____/\/_____/\/_/ \/_/\/_____/\/_/ /_/\/_/\/_/  \/_/ \/_____/\/_/ /_/

```
version 0.1.0
<p>
(Sub-Zero font from http://patorjk.com/software/taag/)
</p>

## Description
<p>
The generator that acts as the server for games.
It starts the game, takes input from players, checks the database for matching input,
passes the database entry to the game, and then sends the game's responses to the player.

It also maintains public information that players can read to learn more about the game.
The database is not for storing save files or player accounts.
</p>

## A Note About Passwords

\<redacted\> means that a password has been removed.

The goal of redacting passwords is to prevent this project from ending up on plain text offenders.
https://github.com/plaintextoffenders/plaintextoffenders/blob/master/offenders.csv

Supply your own password for the database. Avoid committing it to git in plain text.

## Installation

```bash
$ yarn install
```

## Running the app

Add this to a .env file in the root of the project directory.
This is for Nest.JS so it can connect to the postgres databse.
```env
TYPEORM_TYPE           = "postgres"
TYPEORM_HOST           = "localhost"
TYPEORM_USERNAME       = "postgres"
TYPEORM_PASSWORD       = <redacted>
TYPEORM_DATABASE       = "frg_db"
TYPEORM_PORT           = 5432
TYPEORM_LOGGING        = true
TYPEORM_ENTITIES       = "dist/model/*.entity.js"
TYPEORM_MIGRATIONS_RUN = true
TYPEORM_SYNCHRONIZE    = false
```

Add this to a ormconfig.json in the root of the project directory.
This is for typeORM so it can run migrations against the postgres database.
```json
{
    "type"      : "postgres",
    "host"      : "localhost",
    "port"      : 5432,
    "username"  : "postgres",
    "password"  : <redacted>,
    "database"  : "frg_db",
    "entities"  : ["dist/model/*.entity.js"],
    "migrations": ["dist/migration/*.js"],
    "cli"       : {
      "migrationsDir": "src/migration"
    }
}
```

When developing, start by running the migration run command and then start the app.
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

# Generates a new migration script
$ npm run typeorm:migration:generate -- add_informative_migration_name

# Runs all of the migrations that are not in the migration
$ npm run typeorm:migration:run

# Reverts the most recent migration
$ npm run typeorm:migration:revert"
```

## Starting the postgres docker image with the bash script
./script/start-db.sh \<redacted\>


## Starting the postgres docker image with the docker command
docker run --name local-postgres -p 5432:5432 -e POSTGRES_PASSWORD=<redacted> -d postgres -rm

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a href="https://angular.io" target="blank">Angular</a>.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/dm/@nestjs/core.svg" alt="NPM Downloads" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://api.travis-ci.org/nestjs/nest.svg?branch=master" alt="Travis" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://img.shields.io/travis/nestjs/nest/master.svg?label=linux" alt="Linux" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#5" alt="Coverage" /></a>
<a href="https://gitter.im/nestjs/nestjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=body_badge"><img src="https://badges.gitter.im/nestjs/nestjs.svg" alt="Gitter" /></a>
<a href="https://opencollective.com/nest#backer"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec"><img src="https://img.shields.io/badge/Donate-PayPal-dc3d53.svg"/></a>
  <a href="https://twitter.com/nestframework"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

  Nest is [MIT licensed](LICENSE).
