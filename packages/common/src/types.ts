import { z } from "zod"

export const CreateUserSchema = z.object({
    username: z.string().min(3).max(20),
    password: z.string(),
    name: z.string(),
    photo: z.string().optional()
})


export const SinginSchema = z.object({
    username: z.string().min(3).max(20),
    password: z.string(),
})

export const CreateRoomSchema = z.object({
    slug: z.string(),
})

// export type CreateUser = z.infer<typeof CreateUserSchema>;