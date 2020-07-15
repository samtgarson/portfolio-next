import { Appear } from "../appear"
import styled from "@emotion/styled"
import { staticFontSize } from "~/styles/mixins"
import React from "react"
import { useVisibleElement } from "~/util/use-intersection"
import { padding } from "~/styles/vars"

const Wrapper = styled.div({
  padding,
  position: `relative`,
  margin: `10vh 0`
})

const Title = styled(Appear)({
  fontSize: staticFontSize(5),
  fontVariationSettings: `'wght' 400, 'wdth' 100`,
  textTransform: `uppercase`,
  marginBottom: 20
})

const Subtitle = styled.p({
  fontSize: `1.5rem`
})

const Grid = styled.ul({
  margin: 0,
  padding: 0,
  display: `grid`,
  gridTemplateColumns: `repeat(auto-fit, minmax(350px, 1fr))`,
  columnGap: padding * 3,
  rowGap: padding * 3
})

const GridItem = styled.li({
  listStyleType: `none`
})

const items: {
    title: string
    desc: JSX.Element
    url?: string
}[] = [
  {
    title: 'Dobble',
    desc: <p>A team I worked on played <a href="https://www.asmodee.co.uk/featured-product/dobble/">Dobble</a> a lot, which started as fun but ended up being a great way to build connection with each other. When COVID-19 happened, we could no longer play so I built an online version to keep us playing.</p>,
    url: 'https://dobble.samgarson.com'
  },
  {
    title: 'Great Orchestra',
    desc: <p>I was luckily enough to visit <a href="https://www.uva.co.uk/features/great-animal-orchestra">Great Animal Orchestra</a>, an immersive art installation. It was a surreal experience and one I tried to recreate as a way of learning about Web Audio APIs.</p>,
    url: 'https://great-orchestra.samgarson.com'
  },
  {
    title: 'pat-cli',
    desc: <p>One of the only things I couldn&apos;t do when coding full time on an iPad was use Postman, so I built a command-line client using React and <a href="https://github.com/vadimdemedes/ink">Ink</a>.</p>,
    url: 'https://pat.samgarson.com'
  },
  {
    title: 'What Next?',
    desc: <p>I&apos;ve always thought the <a href="https://enterprise.foursquare.com/products/places">Foursquare API</a> is an incredibly accessible, high quality and useful dataset so used it to build a small mobile app using Vue.js and <a href="https://nativescript.org">NativeScript</a> to make choosing where to go for lunch a little easier.</p>,
    url: 'https://apps.apple.com/ie/app/what-next/id1450204420'
  },
  {
    title: 'Music Practice',
    desc: <p>I set myself the goal of learning piano during COVID-19 lockdown, but it made much more sense to build an app to help myself learn piano rather than actually learning it. Built with SwiftUI.</p>
  }
]

export const Labs = () => {
  const { ref, visible } = useVisibleElement({ threshold: 0.25 })
  const gridItems = items.map(({ title, desc, url }) => (
    <GridItem key={title}>
      <h3>{ title }</h3>
      { desc }
      { url
        ? <a href={ url }>Read more about { title }</a>
        : <em>In active development</em>
      }
    </GridItem>
  ))

  return (
    <Wrapper ref={ref}>
      <h2><Title visible={visible} text="Labs" /></h2>
      <Subtitle>Recent projects and experiments.</Subtitle>
      <Grid>{ gridItems }</Grid>
    </Wrapper>
  )
}
