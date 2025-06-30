import React from 'react'
import {IoCartOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';



const ProductCard = ({Product}) => {
  const navigate = useNavigate()
  
  

  return (
    <div className='border relative border-gray-400 rounded-2xl cursor-pointer hover:scale-105 hover:shadow-2xl transition-all p-2 h-max'>
      <img src={Product.image} alt="" className='bg-gray-200 aspect-square' onClick={()=> navigate(`/Products/${Product.id}`)}/>
      <h1 className='line-clamp-2 p-1 font-semibold'>{Product.title}</h1>
      <p className='my-1 text-lg text-gray-900 font-bold'>${Product.price}</p>
      <button  className='bg-red-600 px-3 py-2 text-lg rounded-md text-white w-full cursor-pointer flex gap-2 items-center
       justify-center ont-semibold'> <IoCartOutline className='w-6 h-6'  /> Add to Cart</button>
    </div>
  )
}

export default ProductCard
