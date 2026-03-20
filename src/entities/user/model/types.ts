import {z} from "zod";

export const userSchema = z.object({
    name: z.string().min(2, 'Минимум 2 символа'),
    account: z.string().min(3, 'Обязательное поле'),
    email: z.string().email( 'Неорректный адрес почты'),
    group: z.string().min( 1,'Выберите группу'),
    phone: z.string().min( 6,'Обязательное поле'),
})

export type UserFormData = z.infer<typeof userSchema>

export interface User extends UserFormData {
    id: string
}