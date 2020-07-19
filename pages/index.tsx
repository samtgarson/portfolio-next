import * as React from 'react'
import { Intro } from '~/components/slides/intro'
import { Highlights } from '~/components/slides/highlights'
import { ThemeDivider } from '~/components/theme-divider'
import { Themes } from '~/styles/theme'
import { Ideas } from '~/components/slides/ideas'
import { Labs } from '~/components/slides/labs'
import { Contact } from '~/components/slides/contact'

const Home = () => (
  <>
    <Intro />
    <ThemeDivider theme={Themes.Dark} />
    <Highlights />
    <ThemeDivider theme={Themes.White} />
    <Ideas />
    <ThemeDivider theme={Themes.Bright} />
    <Labs />
    <ThemeDivider theme={Themes.Dark} />
    <Contact />
  </>
)

export default Home
