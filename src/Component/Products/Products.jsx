import { useEffect, useState } from "react";

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
    <div>
      <h1>products:{products.length}</h1>
      {
        products.map((product)=> <h1 key={product.id}>{product.title}</h1> )
      }
    </div>
  );
};

export default Products;
