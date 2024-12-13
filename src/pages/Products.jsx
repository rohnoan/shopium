import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../context/CartContext'
import Megasale from '../components/MegaSale'
import ProductBlock from '../components/ProductBlock'

const Products = () => {

  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext)

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className='mt-[80px]'>
      <Megasale />
      <div className="grid grid-cols-2 mt-[100px]  sm:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
  {products.map((product) => (
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
  )
}

export default Products;
