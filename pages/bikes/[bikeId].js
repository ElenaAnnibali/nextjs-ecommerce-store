import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import Layout from '../../components/Layout';
import { getbike } from '../../util/bikesDatabase';
import { getParsedCookie, setStringifiedCookie } from '../../util/cookies';

const mainStyles = css`
  min-height: 100vh;
`;

const h1Styles = css`
  font-family: 'Orbitron', sans-serif;
  text-align: center;
  padding-top: 80px;
  font-size: 40px;
`;

const productStyles = css`
  display: flex;
  gap: 20px;
  justify-content: space-evenly;
  margin-left: 200px;
  margin-bottom: 25px;
  background-color: #fffbe8;
  border-radius: 4px;
  padding: 10px;
  border-color: rgba(0, 0, 0, 0.15);
  border-style: solid;
  border-width: 1px;
  max-width: 1200px;
`;

const infoStyles = css`
  display: flex;
  flex-direction: column;
  font-family: 'Orbitron', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 3rem;
  text-align: justify;
  align-items: stretch;
  max-width: 1100px;
  max-height: 600px;
  margin-right: 50px;
  margin-top: 40px;
`;

const buttonStyles = css`
  align-items: center;
  background-color: #e4c49c;
  border: 2px solid #111;
  border-radius: 8px;
  box-sizing: border-box;
  color: #111;
  cursor: pointer;
  display: flex;
  font-family: 'Orbitron', sans-serif;
  font-size: 16px;
  height: 48px;
  justify-content: center;
  line-height: 24px;
  max-width: 100%;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  margin-left: 800px;

  :after {
    background-color: #111;
    border-radius: 8px;
    content: '';
    display: block;
    height: 48px;
    left: 0;
    width: 100%;
    position: absolute;
    top: -2px;
    transform: translate(8px, 8px);
    transition: transform 0.2s ease-out;
    z-index: -1;
  }

  :hover:after {
    transform: translate(0, 0);
  }

  :active {
    background-color: #ffdeda;
    outline: 0;
  }

  :hover {
    outline: 0;
  }

  @media (min-width: 768px) {
    .button-56 {
      padding: 0 40px;
    }
  }
`;

export default function Bike(props) {
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  console.log('selected quantity: ', selectedQuantity);

  if (!props.bike) {
    return (
      <div>
        <Head>
          <title>Bike not found</title>
          <meta
            name="description"
            content="Unfortunately, we have had trouble locating the bike you are looking for."
          />
        </Head>

        <h1>Bike not found</h1>
      </div>
    );
  }

  return (
    <Layout>
      <Head>
        <title>{props.bike.name}</title>
        <meta
          name="description"
          content={`${props.bike.name} is a ${props.bike.type}. ${props.bike.status}`}
        />
      </Head>
      <main css={mainStyles}>
        <h1 css={h1Styles}>{props.bike.name}</h1>

        <div>
          <div css={productStyles}>
            <div>
              <Image
                className="image"
                src={`/${props.bike.id}.jpg`}
                width={1200}
                height={800}
              />
            </div>
            <div css={infoStyles}>
              <div>
                <strong>type:</strong> {props.bike.type}
              </div>
              <div>
                <strong>description:</strong> {props.bike.status}
              </div>
              <div>
                <strong>price:</strong> {props.bike.price} €
              </div>
              <div>
                <strong>in stock:</strong> {props.bike.inStockQuantity}
              </div>
            </div>
          </div>
        </div>
        <label>
          Amount
          <input
            type="number"
            name="quantity"
            min="1"
            max={props.bike.inStockQuantity}
            defaultValue="1"
            onChange={(event) => {
              setSelectedQuantity(event.currentTarget.value);
            }}
          />
        </label>
        <button
          css={buttonStyles}
          onClick={() => {
            const currentCart = getParsedCookie('cart')
              ? getParsedCookie('cart')
              : [];
            console.log(currentCart);

            const selectedBike = currentCart.find(
              (bike) => bike.id === props.bike.id,
            );

            if (selectedBike) {
              selectedBike.bikeQuantity =
                Number(selectedBike.bikeQuantity) + Number(selectedQuantity);
              console.log(currentCart);
              setStringifiedCookie('cart', currentCart);
            } else {
              const updatedCart = [
                ...currentCart,
                {
                  id: props.bike.id,
                  name: props.bike.name,
                  quantity: selectedQuantity,
                },
              ];
              setStringifiedCookie('cart', updatedCart);
              console.log(updatedCart);
            }
          }}
        >
          Shop now
        </button>
      </main>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const bike = await getbike(context.query.bikeId);

  return {
    props: {
      bike: bike,
    },
  };
}
