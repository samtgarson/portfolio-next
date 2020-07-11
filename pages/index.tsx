import * as React from 'react'
import { Intro } from '~/components/slides/intro'
/* import { About } from '~/components/slides/about' */
import { Highlights } from '~/components/slides/highlights'
import { ThemeDivider } from '~/components/theme-divider'
import { Themes } from '~/styles/theme'
import Ideas from '~/components/slides/ideas'

const Home = () => (
  <>
    <Intro />
    <ThemeDivider before={Themes.White} after={Themes.Dark} />
    <Highlights />
    <ThemeDivider before={Themes.Dark} after={Themes.White} />
    <Ideas />
  </>
)

export default Home
