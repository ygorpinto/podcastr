import Document, { Head, Main, Html, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                </Head>
                    <title>Podcastr</title>
                <Main />
                <NextScript />
            </Html>
        )
    }
}