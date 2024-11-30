import express from 'express';
import { BookControllers } from './order.controller';

const router = express.Router();

router.post('/orders', BookControllers.createBook);

router.get('/orders/revenue', BookControllers.getAllBooks);

// router.get('/:bookId', BookControllers.getSingleBook);

export const BookRoutes = router;
