import { default as NextDocument, Head, Main, NextScript } from 'next/document'
import { extractCritical } from '@emotion/server'
import {EmotionCritical} from '@emotion/server/types/create-instance'

export default class Document extends NextDocument<EmotionCritical> {
  static getInitialProps ({ renderPage }) {
    const page = renderPage()
    const styles = extractCritical(page.html)
    return { ...page, ...styles }
  }

  render () {
    return (
      <html>
        <Head>
          <style
            data-emotion-css={this.props.ids.join(' ')}
            dangerouslySetInnerHTML={{ __html: this.props.css }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
