import {
  categoriesSchema,
  departmentSchema,
  postSchema,
  businessesSchema
} from "@/types/schema/post-form";
import { z } from "zod";
import { loginSchema } from "./schema/login";

export type MockDepartment = z.infer<typeof departmentSchema>;
export type Category = z.infer<typeof categoriesSchema>;
export type Businesses = z.infer<typeof businessesSchema>;
export type Post = z.infer<typeof postSchema>;

export type Login = z.infer<typeof loginSchema>;

export type Departments = {
  [key in MockDepartment]: Businesses[];
  // [key: string]: string[]
};

export interface PostData {
  id: number;
  userId: number;
  department: MockDepartment;
  business: Businesses;
  category: Category;
  content: string;
  timestamp: string;
}

export interface UserData {
  id: number;
  name: string;
}

export interface Department {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export type IndexResponse<T> = {
  data: T[];
  message: string;
}