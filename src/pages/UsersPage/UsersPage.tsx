import styles from './UsersPage.module.scss'
import {Button} from "@/shared/ui/Button/Button.tsx";
import {useNavigate} from "react-router-dom";
import {useCallback, useState} from "react";
import {useUserSort} from "@/features/user-sort/useUserSort.ts";


export const UsersPage = () => {
    const navigate = useNavigate()
    const { sortConfig, handleSort } = useUserSort()
    const [searchTerm, setSearchTerm] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleSearch = useCallback((value: string) => {
        setSearchTerm(value)
    }, [])

    return (
        <div className={styles.page}>
            <Button className={styles.back} onClick={() => navigate('/')}>
                ← Назад
            </Button>

            <div className={styles.header}>
                <div>
                    <h1 className={styles.title}>Пользователи</h1>
                    <p className={styles.subtitle}>
                        сколько пользователей
                    </p>
                </div>
                <Button onClick={() => setIsModalOpen(true)}>+ Добавить</Button>
            </div>
        </div>
    )
}