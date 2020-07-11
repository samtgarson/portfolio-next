import React from 'react'
import { GlobalStyles } from '../styles/global'
import { AppPropsType } from 'next/dist/next-server/lib/utils'
import { Theme } from '~/styles/theme'
import { Frame } from '~/components/frame'
import Head from 'next/head'
import { Background } from '~/components/background'

const App = ({ Component, pageProps }: AppPropsType) => {
  return (
    <>
      <Head>
        <title>Sam Garson</title>
        <link rel="stylesheet" type="text/css" href="/fonts/studio-feixen.css" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Theme.Provider>
        <Background />
        <GlobalStyles />
        <Frame />
        <Component {...pageProps} />
      </Theme.Provider>
    </>
  )
}

export default App
