import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';

const thankYouStyles = css`
  margin: 0;
  font-family: 'Orbitron', sans-serif;
  text-align: center;
  padding-top: 150px;
  min-height: 63vh;
`;

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Thank you for your order!</title>
        <meta name="description" content="Tahnk you page" />
      </Head>
      <div css={thankYouStyles}>
        <h1>Thank you for your order!</h1>
        <p>Enjoy your bike</p>
        <Image src="/thankyou.jpeg" width={150} height={150} />
      </div>
    </>
  );
}
