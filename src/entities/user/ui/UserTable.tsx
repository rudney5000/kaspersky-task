import type {User} from "@/entities/user/model/types.ts";
import React, {useCallback, useState} from "react";
import {useDeleteUserMutation} from "@/entities/user/api/userApi.ts";
import {Badge} from "@/shared/ui/Badge/Badge.tsx";
import {Button} from "@/shared/ui/Button/Button.tsx";
import {ConfirmModal} from "@/shared/ui/ConfirmModal/ConfirmModal.tsx";
import styles from './UserTable.module.scss'

interface UserTableProps {
    users: User[]
}

const COLUMNS = [
    { label: 'Полное имя' },
    { label: 'Учётная запись' },
    { label: 'Электронная почта' },
    { label: 'Группа' },
    { label: 'Номер телефона' },
    { label: 'Действия' },
]

export const UserTable = React.memo(({ users }: UserTableProps) => {
    const [deleteUser] = useDeleteUserMutation()
    const [pendingDeleteId, setPendingDeleteId] = useState<string | null>(null)
    const [pendingDeleteName, setPendingDeleteName] = useState('')

    const handleDeleteClick = useCallback((id: string, name: string) => {
        setPendingDeleteId(id)
        setPendingDeleteName(name)
    }, [])

    const handleConfirmDelete = useCallback(() => {
        if (pendingDeleteId) deleteUser(pendingDeleteId)
        setPendingDeleteId(null)
    }, [pendingDeleteId, deleteUser])

    const handleCancelDelete = useCallback(() => {
        setPendingDeleteId(null)
    }, [])

    if (users.length === 0) {
        return <div className={styles.empty}>Пользователи не найдены.</div>
    }

    return (
        <>
            <div className={styles.wrapper}>
                <table className={styles.table}>
                    <thead>
                    <tr>
                        {COLUMNS.map((col) => (
                            <th key={col.label} className={styles.th}>{col.label}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user) => (
                        <tr key={user.id} className={styles.row}>
                            <td className={styles.td}>{user.name}</td>
                            <td className={styles.td}>
                                <span className={styles.mono}>{user.account}</span>
                            </td>
                            <td className={styles.td}>
                                <a href={`mailto:${user.email}`} className={styles.email}>{user.email}</a>
                            </td>
                            <td className={styles.td}>
                                <Badge group={user.group} />
                            </td>
                            <td className={styles.td}>
                                <span className={styles.mono}>{user.phone}</span>
                            </td>
                            <td className={styles.td}>
                                <Button
                                    variant="danger"
                                    size="sm"
                                    onClick={() => handleDeleteClick(user.id, user.name)}
                                >
                                    Удалить
                                </Button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            <ConfirmModal
                isOpen={pendingDeleteId !== null}
                onClose={handleCancelDelete}
                onConfirm={handleConfirmDelete}
                title="Удаление пользователя"
                message={`Вы уверены, что хотите удалить пользователя «${pendingDeleteName}»? Это действие необратимо.`}
                confirmLabel="Да, удалить"
                cancelLabel="Отмена"
            />
        </>
    )
})

UserTable.displayName = 'UserTable'