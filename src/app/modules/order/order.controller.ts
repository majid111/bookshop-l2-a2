import { Request, Response } from 'express';
import { BookServices } from './order.service';

const createBook = async (req: Request, res: Response) => {
  try {
    const { book: bookData } = req.body;
    // console.log('req.body:', req.body);clear
    const result = await BookServices.createBookIntoDB(bookData);

    res.status(200).json({
      success: true,
      message: 'Book added in database succesfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllBooks = async (req: Request, res: Response) => {
  try {
    const result = await BookServices.getAllBooksFromDB();

    res.status(200).json({
      success: true,
      message: 'All Books are Here',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleBook = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;

    const result = await BookServices.getSingleBookFromDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Book is retrieved succesfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const BookControllers = {
  createBook,
  getAllBooks,
  getSingleBook,
};
