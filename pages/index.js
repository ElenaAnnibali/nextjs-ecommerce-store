import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const mainStyles = css`
  min-height: 140vh;
`;

const heroTextContainerStyles = css`
  width: 1119px;
  height: 147.01px;
  border-top: 1px solid #2b3826;
  border-right: 1px solid #2b3826;
  border-bottom: 1px solid #2b3826;
`;

const firstSectionStyles = css`
  display: flex;
  flex-direction: column;
  max-height: 788.5px;
`;

const bgWrapStyles = css`
  max-width: 1120px;
  max-height: 641.48px;
  border-right: 1px solid #2b3826;
  border-bottom: 1px solid #2b3826;
  margin-bottom: 100px;
`;

const bgTextStyles = css`
  margin: 0;
  margin: 0;
  top: 50%;
  left: 50%;
  line-height: 3rem;
  text-align: center;
  padding-top: 30px;
  text-shadow: 1px 1px 1px #3c5c5e;
  font-family: 'Orbitron', sans-serif;
  font-style: normal;
  font-weight: 800;
  font-stretch: normal;
  font-size: 40px;
  line-height: 1.2;
  margin: 0;
  color: #fcf8f9;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-shadow: -1px -1px 0px #444, 1px -1px 1px #444, -1px 1px 1px #444,
    1px 1px 0px #444;
`;

const twinSectionStyles = css`
  display: flex;
`;

const rightSectionStyles = css`
  width: 560px;
  max-height: 763px;
  border-bottom: 1px solid #2b3826;
  border-top: 1px solid #2b3826;
  font-family: 'Orbitron', sans-serif;
  text-align: justify;
  font-size: 18px;
  line-height: 1.26;
  font-weight: 400;

  h2 {
    margin-left: 10px;
  }

  a {
    text-decoration: none;
    color: #612c23;
  }

  p {
    margin: 10px;
  }
`;

const buttonStyles = css`
  align-items: center;
  appearance: none;
  background-color: #612c23;
  border: 1px solid #dbdbdb;
  border-radius: 0.375em;
  box-shadow: none;
  box-sizing: border-box;
  color: #dbdbdb;
  cursor: pointer;
  display: inline-flex;
  font-family: 'Orbitron', sans-serif;
  font-size: 1rem;
  height: 2.5em;
  width: 9em;
  margin-top: 20px;
  justify-content: center;
  line-height: 1.5;
  padding: calc(0.5em - 1px) 1em;
  position: relative;
  text-align: center;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: top;
  white-space: nowrap;
  margin-left: 10px;

  :active {
    border-color: #ac716c;
    outline: 0;
  }

  :focus {
    border-color: #612c23;
    outline: 0;
  }

  :hover {
    border-color: #ac716c;
  }

  :focus:not(:active) {
    box-shadow: rgba(72, 95, 199, 0.25) 0 0 0 0.125em;
  }
`;

const secondSectionContainerStyles = css`
  display: flex;
  justify-content: center;
  max-width: 1680px;
  max-height: 1272px;
  gap: 40px;
  margin-top: 100px;
`;

const secondSectionSubcontainerStyles = css`
  max-width: 540px;
  max-height: 1085px;
  font-family: 'Orbitron', sans-serif;

  &.makeLeftBorder {
    border-left: 1px solid #2b3826;
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
      <Head>
        <title>Home page</title>
        <meta name="description" content="Dashboard for the application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main css={mainStyles}>
        <div css={twinSectionStyles}>
          <section css={firstSectionStyles}>
            <div css={heroTextContainerStyles}>
              <p css={bgTextStyles}>
                Give yourself a second-hand <br /> bike
              </p>
            </div>
            <div css={bgWrapStyles}>
              <Image
                src="/zoltan.jpg"
                alt="bicycle illustration"
                width={1200}
                height={681.48}
                layout="responsive"
              />
            </div>
          </section>
          <section css={rightSectionStyles}>
            <div>
              <h2>Why second-hand bicycles?</h2>
              <p>
                We strongly believe in the importance of a more sustainable
                mobility system, and we stand for{' '}
                <Link href="https://www.peopleformobilityjustice.org/">
                  mobility justice
                </Link>
                .<br /> Our main goal is to provide costumers with an affordable
                product which is still functioning and mantains a certain
                stylish vibe.
                <br />
                Come visit us in Vienna or have a look at our online shop.
              </p>
              <button css={buttonStyles}>
                <Link href="/shop">
                  <span>Shop our bikes</span>
                </Link>
              </button>
            </div>
          </section>
        </div>
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
    </div>
  );
}
