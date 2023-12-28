import React from 'react'
import ProductCard from '../layouts/ProductCard'

const Shop = () => {

   const data = [
    {   
        id: 0,
        img: "/src/assets/img/product1.jpg",
        name: "Nike AIR",
        price : "195.00",
        discount : '20% OFF',
    },
    {
        id: 1,
        img: "/src/assets/img/product2.jpg",
        name: "SportsWear",
        price : "155.00",
        discount : "45% OFF"
    },
    {
        id: 2,
        img: "/src/assets/img/product3.jpg",
        name: "T-shit Combo",
        price : "155.00",
        discount : "15% OFF"
    },
    {
        id: 3,
        img: "/src/assets/img/product4.jpg",
        name: "Hoodies",
        price : "185.00",
        discount : "25% OFF"
    }
   ]


  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 pt-14 ">
        <div>
            <h1> Best Sellers </h1>
        </div>

        <div className='mt-8'>
            {data.map((item) => (
               <ProductCard 
                key={item.id}
                id={item.id}
                img={item.img}
                name={item.name}
                price={item.price}
                discount={item.discount}
               />
            ))}
        </div>
    </div>
  )
}

export default Shop