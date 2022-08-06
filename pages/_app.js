/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react';
// import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout.js';
// import { getLocalStorage, setLocalStorage } from '../util/localStorage.js';
import { getParsedCookie } from '../util/cookies.ts';

// const cookieBannerStyles2 = (isOpen) => css`
//   height: ${isOpen ? '85px' : 0};
//   overflow: hidden;
//   transition: all 200ms ease-in;
//   display: flex;
//   justify-content: space-between;
// `;

// const cookieWarningStyles = css`
//   font-family: 'Orbitron', sans-serif;
// `;

// const cookieButtonStyles = css`
//   align-items: center;
//   background-color: #ffffff;
//   border: 1px solid rgba(0, 0, 0, 0.1);
//   border-radius: 0.25rem;
//   box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
//   box-sizing: border-box;
//   color: rgba(0, 0, 0, 0.85);
//   display: inline-flex;
//   cursor: pointer;
//   font-family: 'Orbitron', sans-serif;
//   font-size: 16px;
//   font-weight: 600;
//   justify-content: center;
//   line-height: 1.25;
//   margin: 0;
//   min-height: 3rem;
//   padding: calc(0.875rem - 1px) calc(1.5rem - 1px);
//   position: relative;
//   text-decoration: none;
//   transition: all 250ms;
//   user-select: none;
//   -webkit-user-select: none;
//   touch-action: manipulation;
//   vertical-align: baseline;
//   width: auto;

//   :hover,
//   :focus {
//     border-color: rgba(0, 0, 0, 0.15);
//     box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
//     color: rgba(0, 0, 0, 0.65);
//   }

//   :hover {
//     transform: translateY(-1px);
//   }

//   :active {
//     background-color: #f0f0f1;
//     border-color: rgba(0, 0, 0, 0.15);
//     box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
//     color: rgba(0, 0, 0, 0.65);
//     transform: translateY(0);
//   }
// `;

function MyApp({ Component, pageProps }) {
  // const [areCookiesAccepted, setAreCookiesAccepted] = useState(false);
  const [cartCounter, setCartCounter] = useState(0);

  // function cookieBannerButtonHandler() {
  //   // 2. set the value for the cookieBanner
  //   setLocalStorage('areCookiesAccepted', true);
  //   setAreCookiesAccepted(true);
  // }

  // // useEffect is only frontend
  // useEffect(() => {
  //   // 1. we need to check if there is already a value for the cookie banner
  //   if (getLocalStorage('areCookiesAccepted')) {
  //     setAreCookiesAccepted(getLocalStorage('areCookiesAccepted'));
  //   }
  // }, []);

  // useEffect(() => {
  //   const showAmount = async () => {
  //     const updatedCart = await (Cookies.get('cart')
  //       ? JSON.parse(Cookies.get('cart'))
  //       : []);
  //     console.log('from inside UseEffect', updatedCart);
  //     setCartCounter(updatedCart);
  //   };
  //   showAmount().catch(console.error);
  // }, []);

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
        style={css`
          html,
          body {
            font-family: 'Orbitron', sans-serif;
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
          }
          * {
            box-sizing: border-box;
          }
        `}
      />
      {/* <div css={cookieBannerStyles2(!areCookiesAccepted)}>
        <p css={cookieWarningStyles}>
          <strong>Yes, we also use cookies:</strong> to remember logged-in users
          and analyze how this site is used. By continuing to browse, you
          consent to their use as detailed in our cookies policy.
        </p>

        <button
          css={cookieButtonStyles}
          onClick={() => {
            cookieBannerButtonHandler();
          }}
        >
          {[[], false, null, undefined]}
          Got it
        </button>
      </div> */}
      <Layout cartCounter={cartCounter} setCartCounter={setCartCounter}>
        <Component
          {...pageProps}
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
      </Layout>
    </>
  );
}

export default MyApp;
