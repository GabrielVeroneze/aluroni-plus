import { ICardapioItem } from "@/interfaces/ICardapioItem"
import Tags from "./Tags"
import styles from './Itens.module.scss'

interface ItensProps {
    item: ICardapioItem
}

const Itens = ({ item }: ItensProps) => {
    const { title, description, photo } = item

    return (
        <div className={styles.item}>
            <img
                className={styles.item__imagem}
                src={photo}
                alt={title}
            />
            <div className={styles.item__info}>
                <h2 className={styles.item__titulo}>
                    {title}
                </h2>
                <p className={styles.item__descricao}>
                    {description}
                </p>
                <Tags item={item} />
            </div>
        </div>
    )
}

export default Itens