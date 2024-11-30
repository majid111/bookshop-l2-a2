import { z } from 'zod';

const AuthorNameSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: 'First name can not be less than 3 characters' }),
  middleName: z
    .string()
    .min(3, { message: 'Middle name can not be less than 3 characters' }),
  lastName: z
    .string()
    .min(3, { message: 'Last name can not be less than 3 characters' }),
});

// Book Schema
const bookValidationSchema = z.object({
  title: z
    .string()
    .min(3, { message: 'Title can not be less than 3 characters' })
    .max(20, { message: 'Title can not be more than 3 characters' }),
  author: z
    .string()
    .min(3, { message: 'Author name can not be less than 3 characters' })
    .max(20, { message: 'Author name can not be more than 3 characters' }),
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
