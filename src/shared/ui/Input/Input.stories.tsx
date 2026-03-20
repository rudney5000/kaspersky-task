import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'

const meta: Meta<typeof Input> = {
  title: 'Shared/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    error: { control: 'text' },
    disabled: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const Базовый: Story = {
  args: {
    label: 'Полное имя',
    placeholder: 'Иван Иванов',
  },
}

export const СОшибкой: Story = {
  args: {
    label: 'Электронная почта',
    placeholder: 'ivan@company.com',
    value: 'not-an-email',
    error: 'Введите корректный адрес электронной почты',
  },
}

export const СИконкой: Story = {
  args: {
    placeholder: 'Поиск по имени, почте, группе…',
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    ),
  },
}

export const Заблокирован: Story = {
  args: {
    label: 'Учётная запись',
    value: 'companydomain/IvanIvanov',
    disabled: true,
  },
}
