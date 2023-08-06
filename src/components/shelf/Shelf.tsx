import ShelfItem from "./ShelfItem";
import { useEffect, useState } from "react";

function Shelf() {
  const [productShelf, setProductShelf] = useState<any[]>([]);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    const response = await fetch("/api/shelf.json");
    const shelfProducts = await response.json();
    return setProductShelf(shelfProducts);
  }

  const itemsPerPage = 4;
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(itemsPerPage);

  const goToNextSlide = () => {
    if (endIndex < productShelf.length) {
      setStartIndex((prevStartIndex) => prevStartIndex + 1);
      setEndIndex((prevEndIndex) => prevEndIndex + 1);
    }
  };

  const goToPrevSlide = () => {
    if (startIndex > 0) {
      setStartIndex((prevStartIndex) => prevStartIndex - 1);
      setEndIndex((prevEndIndex) => prevEndIndex - 1);
    }
  };

  return (
    <>
      <div className="section-bestseller">
        <h3>Shelf</h3>
        <div className="wrapper-shelf">
          {productShelf.length > 0 &&
            productShelf.slice(startIndex, endIndex).map((item, index) => {
              return <ShelfItem item={item} key={index} />;
            })}
        </div>
        <button className="handlePrev" onClick={goToPrevSlide}></button>
        <button className="handleNext" onClick={goToNextSlide}></button>
      </div>
    </>
  );
}

export default Shelf;
