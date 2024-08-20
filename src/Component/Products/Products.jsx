import { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
 
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        console.log(data.products)
      });
  }, []);
  return (
    <div className="grid grid-cols-4 gap-4 my-5">
      {
        products.map(product=> <Product key={product.id} product={product}></Product> )
      }
    </div>
  );
};

export default Products;
