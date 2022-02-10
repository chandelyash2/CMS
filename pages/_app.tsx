import type { AppProps } from 'next/app'
import styles from '../styles/globals.module.css'
import { client } from '../graphql-documents'
import {

  ApolloProvider,

} from "@apollo/client"
import Head from 'next/head'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <div className={styles.body}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />

        </Head>
        <Component {...pageProps} />

      </div>
    </ApolloProvider>

  )
}

export default MyApp
