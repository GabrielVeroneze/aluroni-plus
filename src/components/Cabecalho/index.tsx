import styles from './Cabecalho.module.scss'

const Cabecalho = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__text}>
                A casa do código e da massa
            </div>
        </header>
    )
}

export default Cabecalho
