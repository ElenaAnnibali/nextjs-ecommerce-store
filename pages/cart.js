import { useEffect, useState } from 'react';
import { getBikes as bikeItems } from '../util/bikesDatabase';
import { setStringifiedCookie } from '../util/cookies';

export default function Cart(props) {
  const [cart, setCart] = useState(props);
  const [sum, setSum] = useState(0);

  // calculate the total sum with useEffect
  useEffect(() => {
    function totalSum() {
      let total = 0;
      cart.map((itemOnCart)=> {
        bikeItems.find((bike) => {
          return itemONCart.id === bike.id;
        }).itemPrice * itemOnCart.itemQuantity);
      });
      setSum(total);
    }
    totalSum();
  }, [cart]);

  return (
    <>
      <h1>Shopping Cart</h1>
      <main>
        <div>
          {cart.map((itemOnCart) => {
            return (
              <div key={`cart-${itemOnCart.id}`}>
                <h2>
                  {
                    bikeItems.find((item) => {
                      return itemOnCart.id === item.id;
                    }).name
                  }
                </h2>
                <label>
                  Quantity:
                  <input
                    type="number"
                    min="1"
                    max={
                      bikeItems.find((bike) => {
                        return itemOnCart.id === bike.id;
                      }).inStockQuantity
                    }
                    defaultValue={itemOnCart.itemQuantity}
                    onChange={(event) => {
                      const updatedCart = cart.slice();
                      updatedCart.find((bike) => {
                        return bike.id === itemOnCart.id;
                      }).itemQuantity = Number(event.currentTarget.value);
                      console.log('updated cart state: ', updatedCart);
                      setStringifiedCookie('cart', updatedCart);
                      setCart(updatedCart);
                    }}
                  />
                </label>
                <button
                  onClick={() => {
                    const updatedCart = cart.filter((bike) => {
                      return bike.id !== itemOnCart.id;
                    });
                    console.log('show cart after filter: ', updatedCart);
                    setStringifiedCookie('cart', updatedCart);
                    setCart(updatedCart);
                  }}
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
        <div>
          <p>Total: {sum} €</p>
        </div>
      </main>
    </>
  );
}

export function getServerSideProps(context) {
  const cart = JSON.parse(context.req.cookies.cart || '[]');
  console.log(cart);

  return {
    props: {
      cart: cart,
    },
  };
}
