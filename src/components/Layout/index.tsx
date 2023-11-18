import { Outlet } from 'react-router-dom'
import Cabecalho from '@/components/Cabecalho'
import stylesCommon from '@/sass/common/EstilosComuns.module.scss'

const Layout = () => {
    return (
        <main>
            <Cabecalho />
            <div className={stylesCommon.container}>
                <Outlet />
            </div>
        </main>
    )
}

export default Layout