import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from './Modal'
import { Button } from '../Button/Button'

const meta: Meta<typeof Modal> = {
    title: 'Shared/Modal',
    component: Modal,
    tags: ['autodocs'],
    parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof Modal>

const ModalDemo = ({ title }: { title: string }) => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Button onClick={() => setOpen(true)}>Открыть модальное окно</Button>
            <Modal isOpen={open} onClose={() => setOpen(false)} title={title}>
                <p style={{ color: '#7b82a0', fontSize: '14px', lineHeight: 1.6 }}>
                    Это содержимое модального окна. Нажмите кнопку закрытия, клавишу Escape
                    или щёлкните вне окна, чтобы закрыть его.
                </p>
            </Modal>
        </>
    )
}

export const Базовый: Story = {
    render: () => <ModalDemo title="Заголовок модального окна" />,
}

export const ДобавлениеПользователя: Story = {
    render: () => <ModalDemo title="Добавить пользователя" />,
}
