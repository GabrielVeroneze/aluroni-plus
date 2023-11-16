import { useEffect, useState } from 'react'
import { ICardapioItem } from '@/interfaces/ICardapioItem'

export const useBuscarCardapioPratos = () => {
    const [cardapioPratos, setCardapioPratos] = useState<ICardapioItem[]>([])
    
    useEffect(() => {
        (async function () {
            try {
                const resposta = await fetch('https://my-json-server.typicode.com/gabrielveroneze/aluroni-api/itens')
                const dados = await resposta.json()
                setCardapioPratos(dados)
            } catch (erro) {
                console.log(erro)
            }
        })()
    }, [])

    return {
        cardapioPratos
    }
}
