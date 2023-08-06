import { useEffect, useState } from "react";
import logo from "../../assets/react.svg";
import searchIcon from "../../assets/icons/search-icon.svg";
import wishlistIcon from "../../assets/icons/wishlist-icon.svg";
import Minicart from "../minicart/Minicart";
import regionIcon from "../../assets/icons/region-icon.svg";
import arrowRight from "../../assets/icons/arrow-right-icon.svg";

interface Category {
  MetaTagDescription: string;
  Title: string;
  hasChildren: boolean;
  id: number;
  name: string;
  url: string;
  children: Category[];
}

function Header() {
  const [categoryInfo, setCategoryInfo] = useState<Category[]>([]);

  useEffect(() => {
    async function getCategory() {
      const response = await fetch("/api/category.json");
      const categoryData = await response.json();
      return setCategoryInfo(categoryData);
    }
    getCategory();
  }, []);

  const [searchActive, setSearchActive] = useState(false);

  return (
    <>
      <header>
        <div className="content-top">
          <button className="region-btn">
            <img src={regionIcon} alt="region Logo" />
            BR
          </button>
          <img src={logo} alt="React Logo" />
          <div>
            <button onClick={() => setSearchActive(!searchActive)}>
              <img src={searchIcon} alt="search Logo" />
            </button>
            <button>
              <img src={wishlistIcon} alt="wishlist Logo" />
            </button>
            <Minicart />
          </div>
        </div>

        <div className={searchActive ? "searchbar active" : "searchbar"}>
          <input type="text" placeholder="Enter search term here" />
          <button>
            Search <img src={arrowRight} alt="" />
          </button>
        </div>

        <div className="category-menu">
          <ul>
            {categoryInfo &&
              categoryInfo.map((item) => {
                return (
                  <li key={item.id}>
                    <a href={item.url}>{item.name}</a>
                    {item.hasChildren && (
                      <div className="subcategory">
                        <ul>
                          {item.children.map((childItem) => (
                            <li key={childItem.id}>
                              <a href={childItem.url}>{childItem.name}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                );
              })}
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
