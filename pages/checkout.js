import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { getBikes } from '../util/bikesDatabase';
import { setStringifiedCookie } from '../util/cookies';

const mainStyles = css`
  text-align: center;
  font-family: 'Orbitron', sans-serif;
  min-height: 120vh;

  h1 {
    border-bottom: 1px solid #2b3826;
    margin: 0;
    padding-bottom: 20px;
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

const formStyles = css`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const formWrapperStyles = css`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;

  input,
  label {
    display: flex;
    flex-direction: column;
  }

  input {
    border: 2px solid #2b3826;
    box-shadow: inset 4px 4px 2px rgb(36 29 39 / 5%),
      inset 1px 1px 2px 2px rgb(36 29 39 / 5%);
    border-radius: 10px;
    padding: 10px !important;
    margin-top: 4px !important;

    :focus {
      outline: none;
      border-color: #b75200;
    }
  }

  span {
    margin-right: 20px;
  }
`;

const sectionsStyles = css`
  display: flex;
  justify-content: center;
  gap: 50px;
`;

const firstSectionStyles = css`
  display: flex;
  flex-direction: column;
  margin-right: 100px;
`;

const buttonStyles = css`
  align-items: center;
  appearance: none;
  background-color: #fffbe8;
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

const secondSectionStyles = css`
  display: flex;
  flex-direction: column;
  border-left: 1px solid #2b3826;
  padding-left: 280px;
  input {
    margin-bottom: 20px;
  }
`;

const preventDefault = (f) => (e) => {
  e.preventDefault();
  f(e);
};

export default function Checkout(props, { action = '/thankyou' }) {
  const router = useRouter();

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

  const handleSubmit = preventDefault(() => {
    setStringifiedCookie('cart', []);
    props.setCartCounter(0);
    router
      .push({
        pathname: action,
      })
      .catch(() => {
        console.log('Error, could not complete the action');
      });
  });

  return (
    <>
      <Head>
        <title>Checkout</title>
        <meta
          name="description"
          content="Here you can purcase the products you selected and complete the shopping"
        />
      </Head>
      <main css={mainStyles}>
        <h1>Checkout</h1>
        <div css={sectionsStyles}>
          <div>
            <div css={firstSectionStyles}>
              <h2>Product information</h2>
              <div>
                {props.cart.map((productInCart) => {
                  return (
                    <div key={`item-${productInCart.id}`}>
                      <div>
                        <Image
                          src={`/${productInCart.id}.jpg`}
                          width={300}
                          height={180}
                        />
                      </div>
                      <br />
                      <div>
                        <strong>Selected products:&nbsp; </strong>
                        {
                          props.products.find((product) => {
                            return productInCart.id === product.id;
                          }).name
                        }
                      </div>
                      <br />
                      <div>
                        <strong>Price:&nbsp;</strong>
                        {
                          props.products.find((product) => {
                            return productInCart.id === product.id;
                          }).price
                        }{' '}
                        €
                      </div>
                      <br />
                      <div>
                        <strong>Amount:&nbsp;</strong> {productInCart.quantity}
                      </div>
                      <br />
                      <div>
                        <strong>Total:&nbsp;</strong>
                        {calculateTotalSum()} €
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div css={secondSectionStyles}>
            <h2>Your information</h2>
            <div>
              <form css={formStyles} onSubmit={handleSubmit}>
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
        </div>
      </main>
    </>
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
