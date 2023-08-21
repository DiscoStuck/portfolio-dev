import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <title>Juanjo Simon</title>
                    <meta name="description" content="Web development portfolio" />
                    <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
                    <meta property="og:title" content="Juanjo Simon" />
                    <meta property="og:description" content="Web development portfolio" />
                    <meta property="og:image" content="https://juanjosimon.com/og_image.jpg" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
