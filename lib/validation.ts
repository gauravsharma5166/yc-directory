import { z } from "zod";

export const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  category: z.string().min(1, "Category is required"),
  link: z
    .string()
    .url("Please provide a valid URL") // Validates the input as a URL
    .min(1, "Image URL is required"),
  pitch: z.string().min(1, "Pitch is required"),
});
