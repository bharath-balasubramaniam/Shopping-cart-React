import "./App.css";
import Navbar from "./navbar";
import data from "./data";
import Items from "./item";
import Carousel from "./carousel";
import { useState } from "react";
function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  let slctItem = (obj) => {
    setCart([...cart, obj]);
    setTotal(total + obj.product_price);
    obj.clicked = true;
  };
  let removeItem = (item) => {
    setCart(
      cart.filter((obj) => {
        return obj.id !== item.id;
      })
    );
    setTotal(total - item.product_price);
    item.clicked = false;
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Navbar></Navbar>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-3 col-lg-3">
          <h2 class="text-justify my-2">Cart Items</h2>
          <div class="card">
            <ul class="list-group list-group-flush">
              {cart.map((obj) => {
                return (
                  <li class="list-group-item text-center">
                    {obj.product_name} - {obj.product_price}
                    <span
                      className="ml"
                      onClick={() => {
                        removeItem(obj);
                      }}
                    >
                      <i class="fas fa-times fa-3"></i>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          <h4>Total - ₹ {total}</h4>
        </div>
        <div class="col-9 my-2">
          <div class="row">
            {data.map((obj) => {
              return <Items place={obj} btn={slctItem}></Items>;
            })}
          </div>
          <Carousel></Carousel>
        </div>
      </div>
    </div>
  );
}

export default App;
