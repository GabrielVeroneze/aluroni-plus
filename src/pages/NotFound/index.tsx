import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import notFoundImagem from '@/assets/not_found.svg'
import styles from './NotFound.module.scss'
import stylesCommon from '@/sass/common/EstilosComuns.module.scss'

const NotFound = () => {
    const navigate = useNavigate()

    return (
        <section
            className={classNames({
                [styles.secao]: true,
                [stylesCommon.container]: true,
            })}
        >
            <div className={styles.voltar}>
                <button
                    className={styles.voltar__botao}
                    onClick={() => navigate(-1)}
                >
                    &lt; Voltar
                </button>
            </div>
            <img src={notFoundImagem} alt="Erro 404" />
        </section>
    )
}

export default NotFound
