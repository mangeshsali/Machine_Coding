import { useState, useEffect } from "react";
import "./App.css";
import { data } from "./Data";

export default function App() {
  const [AllData, setAllData] = useState([]);
  const [activeTabs, setActiveTabs] = useState([]);
  const [query, setQuery] = useState("");
  const [stock, setStock] = useState(false);
  const [outOfStock, setoutOfStock] = useState(false);
  const [pricerange, setPriceRange] = useState("");

  const tab = ["watches", "shoes", "glasses"];

  const TabClick = (t) => {
    if (activeTabs.includes(t)) {
      const Updated = activeTabs.filter((ele) => ele !== t);
      setActiveTabs((prev) => [...Updated]);
    } else {
      setActiveTabs((prev) => [...prev, t]);
    }
  };

  // On Change Handler
  const inputOnchange = (e) => {
    setQuery(e.target.value);
  };

  const onChangePrice = (e) => {
    setPriceRange(e.target.value);
  };

  const CheckboxHandler = (e) => {
    const { name, checked } = e.target;
    if (name === "stock") {
      setStock(checked);
    } else if (name === "outofstock") {
      setoutOfStock(checked);
    }
  };

  useEffect(() => {
    setAllData(data);
  }, []);

  useEffect(() => {
    let FilterData = [...data];

    if (query.trim()) {
      const Updated = FilterData.filter((ele) =>
        ele.title.toLowerCase().includes(query.toLowerCase())
      );
      FilterData = Updated;
    }

    if (activeTabs.length > 0) {
      const updated = FilterData.filter((ele) =>
        activeTabs.includes(ele.category)
      );
      FilterData = updated;
    }

    if (stock && !outOfStock) {
      const NewArra = FilterData.filter((ele) => ele.outOfStock);
      console.log("_____>", NewArra);
      FilterData = NewArra;
    }

    if (outOfStock && !stock) {
      const NewArra = FilterData.filter((ele) => !ele.outOfStock);
      console.log("_____>", NewArra);
      FilterData = NewArra;
    }

    if (pricerange === "high") {
      const array = FilterData.sort((a, b) => b.price - a.price);
      FilterData = array;
    }
    if (pricerange === "low") {
      const array = FilterData.sort((a, b) => a.price - b.price);
      FilterData = array;
    }
    setAllData(FilterData);
  }, [query, activeTabs, stock, outOfStock, pricerange]);

  return (
    <div className="App">
      <div className="">
        <input
          type="text"
          value={query}
          onChange={(e) => inputOnchange(e)}
          placeholder="Search Product"
        />
      </div>
      <div className="main-filter flex-justify">
        <div>
          <div className="">
            <input
              type="checkbox"
              name="stock"
              checked={stock}
              onChange={(e) => CheckboxHandler(e)}
            />
            Stock
          </div>

          <div className="">
            <input
              type="checkbox"
              name="outofstock"
              checked={outOfStock}
              onChange={(e) => CheckboxHandler(e)}
            />
            Out of Stock
          </div>
        </div>

        <div>
          <div>
            <input
              type="radio"
              value="high"
              name="priceSort"
              onChange={(e) => onChangePrice(e)}
            />
            High To Low
          </div>
          <div>
            <input
              type="radio"
              value="low"
              name="priceSort"
              onChange={(e) => onChangePrice(e)}
            />{" "}
            Low To High
          </div>
        </div>
      </div>

      {tab.map((t) => {
        return (
          <button
            className={activeTabs.includes(t) ? "active-tab" : ""}
            onClick={() => TabClick(t)}
          >
            {t}
          </button>
        );
      })}
      <div className="flex">
        {AllData &&
          AllData.map((item) => {
            return (
              <div className="main-div">
                <h1>{item.title}</h1>
                <p>{item.price}</p>
                <p>{item.category}</p>
                <p className={item.outOfStock ? "stock" : "not-stock"}>
                  {item.outOfStock ? "Stock" : "Out of Stock"}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
