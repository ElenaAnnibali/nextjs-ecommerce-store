import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout.js';

const mainStyles = css`
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
  font-size: 40px;
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

const secondSectionContainerStyles = css`
  display: flex;
  justify-content: center;
  max-width: 1680px;
  max-height: 1272px;
  gap: 40px;
`;

const secondSectionSubcontainerStyles = css`
  max-width: 540px;
  max-height: 1085px;
  font-family: 'Orbitron', sans-serif;

  &.makeLeftBorder {
    border-left: 1px solid rgba(0, 0, 0, 0.15);
    height: auto;
    padding-left: 20px;
  }
`;

const secondSectionSubcontainerTextStyles = css`
  display: flex;
  flex-direction: column;
  text-align: center;

  p {
    font-size: 18px;
    font-weight: 400;
  }
`;

export default function Home() {
  return (
    <div>
      <Layout>
        <Head>
          <title>Home page</title>
          <meta name="description" content="Dashboard for the application" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main css={mainStyles}>
          <section>
            <div css={bgWrapStyles}>
              <Image
                src="/zoltan.jpg"
                alt="bicycle illustration"
                width={1200}
                height={789}
                layout="responsive"
              />
            </div>
            <div css={heroTextContainerStyles}>
              <p css={bgTextStyles}>
                Give yourself a second-hand <br /> bike
              </p>
            </div>
          </section>
          <div>
            <section css={secondSectionContainerStyles}>
              <div css={secondSectionSubcontainerStyles}>
                <Image width={479} height={550} src="/image-bike.png" />
                <div css={secondSectionSubcontainerTextStyles}>
                  <h3>Bike talk</h3>
                  <p>Stories about people and their bike adventures.</p>
                  <p>Read more</p>
                </div>
              </div>
              <div
                className="makeLeftBorder"
                css={secondSectionSubcontainerStyles}
              >
                <Image width={479} height={550} src="/workshop-beige.jpg" />
                <div css={secondSectionSubcontainerTextStyles}>
                  <h3>Workshops</h3>
                  <p>
                    Join one of our workshops and learn all the tricks for
                    customizing your bike.
                  </p>
                  <p>Upcoming events</p>
                </div>
              </div>
              <div
                className="makeLeftBorder"
                css={secondSectionSubcontainerStyles}
              >
                <Image width={479} height={550} src="/latest-news-2.jpg" />
                <div css={secondSectionSubcontainerTextStyles}>
                  <h3>Take it to the outdoor</h3>
                  <p>Your guide to riding with your bike around the world</p>
                  <p>Find out more</p>
                </div>
              </div>
            </section>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
        </main>
      </Layout>
    </div>
  );
}
