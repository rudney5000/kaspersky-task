import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './Badge'

const meta: Meta<typeof Badge> = {
    title: 'Shared/Badge',
    component: Badge,
    tags: ['autodocs'],
    argTypes: {
        group: {
            control: 'select',
            options: [
                'CDN/CEO',
                'CDN/Managers',
                'CDN/Financials',
                'CDN/Top Kvants',
                'CDN/Human resources',
                'CDN/Outsourced',
                'CDN/Kvants',
                'CDN/Sales',
                'Unmanaged',
            ],
        },
    },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Руководство: Story = {
    args: { group: 'CDN/CEO' },
}

export const Менеджеры: Story = {
    args: { group: 'CDN/Managers' },
}

export const БезГруппы: Story = {
    args: { group: 'Unmanaged' },
}

export const ВсеГруппы: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {[
                'CDN/CEO',
                'CDN/Managers',
                'CDN/Financials',
                'CDN/Top Kvants',
                'CDN/Human resources',
                'CDN/Outsourced',
                'CDN/Kvants',
                'CDN/Sales',
                'Unmanaged',
            ].map((g) => (
                <Badge key={g} group={g} />
            ))}
        </div>
    ),
}
