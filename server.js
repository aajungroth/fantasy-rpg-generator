import {ContainerBuilder, YamlFileLoader} from 'node-dependency-injection';
import express from 'express';

const app = express();
const port = 4201;
const container = new ContainerBuilder();

console.log('YamlFileLoader: ', YamlFileLoader);

const loader = new YamlFileLoader(container);

console.log('full path: ', __dirname + '/configuration/node-injection/node-injection-config.yml');

loader.load(__dirname + '/configuration/node-injection/node-injection-config.yml');

let test = container.get('test');

console.log('test: ', test);

app.get(`/`, (req, res) => res.send(`Hello World!`));

app.post(`/`, (req, res) => res.send(`Got a POST request`));

app.listen(port, () => console.log(`Example app listening on port $(port)!`));
