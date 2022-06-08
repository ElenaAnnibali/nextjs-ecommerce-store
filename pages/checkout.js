import { css } from '@emotion/react';
import Head from 'next/head';
import Layout from '../components/Layout';
import { getBikes } from '../util/bikesDatabase';

const mainStyles = css`
  text-align: center;
  font-family: 'Orbitron', sans-serif;
  min-height: 120vh;
`;

const formStyles = css`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const formWrapperStyles = css`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;

  span {
    margin-right: 20px;
  }
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

export default function checkout(props) {
  function calculateTotalSum() {
    let total = 0;
    props.cart.map((productInCart) => {
      return (total +=
        props.products.find((product) => {
          return productInCart.id === product.id;
        }).price * productInCart.quantity);
    });
    return total;
  }

  return (
    <Layout>
      <Head>
        <title>Checkout</title>
        <meta
          name="description"
          content="Here you can purcase the products you selected and complete the shopping"
        />
      </Head>
      <main css={mainStyles}>
        <div>
          <h1>Checkout</h1>

          <div>
            Selected products:
            {props.cart.map((productInCart) => {
              return (
                <div key={`item-${productInCart.id}`}>
                  <span>
                    {
                      props.products.find((product) => {
                        return productInCart.id === product.id;
                      }).name
                    }
                  </span>
                  <span>
                    Price:
                    {
                      props.products.find((product) => {
                        return productInCart.id === product.id;
                      }).price
                    }{' '}
                    €
                  </span>
                  Amount:
                  <span>{productInCart.quantity}</span>
                  <span>
                    Total:
                    {calculateTotalSum()} €
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h2>Your information</h2>
          <div>
            <form css={formStyles}>
              <div>
                <div css={formWrapperStyles}>
                  <label>
                    <span>First name</span>
                    <input required />
                  </label>
                  <label>
                    <span>Last name</span>
                    <input required />
                  </label>
                </div>
                <div css={formWrapperStyles}>
                  <label>
                    <span>E-mail addresse</span>
                    <input required />
                  </label>
                  <label>
                    <span>City</span>
                    <input required />
                  </label>
                  <label>
                    <span>Postal code</span>
                    <input required />
                  </label>
                  <label>
                    <span>Country</span>
                    <input required />
                  </label>
                </div>
                <div css={formWrapperStyles}>
                  <label>
                    <span>Credit card number</span>
                    <input required />
                  </label>
                  <label>
                    <span>Expiration date</span>
                    <input required />
                  </label>
                  <label>
                    <span>Security code</span>
                    <input required />
                  </label>
                </div>
              </div>
              <div>
                <button css={buttonStyles}>Confirm order</button>
              </div>
            </form>
          </div>
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
      products: product,
      cart: cart,
    },
  };
}
