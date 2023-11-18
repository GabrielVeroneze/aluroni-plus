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
                >
                    <Route index element={<Inicio />} />
                    <Route
                        path="cardapio"
                        element={
                            <BuscaProvider>
                                <FiltroProvider>
                                    <OrdenarProvider>
                                        <Cardapio />
                                    </OrdenarProvider>
                                </FiltroProvider>
                            </BuscaProvider>
                        }
                    />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes
