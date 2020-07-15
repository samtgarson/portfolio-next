/* eslint-disable react/jsx-key */
import React, { memo } from 'react'
import styled from '@emotion/styled'
import { padding, smallScreen } from '~/styles/vars'
import { Scroller } from '../scroller'
import { Star } from '../star'

const ideas: [string, string, JSX.Element | null][] = [
  ["Trust and transparency", "process and politics", <>
    <p>What most people in our industry call &quot;process&quot; can be a useful tool to help teams work like teams; but will not replace a shared vision, autonomy and trust. Put great people on a team, give them a clear goal and <a href="https://twitter.com/johncutlefish/status/975026422002589701?s=20">leave them alone</a>.</p>
  </>],
  ["Risk and experimentation", "planning and certainty", <>
    <p>The sooner we are honest with ourselves about what how little we know, the sooner we can start working to learn more. Everything in technology comes with risk, and there is very little certainty—but a trusted team with a shared goal will adapt and iterate to build a better product than we could ever have planned for.</p>
  </>],
  ["Celebration and introspection", "optics and theatre", <>
    <p>Celebrating our successes is crucial to building a team that works well together, but so is talking openly and honestly about our failures—and gaining real learnings from them. You can tell a lot about an organisation from the way it talks internally about its successes and failures.</p>
    <p>When we create the safety to talk to each other about our failures without retribution or judgement, we do more than learn from our mistakes—we build a genuine human connection with our teammates that is vital in allowing us to work together as one unit. After all, <a href="https://www.gov.uk/guidance/government-design-principles#make-things-open-it-makes-things-better">making things open makes things better</a>.</p>
  </>],
  ["Investment in teams", "investment in projects", <>
    <p>There is a variation on Conway&apos;s Law which states &quot;<a href="https://en.wikipedia.org/wiki/Conway's_law">The structure of any system designed by an organization is isomorphic to the structure of the organization</a>&quot;, and the strongest indicator of an organisation&apos;s true structure is how it spends its money.</p>
    <p>&quot;<a href="https://public.digital/2019/05/08/fix-the-finances-transform-the-organisation/">Fix the finances, transform the organisation</a>&quot;—orgs which fund teams end up with a long-lasting ability to build value and respond to change.</p>
  </>]
]

const Wrapper = styled.section({
  padding,
  background: `var(--accentColor)`,
  transition: `.5s background-color .2s ease`,
  borderRadius: 5,
  margin: `${padding * 2}px auto`,
  width: `90vw`,
  maxWidth: 700,
  [smallScreen]: {
    width: `85vw`,
    padding: padding / 2
  }
})

const List = styled.ol({
  listStyle: `none`,
  margin: `${padding} 0 0`,
  padding: 0,
  li: {
    counterIncrement: `ideasCounter`,
    margin: `${padding * 1.5}px 0 ${padding * 2.5}px`
  },
  h4: {
    '&::before': {
      content: `counter(ideasCounter) " "`,
      fontSize: `1.5rem`,
      fontVariationSettings: `"wght" 0, "wdth" 100`,
      marginRight: padding / 2
    },
    margin: 0,
    display: `inline-block`,
    fontWeight: `normal`,
    fontSize: `2.5rem`,
    fontVariationSettings: `'wght' 400, 'wdth' 0`,
    strong: {
      fontWeight: `normal`,
      fontVariationSettings: `'wght' 0, 'wdth' 100`
    }
  }
})

const Title = styled(Scroller)({
  margin: `0 -${padding}px`,
  [smallScreen]: {
    margin: `0 -${padding/2}px`
  }
})

const Punct = styled(Star)({
  margin: `0 auto`
})

const Ideas = () => {
  const items = ideas.map(idea => (
    <li key={idea.join()}>
      <h4>{ idea[0] }<strong> over </strong>{ idea[1] }</h4>
      { idea[2] }
    </li>
  ))

  return (
    <Wrapper>
      <Title text="Lessons I’ve learned" />
      <List>
        { items }
      </List>
      <div style={{ textAlign: "center" }}>
        <Punct size={ 20 } />
      </div>
    </Wrapper>
  )
}

export default memo(Ideas)
