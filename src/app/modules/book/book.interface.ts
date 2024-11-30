// title (string): The title of the book.
// author (string): The author of the book.
// price (number): Price of the book.
// category (string): The genre or category of the book (e.g., Fiction, Science). use enum, exact value (Fiction, Science, SelfDevelopment, Poetry, Religious)
// description (string): A brief description of the book.
// quantity (number): Quantity of the book available.
// inStock (boolean): Indicates if the book is in stock.

export type AuthorName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type Book = {
  title: string;
  author: AuthorName;
  price: number;
  category: 'Fiction' | 'Science' | 'SelfDevelopment' | 'Poetry' | 'Religious';
  description: string;
  quantity: number;
  inStock: boolean;
};
