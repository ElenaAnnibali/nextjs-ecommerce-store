import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { createRef, useEffect, useRef, useState } from 'react';
import { getBikes } from '../util/bikesDatabase';
import { setStringifiedCookie } from '../util/cookies';

const mainStyles = css`
  min-height: 120vh;
`;

const spanStyles = css`
  display: flex;
  gap: 80px;
  font-size: 20px;
  margin-bottom: 50px;
  border-bottom: 1px solid #2b3826;
  padding-bottom: 30px;
`;

const articleStyles = css`
  margin-left: 600px;
  margin-right: 230px;
`;

const spanPriceStyles = css`
  margin-left: 60px;
`;

const emptyCartStyles = css`
  font-family: 'Orbitron', sans-serif;
  text-align: center;
  padding-top: 150px;
  min-height: 63vh;
`;

const cartStyles = css`
  font-family: 'Orbitron', sans-serif;
  h1 {
    text-align: center;
    padding-top: 40px;
    padding-bottom: 60px;
    margin: 0;
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
  }
`;

const containerStyles = css`
  display: flex;
  gap: 55px;
  // margin-left: 300px;
  // padding-bottom: 60px;
  // margin-bottom: 30px;
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
  margin-left: 300px;
  margin-bottom: 30px;
`;

const priceStyles = css`
  margin-right: 15px;
  margin-left: 15px;
  font-size: 20px;
  margin-top: 50px;
`;

const quantityContainerStyles = css`
  margin-right: 50px;
  margin-top: 50px;

  div {
    display: flex;
    gap: 10px;
  }
`;

const inStockQuantityStyles = css`
  margin-right: 178px;
  margin-left: 15px;
  font-size: 20px;
  margin-top: 50px;
`;

const quantityStyles = css`
  justify-content: center;
  font-family: 'Orbitron', sans-serif;
  font-size: 20px;
  margin-bottom: 20px;
  margin-left: 40px;
  padding: 5px 10px;
`;

const buttonStyles = css`
  align-items: center;
  appearance: none;
  background-color: #e59276;
  border: 1px solid #1f0000;
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
  border-top: 1px solid #2b3826;

  div {
    display: flex;
    justify-content: right;
    gap: 30px;
    padding-top: 30px;
    margin-right: 25px;
  }

  button {
    align-items: center;
    appearance: none;
    background-color: #e57676;
    border: 1px solid #1f0000;
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

const shopCheckoutStyles = css`
  display: flex;
`;

const totalAmountAndPriceStyles = css`
  display: flex;
  flex-direction: column;

  span {
    text-align: right;
  }
`;

export function totalSum(cartProducts, DatabaseProducts) {
  let total = 0;
  cartProducts.map((cartProduct) => {
    return (total +=
      DatabaseProducts.find((databaseProduct) => {
        return cartProduct.id === databaseProduct.id;
      }).price * cartProduct.quantity);
  });
  console.log('here is the total sum', total);
  return total;
}

export default function Cart(props) {
  const [productsInCart, setProductsInCart] = useState(props.cart);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    setSum(totalSum(productsInCart, props.products));
  }, [productsInCart, props.products]);

  // more infos about useRef and how to use it here: https://stackoverflow.com/questions/54940399/how-target-dom-with-react-useref-in-map/55105849

  const refs = useRef([createRef(), createRef()]);

  return (
    <>
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
                <span>Quantity in stock</span>
                <span css={spanPriceStyles}>Price</span>
                <span>Quantity</span>
                {/* <span>Total</span> */}
              </div>
              <div>
                {productsInCart.map((productInCart, index) => {
                  return (
                    <div
                      key={`cart-${productInCart.id}`}
                      css={containerStyles}
                      data-test-id={`cart-product-${productInCart.id}`}
                    >
                      {/* <div>{productInCart.quantity}</div> */}
                      <div css={imageStyles}>
                        <Link href={`/bikes/${productInCart.id}`} passHref>
                          <a>
                            <Image
                              src={`/${productInCart.id}.jpg`}
                              width={300}
                              height={180}
                            />
                          </a>
                        </Link>
                      </div>
                      <div css={nameAndRemoveStyles}>
                        {/* product name */}
                        <div>
                          <Link href={`/bikes/${productInCart.id}`} passHref>
                            <h3>
                              {' '}
                              {
                                props.products.find((product) => {
                                  return product.id === productInCart.id;
                                }).name
                              }
                            </h3>
                          </Link>
                        </div>
                        {/* remove button */}
                        <button
                          css={buttonStyles}
                          data-test-id={`cart-product-remove-${productInCart.id}`}
                          onClick={() => {
                            const updatedCart = productsInCart.filter(
                              (product) => {
                                return product.id !== productInCart.id;
                              },
                            );

                            console.log('new cart state:', updatedCart);
                            setStringifiedCookie('cart', updatedCart);
                            setProductsInCart(updatedCart);

                            props.setCartCounter(
                              props.cartCounter -
                                Number(refs.current[index].current?.value),
                            );
                          }}
                        >
                          remove
                        </button>
                      </div>
                      {/* product InStockQuantity */}
                      <div css={inStockQuantityStyles}>
                        {
                          props.products.find((product) => {
                            return product.id === productInCart.id;
                          }).inStockQuantity
                        }
                      </div>
                      {/* product price */}
                      <div css={priceStyles}>
                        {
                          props.products.find((product) => {
                            return productInCart.id === product.id;
                          }).price
                        }
                        {productInCart.price}€
                      </div>

                      <div css={quantityContainerStyles}>
                        <div>
                          <input
                            type="number"
                            css={quantityStyles}
                            ref={refs.current[index]}
                            min="1"
                            max={
                              props.products.find((product) => {
                                return productInCart.id === product.id;
                              }).inStockQuantity
                            }
                            defaultValue={productInCart.quantity}
                            onInput={(event) => {
                              if (!event.currentTarget.validity.valid) {
                                event.current.target.value = '';
                              }
                            }}
                            onChange={(event) => {
                              console.log(event);
                              const updatedCart = productsInCart.slice();
                              updatedCart.find((product) => {
                                return product.id === productInCart.id;
                              }).quantity = Number(event.currentTarget.value);
                              let updatedQuantity = 0;
                              for (let i = 0; i < updatedCart.length; i++) {
                                updatedQuantity += updatedCart[i].quantity;
                              }
                              console.log('updated quantity', updatedQuantity);
                              props.setCartCounter(updatedQuantity);
                              console.log('new cart state', updatedCart);
                              setStringifiedCookie('cart', updatedCart);
                              setProductsInCart(updatedCart);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div>
                <div css={secondContainerStyles}>
                  <div css={totalAmountAndPriceStyles}>
                    <span>Total Price: {Math.round(sum)}</span>
                  </div>
                  <div css={shopCheckoutStyles}>
                    <Link href="/shop">
                      <button>Continue shopping</button>
                    </Link>
                    <Link href="/checkout">
                      <button>Checkout</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  // bikes on database
  const databaseBikes = await getBikes();

  // cart cookie
  const cart = JSON.parse(context.req.cookies.cart || '[]');

  return {
    props: {
      cart: cart,
      products: databaseBikes,
    },
  };
}
