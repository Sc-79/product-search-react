import React from "react";
import "./App.css";
import product from "./constant";
function App() {
  const [search, setSearch] = React.useState("");
  return (
    <div className="mx-auto max-w-7xl">
      <div className="  flex justify-center items-center py-10">
        <div>
          <input
            type="text"
            placeholder="Search something for "
            className="p-2 px-10 "
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {product
          .filter((val) => {
            if (search === "" || search === null) {
              return val;
            } else if (
              val.product_name.toLowerCase().includes(search.toLowerCase())
            ) {
              return val;
            }
          })
          .map((item, index) => (
            <div key={index} className="max-w-full bg-green-400 flex flex-col justify-center items-center rounded-lg shadow-lg">
              <img
                src={item.image}
                alt=""
                className="w-full h-48 object-cover"
              />
              <div>{item.product_name}</div>
              <div>{item.price}</div>
              <button className="bg-blue-500 p-2">Add to Cart</button>
            </div>
          ))}
        <div />
      </div>
    </div>
  );
}

export default App;
