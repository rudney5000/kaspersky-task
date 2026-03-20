import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ConfirmModal } from './ConfirmModal'
import { Button } from '../Button/Button'

const meta: Meta<typeof ConfirmModal> = {
    title: 'Shared/ConfirmModal',
    component: ConfirmModal,
    tags: ['autodocs'],
    parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof ConfirmModal>

const ConfirmDemo = () => {
    const [open, setOpen] = useState(false)
    const [result, setResult] = useState<string | null>(null)

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <Button variant="danger" onClick={() => setOpen(true)}>
                Удалить пользователя
            </Button>
            {result && (
                <p style={{ color: '#7b82a0', fontSize: '13px' }}>Результат: {result}</p>
            )}
            <ConfirmModal
                isOpen={open}
                onClose={() => { setOpen(false); setResult('Отменено') }}
                onConfirm={() => setResult('Удалено ✓')}
                title="Удаление пользователя"
                message='Вы уверены, что хотите удалить пользователя «Иван Иванов»? Это действие необратимо.'
                confirmLabel="Да, удалить"
                cancelLabel="Отмена"
            />
        </div>
    )
}

export const УдалениеПользователя: Story = {
    render: () => <ConfirmDemo />,
}
