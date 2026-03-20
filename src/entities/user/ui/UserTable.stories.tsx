import type { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { UserTable } from './UserTable'
import { userApi } from '../api/userApi'
import type { User } from '../model/types'

const mockUsers: User[] = [
    { id: '1', name: 'Альберта Кэтрин',   account: 'companydomain/AlbertaCatharine', email: 'AlbertaCatharine@companydomain.com', group: 'CDN/CEO',      phone: '+123(456)123-45-66' },
    { id: '2', name: 'Александр Сухотин', account: 'companydomain/AlexanderSuhotin', email: 'AlexanderSuhotin@companydomain.com', group: 'CDN/Managers', phone: '+123(456)123-45-66' },
    { id: '3', name: 'Азобе Цилистер',    account: 'companydomain/AzoberCylister',   email: 'AzoberCylister@companydomain.com',   group: 'Unmanaged',   phone: '+123(456)123-45-66' },
    { id: '4', name: 'Бри Дэвид',         account: 'companydomain/BreeDavid',        email: 'BreeDavid@companydomain.com',        group: 'CDN/Managers', phone: '+123(456)123-45-66' },
    { id: '5', name: 'Никита Михалков',   account: 'companydomain/NikitaMikhalkov',  email: 'NikitaMikhalkov@companydomain.com',  group: 'CDN/Kvants',  phone: '+123(456)123-45-66' },
]

const makeStore = () =>
    configureStore({
        reducer: { [userApi.reducerPath]: userApi.reducer },
        middleware: (gDM) => gDM().concat(userApi.middleware),
    })

const meta: Meta<typeof UserTable> = {
    title: 'Entities/UserTable',
    component: UserTable,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <Provider store={makeStore()}>
                <Story />
            </Provider>
        ),
    ],
}

export default meta
type Story = StoryObj<typeof UserTable>

export const Базовая: Story = {
    args: { users: mockUsers },
}

export const ОдинПользователь: Story = {
    args: { users: [mockUsers[0]] },
}
