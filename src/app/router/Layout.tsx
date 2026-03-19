import styles from './Layout.module.scss'

export const Layout = () => {
    return (
        <div className={styles.root}>
            <nav className={styles.nav}>
                <span className={styles.logo}>Kaspersky<span>users manager</span></span>
            </nav>
        </div>
    )
}