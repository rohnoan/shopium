import React from 'react'

import { useState,useEffect } from 'react';


export default function ProductList() {
    const[products,setProducts]=useState([]);
    const[searchQuery,setSearchQuery]=useState('');
    const[filtered,setFiltered]=useState([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then((res)=>res.json())
        .then((data)=>{
            setProducts(data);
            setFiltered(data)
        })
        .catch((error)=>console.error('fuck u',error));
    },[]);

    useEffect(()=>{
        if(searchQuery===''){
            setFiltered(products);
        }
        else{
            const lowerCaseQuery=searchQuery.toLowerCase();
            const filtered=products.filter((product)=>
            product.title.toLowerCase().includes(lowerCaseQuery));
            setFiltered(filtered);
        }
    },[searchQuery,products]);

    const handleSearchChange=(e)=>{
        setSearchQuery(e.target.value);
    };
    return (
        <div className="product-list">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search for products..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="p-2 border border-gray-300 rounded mb-4"
      />

      {/* Render filtered products */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow-lg flex flex-col">
            {/* Check if product.image is defined */}
            {product.image ? (
              <img
                src={product.image}
                alt={product.title}
                className="w-[200px] h-[250px] object-cover rounded-t"
              />
            ) : (
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-t">
                No Image Available
              </div>
            )}
            <div className="flex-1 p-2">
              <h3 className="text-lg font-bold mt-2 truncate">{product.title}</h3>
              <p className="text-gray-700 mt-1">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
      )
}
