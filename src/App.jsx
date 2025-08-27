import { useState } from "react";
import React from "react";
import Card from "./components/Card";
import axios from "axios";

const App = () => {

const [product, setProduct] = useState([]);

const fetchProduct =async () =>{
try{
  const response = await axios.get("https://fakestoreapi.com/products")
  setProduct(response.data);
}
catch (error) {
  console.error("Faild to fetch product:", error);
}

};

  return (
    <>
      <button
        onClick={fetchProduct}
        className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Load Product
      </button>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4 py-8">
   {
    product.map((e, idx) =>{

      return <Card key={idx} product={e}/>
    })
   }</div>
    </>
  );
};

export default App;
