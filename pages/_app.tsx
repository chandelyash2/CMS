import type { AppProps } from 'next/app'
import styles from '../styles/globals.module.css'
function MyApp({ Component, pageProps }: AppProps) {
  return(
    <div className={styles.body}>
    <Component {...pageProps} />

    </div>
  ) 
}

export default MyApp
