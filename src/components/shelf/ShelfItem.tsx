// import { Fragment } from "react";

import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

function ShelfItem(props: any) {
  const { addItemToCart } = useContext(AppContext);
  const item = props.item;

  const objItem = [
    {
      image: item.items[0].images[0].imageUrl,
      name: item.productName,
      price: item.items[0].sellers[0].commertialOffer.Price,
      productId: item.productId,
    },
  ];
  return (
    <>
      <div className="shelf-item">
        <img src={item.items[0].images[0].imageUrl} />
        <div className="shelf-information">
          <p className="shelf-name">{item.productName}</p>
          <p className="shelf-listPrice">
            From ${item.items[0].sellers[0].commertialOffer.ListPrice}
          </p>
          <p className="shelf-price">
            To ${item.items[0].sellers[0].commertialOffer.Price}
          </p>
          <button onClick={() => addItemToCart(objItem)}>BUY</button>
        </div>
      </div>
    </>
  );
}

export default ShelfItem;
