import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
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

const titleContainerStyles = css`
  max-width: 1680px;
  max-height: 147.01px;
  border-top: 1px solid #2b3826;
  border-bottom: 0px solid #2b3826;

  div {
    max-width: 1120px;
    border-right: 1px solid #2b3826;
    padding: 10px 0 10px 0;
  }
`;

const titleStyles = css`
  top: 0%;
  left: 0%;
  margin: 0;
  transform: translate(0%, 0%);
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
  padding-bottom: 1vh;
  color: #fcf8f9;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-shadow: -1px -1px 0px #444, 1px -1px 1px #444, -1px 1px 1px #444,
    1px 1px 0px #444;
  max-width: 620px;
  padding-top: 20px;
`;

const nameStyles = css`
  max-width: 1680px;
  border-top: 1px solid #2b3826;
  border-bottom: 1px solid #2b3826;

  div {
    max-width: 655px;
    border-right: 1px solid #2b3826;
    padding: 10px;
  }

  strong {
    margin-right: 8px;
  }
`;

const bikeContainerStyles = css`
  display: flex;
  flex-direction: column;
  // justify-content: center;
`;

const bikeFirstSubcontainerStyles = css`
  max-width: 1680px;
  // max-height: 444px;
  border-bottom: 1px solid #2b3826;
`;

const imageContainerStyles = css`
  max-width: 775.38px;
  max-height: 356px;
  border-right: 1px solid #2b3826;
`;

const imageStyles = css`
  margin-top: 60px;
  // max-height: 444px;
`;

const bikeSubcontainerStyles = css`
  display: flex;
  gap: 20px;
  justify-content: space-evenly;
  // margin-left: 200px;
  margin-bottom: 150px;
  // background-color: #fffbe8;
  // border-radius: 4px;
  // padding: 10px;
  // border-bottom: 1px solid #2b3826;
  div {
    // border-right: 1px solid #2b3826;
  }
`;

const bikeTextStyles = css`
  display: flex;
  flex-direction: column;
  text-align: justify;
  align-items: stretch;
  max-width: 1100px;
  max-height: 492px;
  line-height: 1.8;
  margin-right: 50px;
  margin-top: 40px;
  gap: 20px;
`;

const buttonStyles = css`
  align-items: center;
  appearance: none;
  background-color: #fff;
  border: 2px solid #2b3826;
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
    <>
      <Head>
        <title>Shop Page</title>
        <meta name="description" content="List of various bikes" />
      </Head>
      <main css={mainStyles}>
        <div>
          <div css={titleContainerStyles}>
            <div>
              <h1 css={titleStyles}>Shop bikes</h1>
            </div>
          </div>
        </div>

        <div css={bikeContainerStyles}>
          {props.bikes.map((bike) => {
            return (
              <div key={`bike-${bike.id}`} css={bikeFirstSubcontainerStyles}>
                <div css={nameStyles}>
                  <div>
                    <strong>Name:</strong>
                    {bike.name}
                  </div>
                </div>
                <div css={bikeSubcontainerStyles}>
                  <div css={imageContainerStyles}>
                    <Image
                      src={`/${bike.id}.jpg`}
                      width={700}
                      height={356}
                      css={imageStyles}
                    />
                  </div>
                  <div>
                    <div css={bikeTextStyles}>
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
    </>
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
