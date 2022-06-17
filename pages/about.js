import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';

const mainStyles = css`
  text-align: center;
  margin: 0;
  font-size: 40px;
  font-family: 'Orbitron', sans-serif;
  min-height: 140vh;
`;

const heroTextContainerStyles = css`
  display: flex;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: calc(100% * 8 / 12 - 1rem);
  max-width: calc(100% * 8 / 12 - 1rem);
  width: calc(100% * 8 / 12 - 1rem);
  border-bottom-color: rgba(0, 0, 0, 0.15);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  margin-bottom: 30px;
  padding-bottom: 30px;
  padding-right: 568px;
`;

const bgWrapStyles = css`
  z-index: -1;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  height: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

const bgTextStyles = css`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 3rem;
  text-align: center;
  padding-top: 0;
  text-shadow: 1px 1px 1px #3c5c5e;
  font-family: 'Orbitron', sans-serif;
  font-style: normal;
  font-weight: 800;
  font-stretch: normal;
  font-size: 60px;
  line-height: 1.2;
  margin: 0;
  padding-bottom: 30vh;
  color: #fcf8f9;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-shadow: -1px -1px 0px #444, 1px -1px 1px #444, -1px 1px 1px #444,
    1px 1px 0px #444;
  max-width: 620px;
`;

const paragraphStyles = css`
  font-family: 'Orbitron', sans-serif;
`;

export default function About() {
  return (
    <>
      <Head>
        <title>About Page</title>
        <meta name="description" content="About page" />
      </Head>
      <main css={mainStyles}>
        <section>
          <div css={bgWrapStyles}>
            <Image
              src="/about-title-2.jpg"
              alt="bicycle illustration"
              width={1200}
              height={289}
              layout="responsive"
            />
          </div>
          <div css={heroTextContainerStyles}>
            <h1 css={bgTextStyles}>About</h1>
          </div>
        </section>
        <section>
          <div>
            <Image src="/about.jpg" width={1200} height={800} />
            <p css={paragraphStyles}>
              FahrRadikal is a small bike shop based in the beautiful city of
              Vienna, Austria. Our bikes are pre-loved ones which have been
              renovated and are full functioning. One of our main goal is to
              provide our costumer with a quality product for an affordable
              price. "Mobility equality" "About the team" eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
              non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
              exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
              ex ea commodi consequatur? Quis autem vel eum iure reprehenderit
              qui in ea voluptate velit esse quam nihil molestiae consequatur,
              vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
