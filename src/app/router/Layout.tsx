import styles from './Layout.module.scss'
import {Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <div className={styles.root}>
            <nav className={styles.nav}>
                <span className={styles.logo}>Kaspersky<span> users manager</span></span>
            </nav>
            <main className={styles.main}>
                <Outlet/>
            </main>
        </div>
    )
}