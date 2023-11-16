import React from 'react'
import ReactDOM from 'react-dom/client'
import 'normalize.css'
import '@/sass/_global.scss'
import Cardapio from '@/pages/Cardapio'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Cardapio />
    </React.StrictMode>
)
