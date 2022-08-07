import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';

const mainStyles = css`
  text-align: center;
  margin: 0;
  font-size: 22px;
  font-family: 'Orbitron', sans-serif;
  min-height: 100vh;
  padding-bottom: 30px;
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
  border-bottom: 1px solid #2b3826;
  border-top: 1px solid #2b3826;
  margin-bottom: 0;
  padding-right: 568px;
  height: 90px;

  div {
    max-width: 1120px;
    border-right: 1px solid #2b3826;
    padding: 10px 0 10px 0;
  }
`;

const bgTextStyles = css`
  position: relative;
  top: 110%;
  left: 40%;
  padding-top: 15vh;
  padding-bottom: 35vh;
  margin-right: 50px;
  padding-left: 290px;
  padding-right: 20px;
  transform: translate(-50%, -50%);
  line-height: 3rem;
  text-align: center;
  text-shadow: 1px 1px 1px #3c5c5e;
  font-family: 'Orbitron', sans-serif;
  font-style: normal;
  font-weight: 800;
  font-stretch: normal;
  font-size: 60px;
  line-height: 1.2;
  color: #fcf8f9;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-shadow: -1px -1px 0px #444, 1px -1px 1px #444, -1px 1px 1px #444,
    1px 1px 0px #444;
  max-width: 620px;
`;

const paragraphStyles = css`
  font-family: 'Orbitron', sans-serif;
  width: 900px;
  text-align: left;
`;

const imageTextWrapperStyles = css`
  display: flex;
  gap: 20px;
  border-bottom: 2px solid #2b3826;
`;

const imageWrapperStyles = css`
  display: flex;
  margin-left: 10px;
  margin-top: 0;
  margin-bottom: 0;
  padding-bottom: 0;
  height: 600px;
  border-right: 1px solid #2b3826;
`;

const imageTwoAndThreeStyles = css`
  display: flex;
  flex-direction: column;
  border-right: 2px solid #ffe2e0;
`;

const imageTwoStyles = css`
  border-bottom: 2px solid #ffe2e0;
  height: 300px;
`;

const textStyles = css`
  display: flex;
  flex-direction: column;
  line-height: 1.8;

  p {
    margin: 0;
    padding: 0;
  }
`;

const secondSectionStyles = css`
  display: flex;
  height: 570px;
`;

const secondParagraphStyles = css`
  width: 800px;

  p {
    margin-left: 10px;
    text-align: left;
    font-size: 22px;
    line-height: 1.8;
  }
`;

const secondSectionImagesStyles = css`
  display: flex;
  border-left: 1px solid #2b3826;
  height: 600px;
`;

const firstTwoImagesStyles = css`
  display: flex;
  flex-direction: column;
  border-right: 2px solid #ffe2e0;
`;

const aboutOwnersCutStyles = css`
  border-bottom: 2px solid #ffe2e0;
  height: 346px;
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
          {/* <div css={bgWrapStyles}>
            <Image
              src="/about-title-2.jpg"
              alt="bicycle illustration"
              width={1200}
              height={90}
              layout="responsive"
            />
          </div> */}
          <div css={heroTextContainerStyles}>
            <div>
              <h1 css={bgTextStyles}>About</h1>
            </div>
          </div>
        </section>
        <section>
          <div css={imageTextWrapperStyles}>
            <div css={imageWrapperStyles}>
              <div css={imageTwoAndThreeStyles}>
                <div css={imageTwoStyles}>
                  <Image src="/bike-shop-2.jpg" width={400} height={328} />
                </div>
                <Image src="/bike-shop-3.jpg" width={400} height={328} />
              </div>
              <Image src="/bike-shop.jpg" width={400} height={600} />
            </div>
            <div css={textStyles}>
              <h2>About the shop</h2>
              <p css={paragraphStyles}>
                FahrRadikal is a small bike shop based in Vienna, Austria.{' '}
                <br /> Our bikes are pre-loved ones which have been renovated
                and are full functioning. <br /> One of our main goal is to
                provide our costumer with a quality product for an affordable
                price.
                <br />
                We are also hosting workshops and events, as we would like to
                grow a community of bike lovers.
                <br /> Everyone is welcome, our shop is meant to be a safe
                space.
                <br /> If you are based in Vienna or just visiting and city and
                want to say "hi" just come by, be kind and respectful towards
                other people and get ready with us for your next adventure.
              </p>
            </div>
          </div>
          <div css={secondSectionStyles}>
            <div css={secondParagraphStyles}>
              <h2>About us</h2>
              <p>
                We are Eleonora and Greg, a young couple with a deep passion for
                cycling. We met by chance during a bike tour in the Italian Alps
                and decided to continue cycling together. <br />
                At that time we could only dream about having our own shop, but
                after five years of efforts and hard work here we are, spreading
                our passion for cycling culture and bringing awesome bicycles
                back to life. <br />
                Eleonora is the mechanic of the house, with a eye for accuracy
                and details. <br />
                Greg is the shop's expert, he can guess the bike you're looking
                for in the blink of an eye and love to chat about bikes and
                beers.
                <br /> Come join our beautiful community!
              </p>
            </div>
            <div css={secondSectionImagesStyles}>
              <div css={firstTwoImagesStyles}>
                <div css={aboutOwnersCutStyles}>
                  <Image src="/about-owners-cut.jpg" width={440} height={350} />
                </div>
                <Image src="/about-owners-him.jpg" width={440} height={350} />
              </div>
              <Image src="/about-owners-2.jpg" width={440} height={600} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
