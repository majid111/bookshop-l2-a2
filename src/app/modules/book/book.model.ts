import { Schema, model } from 'mongoose';
import { Book, AuthorName } from './book.interface';

// AuthorName Schema
const AuthorNameSchema = new Schema<AuthorName>({
  firstName: {
    type: String,
    required: [true, "Author's first name is required."],
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: [true, "Author's last name is required."],
  },
});

// Book Schema
const bookSchema = new Schema<Book>({
  title: {
    type: String,
    required: [true, 'Book title is required.'],
    unique: true,
  },
  author: {
    type: AuthorNameSchema,
    required: [true, 'Book must have an author.'],
  },
  price: {
    type: Number,
    required: [true, 'Book price is required.'],
    min: [0, 'Book price cannot be negative.'],
  },
  category: {
    type: String,
    enum: {
      values: ['Fiction', 'Science', 'SelfDevelopment', 'Poetry', 'Religious'],
      message:
        "Category must be one of 'Fiction', 'Science', 'SelfDevelopment', 'Poetry', or 'Religious'.",
    },
    required: [true, 'Book category is required.'],
  },
  description: {
    type: String,
    required: [true, 'Book description is required.'],
    minlength: [10, 'Description must be at least 10 characters long.'],
  },
  quantity: {
    type: Number,
    required: [true, 'Book quantity is required.'],
    min: [0, 'Quantity cannot be negative.'],
  },
  inStock: {
    type: Boolean,
    required: [true, 'In-stock status is required.'],
  },
});

export const BookModel = model<Book>('Book', bookSchema);
