import styles from './Layout.module.scss'
import {NavLink, Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <div className={styles.root}>
            <nav className={styles.nav}>
                <span className={styles.logo}>Kaspersky<span> users manager</span></span>
                <div className={styles.links}>
                    <NavLink to="/" end className={({ isActive }) => isActive ? styles.active: ''}>
                        Главная
                    </NavLink>
                    <NavLink to="/users" end className={({ isActive }) => isActive ? styles.active: ''}>
                        Пользователи
                    </NavLink>
                    <NavLink to="/groups" end className={({ isActive }) => isActive ? styles.active: ''}>
                        Группы
                    </NavLink>
                </div>
            </nav>
            <main className={styles.main}>
                <Outlet/>
            </main>
        </div>
    )
}