import { usePratos } from '@/context/Pratos/usePratos'
import Recomendado from '@/components/Recomendado'
import styles from './Inicio.module.scss'
import stylesCommon from '@/sass/common/EstilosComuns.module.scss'

const Inicio = () => {
    const { pratos } = usePratos()
    let pratosRecomendados = [...pratos]

    pratosRecomendados = pratosRecomendados
        .sort(() => 0.5 - Math.random())
        .splice(0, 3)

    return (
        <section>
            <h3 className={stylesCommon.titulo}>Recomendações da cozinha</h3>
            <div className={styles.recomendados}>
                {pratosRecomendados.map(prato => (
                    <Recomendado key={prato.id} prato={prato} />
                ))}
            </div>
        </section>
    )
}

export default Inicio
