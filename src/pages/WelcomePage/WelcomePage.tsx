import styles from './WelcomePage.module.scss'

export const WelcomePage = () => {
    return (
        <div className={styles.page}>
            <h1 className={styles.title}>Kaspersky<span> users manager</span></h1>
            <p className={styles.subtitle}>
                Система управления персоналом. Просматривайте, добавляйте и удаляйте пользователей и группы.
            </p>
            <div className={styles.stats}>
                <div className={styles.stat}>
                    <span className={styles.statNum}>18</span>
                    <span className={styles.statLabel}>Пользователей</span>
                </div>
                <div className={styles.stat}>
                    <span className={styles.statNum}>9</span>
                    <span className={styles.statLabel}>Групп</span>
                </div>
                <div className={styles.stat}>
                    <span className={styles.statNum}>3</span>
                    <span className={styles.statLabel}>Без группы</span>
                </div>
            </div>
        </div>
    )
}