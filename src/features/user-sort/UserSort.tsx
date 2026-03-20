import React, {type SelectHTMLAttributes} from "react";
import type {SortConfig, SortDirection, SortKey} from "@/features/user-sort/useUserSort.ts";
import styles from './UserSort.module.scss'

interface UserSortProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
    sortConfig: SortConfig
    onChange: (config: SortConfig) => void
}

export const UserSort = ({ sortConfig, onChange, ...props }: UserSortProps) => {
    const value = sortConfig ? `${sortConfig.key}-${sortConfig.direction}` : ''

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const val = e.target.value
        if (!val) { onChange(null); return }
        const [key, direction] = val.split('-') as [SortKey, SortDirection]
        onChange({ key, direction })
    }

    return (
        <select
            value={value}
            onChange={handleChange}
            className={styles.select}
            {...props}
        >
            <option value="">Без сортировки</option>
            <option value="name-asc">Полное имя (А-Я)</option>
            <option value="name-desc">Полное имя (Я-А)</option>
            <option value="account-asc">Учётная запись (А-Я)</option>
            <option value="account-desc">Учётная запись (Я-А)</option>
            <option value="email-asc">Почта (А-Я)</option>
            <option value="email-desc">Почта (Я-А)</option>
            <option value="group-asc">Группа (А-Я)</option>
            <option value="group-desc">Группа (Я-А)</option>
        </select>
    )
}
