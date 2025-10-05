// import dependencies
const cors = require('cors');
import express from "express";

import {tasksController} from './controllers/tasks.controller';

// creates an express app
export const app = express();
app.use(cors());
app.use(express.json());

app.use(express.json());
app.use('/tasks', tasksController); 

app.get('/', (_req, res) => {
  res.send('Hello TypeScript + Express GEEENIAAAAALLLLL!');
});
