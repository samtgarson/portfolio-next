import * as React from 'react'
import { Intro } from '~/components/slides/intro'
/* import { About } from '~/components/slides/about' */
import { Highlights } from '~/components/slides/highlights'
import { ThemeDivider } from '~/components/theme-divider'
import { Themes } from '~/styles/theme'

const Home = () => (
  <>
    <Intro />
    <ThemeDivider before={Themes.White} after={Themes.Dark} />
    <Highlights />
  </>
)

export default Home
