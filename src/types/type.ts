import {
  categoriesSchema,
  departmentSchema,
  postSchema,
  businessesSchema
} from "@/types/schema/post-form";
import { z } from "zod";
import { loginSchema } from "./schema/login";

export type Department = z.infer<typeof departmentSchema>;
export type Category = z.infer<typeof categoriesSchema>;
export type Businesses = z.infer<typeof businessesSchema>;
export type Post = z.infer<typeof postSchema>;

export type Login = z.infer<typeof loginSchema>;

export type Departments = {
  [key in Department]: Businesses[];
  // [key: string]: string[]
};

export interface PostData {
  id: number;
  userId: number;
  department: Department;
  business: Businesses;
  category: Category;
  content: string;
  timestamp: string;
}

export interface UserData {
  id: number;
  name: string;
}
