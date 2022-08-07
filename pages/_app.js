import { css, Global } from '@emotion/react';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout.js';
import { getParsedCookie } from '../util/cookies.ts';

function MyApp({ Component, pageProps }) {
  const [cartCounter, setCartCounter] = useState(0);

  useEffect(() => {
    const cookie = getParsedCookie('cart');
    let totalCartProducts = 0;
    for (let i = 0; i < cookie.length; i++) {
      totalCartProducts += Number(cookie[i].quantity);
    }
    console.log('products in the cart are:', totalCartProducts);
    setCartCounter(totalCartProducts);
  }, []);

  pageProps.cartCounter = cartCounter;
  pageProps.setCartCounter = setCartCounter;

  return (
    <>
      <Global
        styles={css`
          html,
          body {
            font-family: 'Orbitron', sans-serif;
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            background-color: #fefbed;
            box-sizing: border-box;
          }
          * {
            box-sizing: border-box;
          }
        `}
      />
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
