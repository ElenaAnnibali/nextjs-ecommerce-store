/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { GetServerSidePropsContext } from 'next';
// import Cookies from 'js-cookie';
// import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { getBike } from '../../util/bikesDatabase';
import { getParsedCookie, setStringifiedCookie } from '../../util/cookies';

// import { queryParamToNumber } from '../../util/queryParam';

const mainStyles = css`
  min-height: 80vh;
`;

const marginTopStyles = css`
  padding-top: 70px;
`;

const titleSectionStyles = css`
  max-width: 1680px;
  max-height: 147.01px;
  border-top: 1px solid #2b3826;
  border-bottom: 1px solid #2b3826;

  div {
    max-width: 1120px;
    border-right: 1px solid #2b3826;
  }
`;

const h1Styles = css`
  font-family: 'Orbitron', sans-serif;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 40px;
  margin-top: 0;
  margin-bottom: 0;
`;

const twinSectionStyles = css`
  display: flex;
  max-width: 1680px;
  max-height: 492px;

  border-bottom: 1px solid #2b3826;
`;

const productStyles = css`
  width: 1200px;
  margin: 0;
  padding: 0;
  border-right: 1px solid #2b3826;
`;

const infoStyles = css`
  display: flex;
  flex-direction: column;
  font-family: 'Orbitron', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 3rem;
  text-align: justify;
  margin-top: 20px;
  margin-right: 250px;
  margin-left: 20px;
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

const infoButtonStyles = css`
  display: flex;
  flex-direction: column;
`;

const inputButtonStyles = css`
  display: flex;
  gap: 50px;
`;

const quantityStyles = css`
  justify-content: center;
  font-family: 'Orbitron', sans-serif;
  font-size: 16px;
  margin-bottom: 20px;
  margin-left: 80px;
`;

const inputStyles = css`
  padding: 10px;
  border-radius: 4px;
  font-family: 'Orbitron', sans-serif;
  font-size: 16px;

  border-color: rgba(0, 0, 0, 0.733);
  margin-left: 10px;

  :focus {
    outline: none;
    border-color: #b75200;
  }
`;

type DatabasePruductsProps = {
  id: number;
  name: string;
  type: string;
  status: string;
  price: string;
  inStockQuantity: string;
};

type Props = {
  product: DatabasePruductsProps;
  cartCounter: number;
  setCartCounter?: any;
  status?: number;
};

export default function Bike(props: Props) {
  console.log('produtId props are:', props);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  console.log('selected quantity: ', selectedQuantity);

  // function handleChange(event) {
  //   setSelectedQuantity(Number(event.currentTarget.value));
  //   const currentCart = getParsedCookie('cart') ? getParsedCookie('cart') : [];
  //   setStringifiedCookie('cart', currentCart);
  // }

  const amountInput = useRef<null | HTMLInputElement>(null);

  if (props.status === 404) {
    return (
      <div>
        <Head>
          <title>Product not found</title>
          <meta
            name="description"
            content="Unfortunately, we have had trouble locating the product you are looking for."
          />
        </Head>

        <h1>Product not found</h1>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{props.product.name}</title>
        <meta
          name="description"
          content={`${props.product.name} is a ${props.product.type}. ${props.product.status}`}
        />
      </Head>
      <main css={mainStyles}>
        <div css={marginTopStyles}>
          <div css={titleSectionStyles}>
            <div>
              <h1 css={h1Styles}>{props.product.name}</h1>
            </div>
          </div>
        </div>

        <div css={twinSectionStyles}>
          <div css={productStyles}>
            <Image
              className="image"
              data-test-id="product-image"
              src={`/${props.product.id}.jpg`}
              width={1200}
              height={786}
            />
          </div>
          <div css={infoButtonStyles}>
            <div css={infoStyles}>
              <div>
                <strong>type:</strong> {props.product.type}
              </div>
              <div>
                <strong>description:</strong> {props.product.status}
              </div>
              <div data-test-id="product-price">
                <strong>price:</strong> {props.product.price} €
              </div>
              <div>
                <strong>in stock:</strong> {props.product.inStockQuantity}
              </div>
            </div>

            <div css={inputButtonStyles}>
              <div css={quantityStyles} data-test-id="product-quantity">
                <label>
                  Quantity:
                  <input
                    disabled={
                      Number(props.product.inStockQuantity) === 0 ? true : false
                    }
                    type="number"
                    ref={amountInput}
                    name="quantity"
                    min="1"
                    max={props.product.inStockQuantity}
                    defaultValue="1"
                    onInput={(event) => {
                      if (!event.currentTarget.validity.valid) {
                        event.currentTarget.value = '';
                      }
                    }}
                    onChange={(event) => {
                      setSelectedQuantity(Number(event.currentTarget.value));
                    }}
                    css={inputStyles}
                  />
                </label>
              </div>
              <button
                data-test-id="product-add-to-cart"
                css={buttonStyles}
                onClick={() => {
                  const currentCart = getParsedCookie('cart');

                  console.log(currentCart);

                  const selectedBike = currentCart.find(
                    (bike: DatabasePruductsProps) =>
                      bike.id === props.product.id,
                  );

                  if (selectedBike) {
                    selectedBike.quantity =
                      Number(selectedBike.quantity) + Number(selectedQuantity);
                    console.log(currentCart);
                    props.setCartCounter(
                      props.cartCounter + Number(selectedQuantity),
                    );
                    setStringifiedCookie('cart', currentCart);
                  } else {
                    const updatedCart = [
                      ...currentCart,
                      {
                        id: props.product.id,
                        quantity: selectedQuantity,
                      },
                    ];
                    setStringifiedCookie('cart', updatedCart);
                    console.log(updatedCart);
                  }
                }}
                disabled={
                  Number(selectedQuantity) >=
                  Number(props.product.inStockQuantity)
                    ? true
                    : false
                }
              >
                Shop now
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  // const bikeId = queryParamToNumber(context.query.bikeId);

  const product = await getBike(Number(context.query.bikeId));
  console.log('selected produt:', product);

  return {
    props: {
      product: product,
    },
  };
}
