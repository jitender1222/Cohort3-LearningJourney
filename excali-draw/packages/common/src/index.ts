import { z } from "zod";

export const UserSchema = z.object({
  username: z.string().min(3).max(20),
  email: z.string().email(),
  password: z.string().min(5).max(20),
});

export const SignInSchema = z.object({
  email: z.string().min(3).max(50).email(),
  password: z.string(),
});

export const CreateRoomSchema = z.object({
  name: z.string().min(3).max(50),
});
