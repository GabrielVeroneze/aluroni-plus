import styles from './Inicio.module.scss'

const Inicio = () => {
    return (
        <section>
                
            <h3 className={styles.titulo}>Recomendações da cozinha</h3>
            <div className={styles.recomendados}>
            </div>
        </section>
    )
}

export default Inicio