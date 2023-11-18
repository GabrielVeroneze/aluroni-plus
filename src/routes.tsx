import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { PratosProvider } from '@/context/Pratos/PratosContext'
import { BuscaProvider } from '@/context/Busca/BuscaContext'
import { FiltroProvider } from '@/context/Filtro/FiltroContext'
import { OrdenarProvider } from '@/context/Ordenar/OrdenarContext'
import Inicio from '@/pages/Inicio'
import Cardapio from '@/pages/Cardapio'
import Menu from '@/components/Menu'

const AppRoutes = () => {
    return (
        <Router>
            <Menu />
            <Routes>
                <Route
                    path="/"
                    element={
                        <PratosProvider>
                            <Inicio />
                        </PratosProvider>
                    }
                />
                <Route
                    path="/cardapio"
                    element={
                        <PratosProvider>
                            <BuscaProvider>
                                <FiltroProvider>
                                    <OrdenarProvider>
                                        <Cardapio />
                                    </OrdenarProvider>
                                </FiltroProvider>
                            </BuscaProvider>
                        </PratosProvider>
                    }
                />
            </Routes>
        </Router>
    )
}

export default AppRoutes
