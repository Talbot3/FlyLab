import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render () {
    return (
      <html style={{ height: '100%'}}>
        <Head>
          <title>My page</title>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
          <meta name="apple-mobile-web-app-capable" content="yes"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <style>{`
            #__next { height: 100% }
          `}
          </style>
          {this.props.styleTags}
        </Head>
        <body style={{ height: '100%', margin: 0}}>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}