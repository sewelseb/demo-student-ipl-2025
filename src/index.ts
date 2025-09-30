// src/index.ts
import express from 'express';

import {tasksController} from './controllers/tasks.controller';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Hello TypeScript + Express!');
});

// use the controller to use the route
app.use('/tasks', tasksController);

app.get('/', (_req, res) => {
  res.send('Hello tt le monde');
});

app.get('/ju', (_req, res) => {
  res.send('Hello tt le monde');
});

app.get('/juju', (_req, res) => {
  res.send('Hello tt le monde');
});

app.get('/jujuju', (_req, res) => {
  res.send('Hello tt le monde');
});

app.get('/toto', (_req, res) => {
  res.send('Hello tt le monde');
});


app.get('/dev3', (_req, res) => {
  res.send('Hello tt le monde');
});

app.get('/dev2', (_req, res) => {
  res.send('Hello tt le monde');
});

app.get('/dev1', (_req, res) => {
  res.send('Hello Dev1!');
});

app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});

export default app;