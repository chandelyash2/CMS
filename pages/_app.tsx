import type { AppProps } from 'next/app'
import styles from '../styles/globals.module.css'
import React, { useState } from 'react'
import { UserModalContext } from '../context'
import { client } from '../graphql-documents'
import {

  ApolloProvider,

} from "@apollo/client"
import Head from 'next/head'
function MyApp({ Component, pageProps }: AppProps) {

  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <ApolloProvider client={client}>
      <UserModalContext>
        <div className={styles.body}>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />

          </Head>
          <Component {...pageProps} />

        </div>
      </UserModalContext>
    </ApolloProvider>

  )
}

export default MyApp
