import classNames from 'classnames'
import notFoundImagem from '@/assets/not_found.svg'
import styles from './NotFound.module.scss'
import stylesCommon from '@/sass/common/EstilosComuns.module.scss'

const NotFound = () => {
    return (
        <section
            className={classNames({
                [styles.secao]: true,
                [stylesCommon.container]: true,
            })}
        >
            <img src={notFoundImagem} alt="Erro 404" />
        </section>
    )
}

export default NotFound