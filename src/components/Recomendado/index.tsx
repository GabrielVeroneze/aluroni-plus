import { ICardapioItem } from '@/interfaces/ICardapioItem'
import styles from './Recomendado.module.scss'

interface RecomendadoProps {
    prato: ICardapioItem
}

const Recomendado = ({ prato }: RecomendadoProps) => {
    return (
        <div className={styles.recomendado}>
            <img
                className={styles.recomendado__imagem}
                src={prato.photo}
                alt={prato.title}
            />
            <button className={styles.recomendado__botao}>
                Ver Mais
            </button>
        </div>
    )
}

export default Recomendado
