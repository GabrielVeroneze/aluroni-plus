import { useContext } from "react"
import { FiltroContext } from "./Filtro"

export const useFiltro = () => {
    const { filtro, setFiltro } = useContext(FiltroContext)

    const selecionarFiltro = (id: number) => {
        if (filtro === id) {
            return setFiltro(null)
        }

        setFiltro(id)
    }

    return {
        filtro,
        selecionarFiltro,
    }
}