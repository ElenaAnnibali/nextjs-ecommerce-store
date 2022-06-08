import { css } from '@emotion/react';
import Cookies from 'js-cookie';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { getBikes } from '../util/bikesDatabase';
import { getParsedCookie, setStringifiedCookie } from '../util/cookies';

const mainStyles = css`
  min-height: 120vh;
`;

const spanStyles = css`
  display: flex;
  gap: 80px;
  font-size: 20px;
  margin-bottom: 50px;
  border-bottom-color: rgba(0, 0, 0, 0.15);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  padding-bottom: 30px;
`;

const articleStyles = css`
  margin-left: 400px;
  margin-right: 400px;
`;

const spanPriceStyles = css`
  margin-left: 60px;
`;

const emptyCartStyles = css`
  font-family: 'Orbitron', sans-serif;
  text-align: center;
  margin-top: 150px;
  min-height: 63vh;
`;

const cartStyles = css`
  font-family: 'Orbitron', sans-serif;

  h1 {
    text-align: center;
    margin-top: 40px;
    margin-bottom: 60px;
  }
`;

const containerStyles = css`
  display: flex;
  gap: 60px;
  margin-left: 300px;
  padding-bottom: 30px;
  border-bottom-color: rgba(0, 0, 0, 0.15);
  border-bottom-style: solid;
  border-bottom-width: 1px;
`;

const nameAndRemoveStyles = css`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-left: 30px;
  margin-right: 80px;
`;

const imageStyles = css`
  margin-right: 40px;
`;

const priceStyles = css`
  margin-right: 30px;
`;

const quantityStyles = css`
  margin-right: 50px;
`;

const buttonStyles = css`
  align-items: center;
  appearance: none;
  background-color: #fffbe8;
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

const secondContainerStyles = css`
  display: flex;
  justify-content: right;
  gap: 30px;
  padding-top: 30px;
  margin-right: 265px;

  button {
    align-items: center;
    appearance: none;
    background-color: #fffbe8;
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
  }
`;

export default function Cart(props) {
  const [productsInCart, setProductsInCart] = useState([]);
  const [sum, setSum] = useState(0);

  // get cookies from shopping page with useEffect
  useEffect(() => {
    const currentCart = Cookies.get('cart') ? getParsedCookie('cart') : [];
    setProductsInCart(currentCart);
  }, []);

  // calculate items in cart
  let totalAmount = 0;
  for (let i = 0; i < productsInCart.length; i++) {
    totalAmount += productsInCart[i].quantity;
  }

  // calculate Sum with UseEffect
  useEffect(() => {
    function caluclateTotalAmount() {
      let total = 0;
      productsInCart.map((productInCart) => {
        return (total +=
          props.product.find((product) => {
            return productInCart.id === product.id;
          }).price * productInCart.quantity);
      });
      setSum(total);
    }
    caluclateTotalAmount();
  }, [productsInCart, props.product]);

  return (
    <Layout>
      <Head>
        <title>Shopping Cart</title>
        <meta
          name="description"
          content="Here you can find the products you want to purchase and buy, add more or remove them"
        />
      </Head>
      <main css={mainStyles}>
        <div>
          {productsInCart.length === 0 ? (
            <div css={emptyCartStyles}>
              <h1>Your shopping cart is empty</h1>
              <Link href="/shop">continue shopping</Link>
            </div>
          ) : (
            <div css={cartStyles}>
              <h1>Shopping Cart</h1>
              <div css={spanStyles}>
                <span css={articleStyles}>Article</span>
                <span css={spanPriceStyles}>Price</span>
                <span>Quantity</span>
                <span>Total</span>
              </div>
              <div>
                {productsInCart.map((productInCart) => {
                  return (
                    <div key={`cart-${productInCart.id}`} css={containerStyles}>
                      {/* <div>{productInCart.quantity}</div> */}
                      <div css={imageStyles}>
                        <Image
                          src={`/${productInCart.id}.jpg`}
                          width={300}
                          height={180}
                        />
                      </div>
                      <div css={nameAndRemoveStyles}>
                        {/* product name */}
                        <div>
                          {
                            props.product.find((product) => {
                              return productInCart.id === product.id;
                            }).name
                          }
                        </div>{' '}
                        {/* remove button */}
                        <button
                          css={buttonStyles}
                          onClick={() => {
                            const updatedCart = productsInCart.filter(
                              (product) => {
                                return product.id !== productInCart.id;
                              },
                            );
                            console.log(
                              'after removing the product: ',
                              updatedCart,
                            );
                            setStringifiedCookie('cart', updatedCart);
                            setProductsInCart(updatedCart);
                          }}
                        >
                          remove
                        </button>
                      </div>
                      {/* product price */}
                      <div css={priceStyles}>
                        {props.product.find((product) => {
                          return productInCart.id === product.id;
                        }).price * productInCart.quantity}{' '}
                        €
                      </div>

                      <div css={quantityStyles}>
                        <label>
                          <input
                            type="number"
                            min="1"
                            max={
                              props.product.find((product) => {
                                return productInCart.id === product.id;
                              }).inStockQuantity
                            }
                            defaultValue={productInCart.quantity}
                            onChange={(event) => {
                              console.log(event);
                              const updatedCart = productInCart.slice();
                              updatedCart.find((product) => {
                                return product.id === productInCart.id;
                              }).quantity = Number(event.currentTarget.value);
                              totalAmount();
                              console.log(totalAmount);
                              console.log('updated cart:', updatedCart);
                              setStringifiedCookie('cart', updatedCart);
                              setProductsInCart(updatedCart);
                            }}
                          />
                        </label>
                      </div>
                      <div>
                        <span>{sum} €</span>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div>
                <div css={secondContainerStyles}>
                  <Link href="/shop">
                    <button>Continue shopping</button>
                  </Link>
                  <Link href="/checkout">
                    <button>Checkout</button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const product = await getBikes();

  const cart = JSON.parse(context.req.cookies.cart || '[]');

  return {
    props: {
      cart: cart,
      product: product,
    },
  };
}
