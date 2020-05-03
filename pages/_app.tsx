import * as React from 'react'
import { CacheProvider } from '@emotion/react'
import { cache } from '@emotion/css'
import { globalStyles } from '../styles/global'
import {AppPropsType} from 'next/dist/next-server/lib/utils'

const App = ({ Component, pageProps }: AppPropsType) => (
  <CacheProvider value={cache}>
    {globalStyles}
    <Component {...pageProps} />
  </CacheProvider>
)

export default App
