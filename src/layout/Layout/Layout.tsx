import { NavLink, Outlet } from "react-router-dom";
import styles from './Layout.module.css';
// import { useEffect } from "react";
import cn from 'classnames';

export function Layout() {

    // const location = useLocation();
    // useEffect(() => {
    //     console.log(location)
    // }, [location])


    return <div className={styles['container']}>
        <div className={styles['header']}>
            <div className={styles['nav']}>
                <NavLink className={({ isActive }) => cn(styles['link'],
                    {
                        [styles.active]: isActive
                    })} to="/">Товары</NavLink> <br />
                <NavLink className={({ isActive }) => cn(styles['link'],
                    {
                        [styles.active]: isActive
                    })} to="/cart">Корзина</NavLink>
            </div>
            <div className={styles['account']}>
                <div className={styles['avatar']}>
                    <img className={styles['avatar-image']} src="/logo.jpg" alt="Аватар пользователя" />
                </div>
                <div className={styles['account-info']}>
                    <h2 className={styles['account-heading']}>Николай Петров</h2>
                    <p className={styles['account-email']}>helloworld@gmail.com</p>
                </div>
            </div>
        </div>
        <div className={styles['main-content']}>
            <Outlet />
        </div>

    </div>
}