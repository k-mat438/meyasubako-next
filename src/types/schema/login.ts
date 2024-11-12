import { z } from "zod";

const emailSchema = z
  .string()
  .trim()
  .min(1, { message: "メールアドレスは必須項目です" })
  .email({ message: "メールアドレスの形式が不適です" });

const passwordSchema = z
  .string()
  .trim()
  .min(6, { message: "パスワードは6文字以上である必要があります" })
  .refine((value) => /[a-zA-Z]/.test(value), {
    message: "パスワードは少なくとも1つの英字を含む必要があります"
  })
  .refine((value) => /[0-9]/.test(value), {
    message: "パスワードは少なくとも1つの数字を含む必要があります"
  });

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema
});
