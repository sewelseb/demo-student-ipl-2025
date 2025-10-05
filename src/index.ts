// src/index.ts
import express from 'express';

import {tasksController} from './controllers/tasks.controller';

const app = express();
const port = 8080;

app.use(express.json());
app.use('/tasks', tasksController); 

app.get('/', (_req, res) => {
  res.send('Hello TypeScript + Express GEEENIAAAAALLLLL!');
});

app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});

export default app;