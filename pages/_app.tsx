import * as React from 'react'
import { CacheProvider } from '@emotion/react'
import { cache } from '@emotion/css'
import { GlobalStyles } from '../styles/global'
import { AppPropsType } from 'next/dist/next-server/lib/utils'
import { Theme } from '~/styles/theme'
import { Frame } from '~/components/frame'

const App = ({ Component, pageProps }: AppPropsType) => (
  <CacheProvider value={cache}>
    <Theme.Provider>
      <GlobalStyles />
      <Frame />
      <Component {...pageProps} />
    </Theme.Provider>
  </CacheProvider>
)

export default App
