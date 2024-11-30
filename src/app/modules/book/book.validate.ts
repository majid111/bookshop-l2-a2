import { z } from 'zod';

const AuthorNameSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: 'First name can not be less than 3 characters' })
    .max(20, { message: 'First name can not be more than 20 characters' }),
  middleName: z
    .string()
    .min(3, { message: 'Middle name can not be less than 3 characters' })
    .max(20, { message: 'Middle name can not be more than 20 characters' }),
  lastName: z
    .string()
    .min(3, { message: 'Last name can not be less than 3 characters' })
    .max(20, { message: 'Last name can not be more than 20 characters' }),
});

// Book Schema
const bookValidationSchema = z.object({
  title: z
    .string()
    .min(3, { message: 'Title can not be less than 3 characters' })
    .max(20, { message: 'Title can not be more than 3 characters' }),
  author: AuthorNameSchema,
  price: z.number().min(0, { message: 'Price should be grater than 0' }),
  category: z.enum(
    ['Fiction', 'Science', 'SelfDevelopment', 'Poetry', 'Religious'],
    {
      message:
        "Category must be one of 'Fiction', 'Science', 'SelfDevelopment', 'Poetry', or 'Religious'.",
    },
  ),
  description: z
    .string()
    .min(10, { message: 'Author name can not be less than 3 characters' })
    .max(200, { message: 'Author name can not be more than 3 characters' }),
  quantity: z.number().min(0, { message: 'Book quantity is required.' }),
  inStock: z
    .boolean({
      message: 'Author name can not be more than 3 characters',
    })
    .default(true),
});

export default bookValidationSchema;
