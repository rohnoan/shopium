import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../context/CartContext';
import Megasale from '../components/MegaSale';
import ProductBlock from '../components/ProductBlock';

// Skeleton Loader Component
const Skeleton = () => {
  return (
    <div className="bg-gray-300 animate-pulse rounded-lg p-4 w-full h-[300px] sm:h-[350px] lg:h-[400px]">
      <div className="h-1/2 bg-gray-400 rounded-md mb-4"></div>
      <div className="h-4 bg-gray-400 rounded-md mb-2"></div>
      <div className="h-4 bg-gray-400 rounded-md"></div>
    </div>
  );
};

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false); // Set loading to false once products are fetched
      });
  }, []);

  return (
    <div className="mt-[80px]">
      <Megasale />
      <div className="grid grid-cols-2 mt-[100px] sm:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {loading
          ? // Show skeleton loader while fetching data
            Array(8)
              .fill()
              .map((_, index) => <Skeleton key={index} />)
          : // Show products once fetched
            products.map((product) => (
              <div key={product.id}>
                <ProductBlock
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                />
              </div>
            ))}
      </div>
    </div>
  );
};

export default Products;
