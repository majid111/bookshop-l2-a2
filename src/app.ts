import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { BookRoutes } from './app/modules/book/book.route';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1/books', BookRoutes);

const getAController = (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
};

app.get('/', getAController);

export default app;
