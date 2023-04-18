import { z } from 'zod';

export const loginFormSchema = z.object({
  email: z
    .string()
    .email('Insira um e-mail válido')
    .nonempty('O campo acima é obrigatório!'),
  password: z.string().nonempty('O campo acima é obrigatório!'),
});

export type TLoginFormValues = z.infer<typeof loginFormSchema>;
