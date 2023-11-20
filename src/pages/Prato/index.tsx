import { useEncontraPratoDaRota } from '@/hooks/useEncontraPratoDaRota'
import NotFound from '@/pages/NotFound'
import Voltar from '@/components/Voltar'
import Tags from '@/components/Tags'
import styles from './Prato.module.scss'

const Prato = () => {
    const { prato } = useEncontraPratoDaRota()

    if (!prato) {
        return <NotFound />
    }
    
    return (
        <>
            <Voltar />
            <section className={styles.prato}>
                <h1 className={styles.prato__titulo}>
                    {prato.title}
                </h1>
                <img
                    className={styles.prato__imagem}
                    src={prato.photo}
                    alt={prato.title}
                />
                <div className={styles.prato__conteudo}>
                    <p className={styles.prato__descricao}>
                        {prato.description}
                    </p>
                    <Tags item={prato}/>
                </div>
            </section>
        </>
    )
}

export default Prato