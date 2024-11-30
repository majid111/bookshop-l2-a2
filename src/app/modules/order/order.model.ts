import { Schema, model } from 'mongoose';
import { Book, AuthorName } from './order.interface';

const AuthorNameSchema = new Schema<AuthorName>({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const bookSchema = new Schema<Book>({
  title: { type: String, required: true },
  author: { type: AuthorNameSchema, required: true },
  price: { type: Number, required: true },
  category: {
    type: String,
    enum: ['Fiction', 'Science', 'SelfDevelopment', 'Poetry', 'Religious'],
    required: true,
  },
  description: { type: String, required: true },
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});

export const BookModel = model<Book>('Book', bookSchema);
