import styles from './Sidebar.module.css'

import logoDaxCode from '../assets/logo-dax-code.svg'

export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            <img src={logoDaxCode} />

            <div className={styles.profile}>
                <strong>Diego Alexandre</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}