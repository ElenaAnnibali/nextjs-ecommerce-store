import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';
import { getBikes } from '../util/bikesDatabase';

const mainStyles = css`
  font-family: 'Orbitron', sans-serif;
  text-align: center;
  margin: 0;
  font-size: 20px;
  max-width: 1700px;

  a {
    text-decoration: none;
    color: #1a0000;
  }
`;

const bgWrapStyles = css`
  z-index: -1;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  height: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  padding-right: 568px;
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
  font-size: 50px;
  line-height: 1.2;
  margin: 0;
  padding-bottom: 35vh;
  color: #fcf8f9;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-shadow: -1px -1px 0px #444, 1px -1px 1px #444, -1px 1px 1px #444,
    1px 1px 0px #444;
  max-width: 620px;
`;

const bikeContainerStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const imageStyles = css`
  margin-top: 60px;
`;

const bikeSubcontainerStyles = css`
  display: flex;
  gap: 20px;
  justify-content: space-evenly;
  margin-left: 200px;
  margin-bottom: 150px;
  background-color: #fffbe8;
  border-radius: 4px;
  padding: 10px;
  border-color: rgba(0, 0, 0, 0.15);
  border-style: solid;
  border-width: 1px;
  max-width: 1200px;
`;

const bikeTextStyles = css`
  display: flex;
  flex-direction: column;
  text-align: justify;
  align-items: stretch;
  max-width: 1100px;
  max-height: 600px;
  line-height: 1.8;
  margin-right: 50px;
  margin-top: 40px;
  gap: 30px;
`;

const buttonStyles = css`
  align-items: center;
  appearance: none;
  background-color: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 0.375em;
  box-shadow: none;
  box-sizing: border-box;
  color: #363636;
  cursor: pointer;
  display: inline-flex;
  font-family: 'Orbitron', sans-serif;
  font-size: 1rem;
  height: 2.5em;
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

export default function Shop(props) {
  return (
    <Layout>
      <Head>
        <title>Shop Page</title>
        <meta name="description" content="List of various bikes" />
      </Head>
      <main css={mainStyles}>
        <div>
          <div>
            <Image
              src="/shop-bike.jpg"
              width={1900}
              height={250}
              css={bgWrapStyles}
            />
          </div>
          <div css={heroTextContainerStyles}>
            <h1 css={bgTextStyles}>Shop bikes</h1>
          </div>
        </div>

        <div css={bikeContainerStyles}>
          {props.bikes.map((bike) => {
            return (
              <div key={`bike-${bike.id}`}>
                <div css={bikeSubcontainerStyles}>
                  <div>
                    <Image
                      src={`/${bike.id}.jpg`}
                      width={700}
                      height={400}
                      css={imageStyles}
                    />
                  </div>
                  <div>
                    <div css={bikeTextStyles}>
                      <div>
                        <strong>Name:</strong> <br />
                        {bike.name}
                      </div>
                      <div>
                        <strong>Type:</strong> <br /> {bike.type}
                      </div>
                      <div>
                        <strong>Price:</strong> <br /> {bike.price} €
                      </div>
                      <div>
                        <strong>In stock:</strong> <br /> {bike.inStockQuantity}
                      </div>
                      <Link
                        href={`/bikes/${bike.id}`}
                        // data-test-id="product-<product id>"
                      >
                        <button css={buttonStyles}>See more</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </Layout>
  );
}

export async function getServerSideProps() {
  const bikes = await getBikes();
  return {
    // Anything that you pass in the props
    // object will get passed to the component
    // at the top in the `props` parameter
    props: {
      bikes: bikes,
    },
  };
}
