// STYLES
import styles from './styles.module.scss.scss'

//DATE-FNS
import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'

export const Header = () => {
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR
  })

  return (
    <header className={styles.headerContainer}>
      <img src="/logo.svg" alt="logomarca Podcastr" />
      <p>O melhor para você ouvir, sempre</p>

      <span>{currentDate}</span>
    </header>
  )
}