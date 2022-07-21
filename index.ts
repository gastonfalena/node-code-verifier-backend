import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

//Configuration the .env file

dotenv.config();

//Create Express APP

const app: Express = express();
const port: string | number = process.env.PORT || 8000;
//Define the first route of app
app.get('/', (req: Request, res: Response) => {
  res.send('APP Express + ts + swagger + nodemon + jest+ mongoose');
});
app.get('/hello', (req: Request, res: Response) => {
  res.status(200).send({ data: { message: 'Goodbye,world' } });
});

app.listen(port, () =>
  console.log(`EXPRES SERVER: Running at http://localhost:${port}`)
);
