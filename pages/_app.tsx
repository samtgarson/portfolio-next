import * as React from 'react'
import { CacheProvider } from '@emotion/react'
import { cache } from '@emotion/css'
import { GlobalStyles } from '../styles/global'
import { AppPropsType } from 'next/dist/next-server/lib/utils'
import { Theme } from '~/styles/theme'
import { Frame } from '~/components/frame'
import Head from 'next/head'
import { Background } from '~/components/background'

const App = ({ Component, pageProps }: AppPropsType) => (
  <CacheProvider value={cache}>
    <Head>
      <title>Sam Garson</title>
    </Head>
    <Theme.Provider>
      <Background />
      <GlobalStyles />
      <Frame />
      <Component {...pageProps} />
    </Theme.Provider>
  </CacheProvider>
)

export default App
