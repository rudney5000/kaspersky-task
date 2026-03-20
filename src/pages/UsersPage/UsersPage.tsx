import {Button} from "@/shared/ui/Button/Button.tsx";
import {useNavigate} from "react-router-dom";
import {useCallback, useMemo, useState} from "react";
import {useUserSort} from "@/features/user-sort/useUserSort.ts";
import {useGetUsersQuery} from "@/entities/user/api/userApi.ts";
import type {User} from "@/entities/user/model/types.ts";
import {UserSearch} from "@/features/user-search/UserSearch.tsx";
import {UserSort} from "@/features/user-sort/UserSort.tsx";
import {UserTable} from "@/entities/user/ui/UserTable.tsx";
import {UserCreateForm} from "@/features/user-create/UserCreateForm.tsx";
import styles from './UsersPage.module.scss'


export const UsersPage = () => {
    const navigate = useNavigate()
    const { data: users = [], isLoading, isError } = useGetUsersQuery()
    const { sortConfig, handleSort } = useUserSort()
    const [searchTerm, setSearchTerm] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleSearch = useCallback((value: string) => {
        setSearchTerm(value)
    }, [])

    const processedUsers = useMemo<User[]>(() => {
        const term = searchTerm.toLowerCase().trim()

        const filtered = term ? users.filter(
            (user) =>
                user.name.toLowerCase().includes(term) ||
                user.email.toLowerCase().includes(term) ||
                user.group.toLowerCase().includes(term) ||
                user.account.toLowerCase().includes(term)
        ) : users

        if( !sortConfig) {
            return filtered
        }

        return [...filtered].sort((a,b) => {
            const cmp = a[sortConfig.key].localeCompare(b[sortConfig.key], 'ru')
            return sortConfig.direction === 'asc' ? cmp : -cmp
        })
    }, [users, searchTerm, sortConfig])

    return (
        <div className={styles.page}>
            <Button className={styles.back} onClick={() => navigate('/')}>
                ← Назад
            </Button>

            <div className={styles.header}>
                <div>
                    <h1 className={styles.title}>Пользователи</h1>
                    <p className={styles.subtitle}>
                        {processedUsers.length} из {users.length} пользователей
                    </p>
                </div>
                <Button onClick={() => setIsModalOpen(true)}>+ Добавить</Button>
            </div>
            <div className={styles.filters}>
                <div className={styles.searchWrap}>
                    <UserSearch onSearch={handleSearch}/>
                </div>
                <div className={styles.sortWrap}>
                    <UserSort onChange={handleSort} sortConfig={sortConfig}/>
                </div>
            </div>

            {isLoading && <p className={styles.state}>Загрузка...</p>}
            {isError && <p className={styles.stateError}>Ошибка загрузки данных.</p>}
            {!isLoading && !isError && (
                <UserTable users={processedUsers}/>
            )}

            <UserCreateForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    )
}