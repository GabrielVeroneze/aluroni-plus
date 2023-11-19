import { useLocation } from 'react-router-dom'
import styles from './Prato.module.scss'

const Prato = () => {
    const { state } = useLocation()
    console.log(state)
    return (
        <div>Prato</div>
    )
}

export default Prato