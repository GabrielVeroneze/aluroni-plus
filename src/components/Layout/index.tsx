import { Outlet } from 'react-router-dom'
import Cabecalho from '@/components/Cabecalho'

const Layout = () => {
    return (
        <main>
            <Cabecalho />
            <Outlet />
        </main>
    )
}

export default Layout