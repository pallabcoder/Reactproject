import React, { useEffect } from 'react'
import { getData } from '../Context/DataContext'

const Category = () => {
    const{CategoryOnlyData} = getData()

  return (

    <div className='bg-[#26375d]'>
        <div className='max-w-7xl mx-auto flex gap-4 items-center justify-around py-7 px-4'>
            {
                CategoryOnlyData?.map((item, index)=>{
                    return <div key={index}>
                        <button className='uppercase bg-gradient-to-r from-red-500 to-purple-500 text-white px-3 py-1 
                        rounded-md cursor-pointer'>{item}</button>
                    </div>
                })
            }

        </div>
      
    </div>
  )
}

export default Category
