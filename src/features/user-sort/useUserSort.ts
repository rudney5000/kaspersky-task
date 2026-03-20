import {useCallback, useState} from "react";

export type SortKey = 'name' | 'account' | 'email' | 'group'
export type SortDirection = 'asc' | 'desc'
export type SortConfig = { key: SortKey; direction: SortDirection } | null

export const useUserSort = () => {
    const [sortConfig, setSortConfig] = useState<SortConfig>(null)

    const handleSort = useCallback((config: SortConfig) => {
        setSortConfig(config)
    }, [])

    return { sortConfig, handleSort }
}