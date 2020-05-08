import * as React from 'react'
import Document, { Head, Main, NextScript, DocumentContext } from 'next/document'
import { extractCritical } from '@emotion/server'
import { EmotionCritical } from '@emotion/server/types/create-instance'

export default class CustomDocument extends Document<EmotionCritical> {
  static async getInitialProps ({ renderPage }: DocumentContext) {
    const page = await renderPage()
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
          <link rel="stylesheet" type="text/css" href="/fonts/studio-feixen.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
