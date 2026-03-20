import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetUsersQuery } from '@/entities/user/api/userApi'
import styles from './GroupsPage.module.scss'

const GROUP_META: Record<string, string> = {
    'CDN/CEO':             'Руководство и стратегическое управление',
    'CDN/Managers':        'Руководители отделов и тимлиды',
    'CDN/Financials':      'Финансы, бухгалтерия и отчётность',
    'CDN/Top Kvants':      'Старшие количественные аналитики',
    'CDN/Human resources': 'HR, подбор персонала и кадровые операции',
    'CDN/Outsourced':      'Внешние подрядчики и партнёры',
    'CDN/Kvants':          'Количественные исследования и аналитика',
    'CDN/Sales':           'Продажи, рост и работа с клиентами',
    'Unmanaged':           'Пользователи без назначенной группы',
}

export const GroupsPage = () => {
    const navigate = useNavigate()
    const { data: users = [], isLoading } = useGetUsersQuery()

    const groups = useMemo(() => {
        const map: Record<string, string[]> = {}
        users.forEach((u) => {
            if (!map[u.group]) map[u.group] = []
            map[u.group].push(u.name)
        })
        return Object.entries(map).map(([name, members]) => ({
            name,
            members,
            description: GROUP_META[name] ?? '',
        }))
    }, [users])

    if (isLoading) return <p className={styles.state}>Загрузка…</p>

    return (
        <div className={styles.page}>
            <button className={styles.back} onClick={() => navigate('/')}>
                ← Назад
            </button>

            <div className={styles.header}>
                <h1 className={styles.title}>Группы</h1>
                <span className={styles.subtitle}>{groups.length} групп · {users.length} пользователей</span>
            </div>

            <div className={styles.grid}>
                {groups.map((group) => (
                    <div key={group.name} className={styles.card}>
                        <p className={styles.cardTitle}>{group.name}</p>
                        <p className={styles.cardDesc}>{group.description}</p>
                        <div className={styles.count}>
                            <span>{group.members.length}</span>{' '}
                            {group.members.length === 1 ? 'участник' : 'участников'}
                        </div>
                        <ul className={styles.memberList}>
                            {group.members.map((name) => (
                                <li key={name} className={styles.member}>{name}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}
