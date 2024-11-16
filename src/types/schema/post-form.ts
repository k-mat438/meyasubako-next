import { z } from "zod";

const departments = [
  "全体",
  "開発",
  "広告",
  "総務",
  "営業",
  "マーケティング"
] as const;
const businesses = [
  "事業A",
  "事業B",
  "事業C",
  "事業D",
  "事業E",
  "事業F",
  "事業G",
  "A広告",
  "B広告",
  "C広告",
  "D事業",
  "E事業",
  "F事業"
] as const;
export const categories = ["良い点", "改善点・提案", "質問"] as const;

export const departmentSchema = z.enum(departments);

export const businessesSchema = z.enum(businesses);

export const categoriesSchema = z.enum(categories);

const contentSchema: z.ZodString = z
  .string()
  .max(12)
  .min(2, "単語および文章を入力してください");

export const postSchema = z.object({
  department: departmentSchema,
  businesses: businessesSchema,
  categories: categoriesSchema,
  content: contentSchema
});
