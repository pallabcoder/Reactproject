import React, { useEffect } from 'react'
import { getData } from '../Context/DataContext'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { Pause } from 'lucide-react';
import Category from './Category';

const Carousel = () => {
    const { data, fetchAllProducts } = getData()
    console.log(data);

    useEffect(() => {
        fetchAllProducts()
    }, [])

    const SamplePrevArrow =(props) => {
        const {className, style, onClick} = props;
        return(
            <div onClick={onClick} className={`arrow ${className}`} style={{zIndex:3}}>
                <AiOutlineArrowLeft className='arrows' style={{...style,display:"block", borderRadius:"50px",
                     background:"#f53347", color:"white",position:"absolute", padding:"2px", left:"50px"}} 
                     onMouseOver="this.style.backgroundColor='#555" />
            </div>
        )

    }
    const SampleNextArrow =(props) => {
        const {className, style, onClick} = props;
        return(
            <div onClick={onClick} className={`arrow ${className}`}>
                <AiOutlineArrowRight className='arrows' style={{...style,display:"block", borderRadius:"50px",
                     background:"#f53347", color:"white",position:"absolute", padding:"2px", right:"50px"}}  />
            </div>
        )

    }

    var settings = {
        dots: false,
        autoplay:true,
        autoplaySpeed:2000,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        PauseOnHover:false,
        nextArrow: <SampleNextArrow to="next" />,
        prevArrow: <SamplePrevArrow to="Prev" />,
    };

    return (
        <div>
            <Slider {...settings}>
                {
                    data?.slice(0,7)?.map((item, index) => {
                        return <div key={index} className='bg-gradient-to-r from-[#282256] via-[#746cc4] to-[#3636e0] -z-10'>
                            <div className='flex gap-10 justify-center h-[600px] items-center px-4'>
                                <div className='space-y-6'>
                                    <h3 className='text-red-500 font-semibold font-sans text-sm'>
                                        Powering your world with the Best Electronics</h3>
                                        <h1 className='text-4xl font-bold uppercase line-clamp-3 md:w-[500px] text-white'>{item.title}</h1>
                                        <p className='md:w-[500px] line-clamp-3 text-gray-300 pr-7'>{item.description}</p>
                                        <button className='bg-gradient-to-r from-red-600 to-purple-500 text-white px-3 
                                        py-2 rounded-md cursor-pointer mt-2'>Shop Now </button>
                                </div>
                                <div>
                                    <img src={item.image} alt={item.title} className='rounded-full w-[550px] hover:scale-105 
                                    transition-all shadow-2xl shadow-red-500 ' />
                                </div>
                            </div>
                    </div>
                    })
                    
                }
                
            </Slider>
            <Category />

        </div>
    )
}

export default Carousel
