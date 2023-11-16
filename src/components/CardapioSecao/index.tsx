import { useContext, useEffect, useState } from 'react'
import { useFiltro } from '@/context/Filtro'
import { BuscaContext } from '@/context/Busca'
import { OrdenarContext } from '@/context/Ordenar'
import { useBuscarCardapioPratos } from '@/hooks/useBuscarCardapioPratos'
import { ordenar, verificaBusca, verificaFiltro } from '@/utils/controles'
import { ICardapioItem } from '@/interfaces/ICardapioItem'
import Buscador from '@/components/Buscador'
import Filtros from '@/components/Filtros'
import Ordenador from '@/components/Ordenador'
import Itens from '@/components/Itens'
import filtros from '@/json/filtros.json' 
import styles from './CardapioSecao.module.scss'

const CardapioSecao = () => {
    const { cardapioPratos } = useBuscarCardapioPratos()
    const { filtro } = useFiltro()
    const { busca } = useContext(BuscaContext)
    const { ordenador } = useContext(OrdenarContext)

    const [pratos, setPratos] = useState<ICardapioItem[]>([])

    useEffect(() => {
        const novaLista = cardapioPratos.filter(prato => 
            verificaBusca(prato.title, busca) &&
            verificaFiltro(prato.category.id, filtro)
        )
        
        setPratos(ordenar(novaLista, ordenador))
    }, [cardapioPratos, busca, filtro, ordenador])

    return (
        <section className={styles.cardapio}>
            <h3 className={styles.cardapio__titulo}>Cardápio</h3>
            <Buscador />
            <div className={styles.cardapio__controles}>
                <div className={styles.cardapio__filtros}>
                    {filtros.map(opcao => (
                        <Filtros key={opcao.id} {...opcao} />
                    ))}
                </div>
                <Ordenador />
            </div>
            <div className={styles.cardapio__itens}>
                {pratos.map(item => (
                    <Itens key={item.id} item={item} />
                ))}
            </div>
        </section>
    )
}

export default CardapioSecao
