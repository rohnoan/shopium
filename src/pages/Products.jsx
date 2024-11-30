import React, { useEffect } from 'react';
import ProductList from '../components/ProductList';


export default function Products() {
  return (
    <div className="mt-[120px] text-black">
      <div>
        <ProductList/>
      </div>
    </div>
  );
}