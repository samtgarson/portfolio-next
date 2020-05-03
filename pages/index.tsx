import * as React from 'react'
import { Theme, Themes } from '~/styles/theme'

const Home = () => {
  const { setTheme } = Theme.useContainer()

  return (
    <h1
      onMouseOver={() => setTheme(Themes.White) }
      onMouseOut={() => setTheme(Themes.Dark) }
    >Hello world</h1>
  )
}

export default Home
