// src/index.ts
import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Hello TypeScript + Express!');
});
app.get('/', (_req, res) => {
  res.send('Hello tt le monde');
});

app.get('/ju', (_req, res) => {
  res.send('Hello tt le monde');
});

app.get('/dev2', (_req, res) => {
  res.send('Hello tt le monde');
});

//test 

app.get('/dev1', (_req, res) => {
  res.send('Hello Dev1!');
});

app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});

export default app;