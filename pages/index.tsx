import * as React from 'react'
import { Intro } from '~/components/slides/intro'
/* import { About } from '~/components/slides/about' */
import { Highlights } from '~/components/slides/highlights'
import { ThemeDivider } from '~/components/theme-divider'
import { Themes } from '~/styles/theme'
import Ideas from '~/components/slides/ideas'
import { Labs } from '~/components/slides/labs'

const Home = () => (
  <>
    <Intro />
    <ThemeDivider theme={Themes.Dark} />
    <Highlights />
    <ThemeDivider theme={Themes.White} />
    <Ideas />
    <ThemeDivider theme={Themes.Bright} />
    <Labs />
  </>
)

export default Home
