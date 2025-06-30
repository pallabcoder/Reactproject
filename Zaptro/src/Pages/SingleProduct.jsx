import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import Loading from "../assets/Loading4.webm"
import Breadcrums from '../Components/Breadcrums';
import { IoCartOutline } from 'react-icons/io5';

const SingleProduct = () => {
  const params = useParams()
  const [SingleProduct, setSingleProduct] = useState("")
  console.log(params);

  const getSingleProduct = async () => {
    try {
      const res = await axios.get(`https://fakestoreapi.in/api/products/${params.id}`)
      const product = res.data.product;
      setSingleProduct(product)
      console.log(product);

    } catch (error) {
      console.log(error);

    }
  }
  useEffect(() => {
    getSingleProduct()
  }, [])

  const OrginalPrice = Math.round(SingleProduct.price + (SingleProduct.price * SingleProduct.discount / 100))

  return (
    <>
      {
        SingleProduct ? <div className='px-4 pb-4 md:px-0'>
          <Breadcrums title={SingleProduct.title} />
          <div className='max-w-6xl mx-auto md:p-6 grid grid-cols-2 gap-10'>

            {/* Product image */}

            <div className='w-full'>
              <img src={SingleProduct.image}
                alt={SingleProduct.title} className='rounded-2xl w-full object-cover' />
            </div>

            {/* product details */}
            <div className='flex flex-col gap-6'>
              <h1 className='md:text-3xl font-bold text-gray-800'>{SingleProduct.title}</h1>
              <div className='text-gray-700'>{SingleProduct.brand?.toUpperCase()} /{SingleProduct.category?.toUpperCase()}
                /{SingleProduct.model}</div>
              <p className='text-xl text-red-600 font-bold'>${SingleProduct.price}
                <span className='line-through text-gray-800'>${OrginalPrice}</span>
                <span className='bg-red-600 text-white px-4 py-2 rounded-full'>{SingleProduct.discount}% discount</span></p>
              <p className='text-gray-700'>{SingleProduct.description}</p>

              {/* quantity selector */}
              <div className='flex items-center gap-4'>
                <label htmlFor='' className='text-sm font-medium text-gray-800'>Quantity:- </label>
                <input type='number' min={1} value={1}
                  className='w-20 border border-gray-400 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-red-600' />
              </div>

              <div className='flex gap-4 mt-4'>
                <button className='px-6 flex gap-2 py-2 text-lg bg-red-600 text-white rounded-md'>
                  <IoCartOutline className='w-6 h-6'/> Add to Cart </button>
                </div>

            </div>

          </div>

        </div> :
          <div>
            <div className='flex items-center justify-center h-screen'>
              <video muted autoPlay loop>
                <source src={Loading} type='video/webm' />
              </video>
            </div>
          </div>
      }

    </>
  )
}

export default SingleProduct
