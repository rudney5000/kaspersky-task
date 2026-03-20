import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
    title: 'Shared/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'danger', 'ghost'],
            description: 'Визуальный стиль кнопки',
        },
        size: {
            control: 'select',
            options: ['sm', 'md'],
            description: 'Размер кнопки',
        },
        disabled: { control: 'boolean' },
        children: { control: 'text' },
    },
}

export default meta
type Story = StoryObj<typeof Button>

export const Основная: Story = {
    args: { children: 'Добавить пользователя', variant: 'primary', size: 'md' },
}

export const Опасная: Story = {
    args: { children: 'Удалить', variant: 'danger', size: 'md' },
}

export const Призрак: Story = {
    args: { children: 'Отмена', variant: 'ghost', size: 'md' },
}

export const Маленькая: Story = {
    args: { children: 'Удалить', variant: 'danger', size: 'sm' },
}

export const Заблокирована: Story = {
    args: { children: 'Добавление…', variant: 'primary', disabled: true },
}
