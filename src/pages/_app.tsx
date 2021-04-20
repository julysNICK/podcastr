// STYLES
import '../styles/global.scss'
import styles from '../styles/app.module.scss'

// COMPONENTS
import { Header } from '../components/Header'
import { Player } from '../components/Player'

const MyApp = ({ Component, pageProps }) => {
  return (
    <div className={styles.wrapper}>
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
      <Player />
    </div>
  )
}

export default MyApp