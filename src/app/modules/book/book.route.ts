import express from 'express';
import { BookControllers } from './book.controller';

const router = express.Router();

router.post('/create-book', BookControllers.createBook);

router.get('/', BookControllers.getAllBooks);

router.get('/:bookId', BookControllers.getSingleBook);

export const BookRoutes = router;
