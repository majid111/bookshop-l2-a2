import { BookModel } from './book.model';
import { Book } from './book.interface';

const createBookIntoDB = async (book: Book) => {
  const result = await BookModel.create(book);
  console.log('result:', result);
  return result;
};

const getAllBooksFromDB = async () => {
  const result = await BookModel.find();
  return result;
};

const getSingleBookFromDB = async (id: string) => {
  const result = await BookModel.findOne({ id });
  return result;
};

export const BookServices = {
  createBookIntoDB,
  getAllBooksFromDB,
  getSingleBookFromDB,
};
