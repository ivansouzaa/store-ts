import { useContext, useState } from "react";
import bagIcon from "../../assets/icons/bag-icon.svg";
import { AppContext } from "../../context/AppContext";

function Minicart() {
  const { cart, removeItemCart } = useContext(AppContext);
  const [cartOpen, setCartOpen] = useState(false);

  const handleCart = () => {
    setCartOpen(!cartOpen);
  };

  const totalPrice = () => {
    const total = cart.reduce(
      (acc: any, product: any) => acc + product[0].price,
      0
    );
    return total.toFixed(2);
  };

  return (
    <>
      <button onClick={handleCart} className="minicart-button">
        <img src={bagIcon} alt="bag Logo" />
        <p>{cart.length}</p>
      </button>

      <div className={cartOpen ? "minicart-open" : "minicart-close"}>
        <div onClick={handleCart} className="overlay-minicart"></div>
        <div className="minicart-main">
          <h3>My cart</h3>
          <div className="minicart-items">
            {cart.length != 0 ? (
              <div className="minicart-items-btn">
                <ul className="minicart-wrapper-items">
                  {cart.map((item: any, index: any) => {
                    return (
                      <li key={index}>
                        <div>
                          <img src={item[0].image} />
                        </div>
                        <div>
                          <p>{item[0].name}</p>
                          <p>${item[0].price}</p>
                        </div>
                        <button
                          onClick={() => removeItemCart(item[0].productId)}
                        >
                          X
                        </button>
                      </li>
                    );
                  })}
                </ul>

                <div className="minicart-total">
                  <p>
                    Total: <span>${totalPrice()}</span>
                  </p>
                  <button>GO TO CART</button>
                </div>
              </div>
            ) : (
              <div className="minicart-empty">
                <p>Your cart is empty :(</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Minicart;
