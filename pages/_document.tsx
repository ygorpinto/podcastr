import Document, { Head, Main, Html, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <title>Podcastr</title>
                </Head>
                <Main />
                <NextScript />
            </Html>
        )
    }
}