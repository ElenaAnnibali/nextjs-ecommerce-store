import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout.js';

const mainStyles = css`
  font-family: 'Righteous', cursive;
  text-align: center;
  margin: 0;
  font-size: 40px;
  padding-top: 40px;
  a {
    text-decoration: none;
    color: #05d6a5;
  }
`;

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About Page</title>
      </Head>
      <main css={mainStyles}>
        <Link href="/about">About</Link>
      </main>
    </Layout>
  );
}
