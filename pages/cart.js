import { css } from '@emotion/react';
import Cookies from 'js-cookie';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
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
  border-bottom: 1px solid #2b3826;
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
  margin-right: 30px;
`;

const quantityStyles = css`
  margin-right: 50px;

  div {
    display: flex;
    gap: 10px;
  }
`;

const inStockQuantityStyles = css`
  margin-right: 188px;
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

export default function Cart(props) {
  const [productsInCart, setProductsInCart] = useState(props.findproducts);
  const [sum, setSum] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

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

  useEffect(() => {
    function calculateTotalPrice() {
      let totalP = 0;
      productsInCart.map((productInCart) => {
        return (totalP += props.product.find((product) => {
          return productInCart.id === product.id;
        }).price);
      });
      setTotalPrice(totalP);
    }
    calculateTotalPrice();
  }, [productsInCart, props.product]);

  // calculate Sum with UseEffect
  // useEffect(() => {
  //   function calculateGranTotalPrice() {
  //     let total = 0;
  //     productsInCart.map((productInCart) => {
  //       return (total +=
  //         props.product.find((product) => {
  //           return productInCart.id === product.id;
  //         }).price * productInCart.quantity);
  //     });
  //     setSum(total);
  //   }
  //   calculateGranTotalPrice();
  // }, [productsInCart, props.product]);

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
                            props.products.find((product) => {
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
                      <div css={inStockQuantityStyles}>
                        {
                          props.products.find((product) => {
                            return productInCart.id === product.id;
                          }).inStockQuantity
                        }
                      </div>
                      {/* product price */}
                      <div css={priceStyles}>
                        {
                          props.products.find((product) => {
                            return productInCart.id === product.id;
                          }).price
                        }{' '}
                        €
                      </div>

                      <div css={quantityStyles}>
                        <div>
                          <button
                            css={buttonStyles}
                            onClick={() => {
                              const updatedCart = productsInCart.find(
                                (product) => product.id === productInCart.id,
                              );
                              const inStockQuantity = props.products.find(
                                (product) => productInCart.id === product.id,
                              ).inStockQuantity;
                              console.log(
                                'In stock quantity:',
                                inStockQuantity,
                              );

                              const totalP = props.products.find(
                                (product) => productInCart.id === product.id,
                              ).price;

                              const priceSum =
                                updatedCart.quantity < inStockQuantity
                                  ? totalPrice + Number(totalP)
                                  : totalPrice;
                              console.log('price Sum ', priceSum);

                              updatedCart.quantity < inStockQuantity
                                ? (updatedCart.quantity += 1)
                                : (updatedCart.quantity += 0);

                              setStringifiedCookie('cart', productsInCart);
                              setProductsInCart([...productsInCart]);
                              props.setCartCounter(
                                Number(props.cartCounter) ===
                                  updatedCart.quantity,
                              );
                              setTotalPrice(priceSum);
                            }}
                          >
                            +
                          </button>
                          <span>{props.cartCounter}</span>
                          <button
                            css={buttonStyles}
                            onClick={() => {
                              const updatedCart = productsInCart.find(
                                (product) => product.id === productInCart.id,
                              );

                              updatedCart.quantity > 0
                                ? (updatedCart.quantity -= 1)
                                : (updatedCart.quantity -= 0);

                              const totalP = props.product.find(
                                (product) => productInCart.id === product.id,
                              ).price;

                              const priceSum =
                                totalPrice > 0
                                  ? totalPrice - Number(totalP)
                                  : totalPrice;
                              console.log('price Sum ', priceSum);

                              setStringifiedCookie('cart', productsInCart);
                              setProductsInCart([...productsInCart]);
                              props.setCartCounter(
                                Number(props.cartCounter) - 1,
                              );
                              setTotalPrice(priceSum);
                            }}
                          >
                            {' '}
                            -{' '}
                          </button>
                        </div>
                      </div>
                      <div>
                        {Number(
                          productsInCart.find(
                            (product) => product.id === productInCart.id,
                          ).quantity,
                        ) * Number(totalPrice)}
                        €
                      </div>
                    </div>
                  );
                })}
              </div>
              <div>
                <div css={secondContainerStyles}>
                  <div css={totalAmountAndPriceStyles}>
                    <span>Total amount: {totalAmount}</span>
                    <span>Total Price: {sum}</span>
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
  const product = await getBikes();

  const cart = JSON.parse(context.req.cookies.cart || '[]');

  const foundproducts = [];

  for (const cartProduct in cart) {
    const productFromDB = product.find((item) => {
      return item.id === cartProduct.id;
    });
    if (!productFromDB) {
      console.log(
        'An error occured: could not find the requested product in the datatbase',
      );
      context.res.statusCode = 404;
      break;
    }
    const superProduct = { ...productFromDB, ...cartProduct };

    foundproducts.push(superProduct);
  }

  return {
    props: {
      foundproducts: foundproducts,
    },
  };
}
