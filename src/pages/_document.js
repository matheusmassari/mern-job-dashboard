import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head>
                {/* Favicon */}
                <link rel="icon" href="/favicon.ico" />
                {/* Google Fonts preconnect */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin
                />
                {/* Allura Font */}
                <link
                    href="https://fonts.googleapis.com/css2?family=Allura&display=swap"
                    rel="stylesheet"
                />
                {/* Poppins Font */}
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
                    rel="stylesheet"
                />
                {/* Fascinated FONT */}
                <link
                    href="https://fonts.googleapis.com/css2?family=Fascinate&display=swap"
                    rel="stylesheet"
                ></link>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
