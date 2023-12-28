import React from 'react'

const ProductCard = ({id , name , img , price , discount }) => {
  return (
    <div className="h-[370px] 2xl:h-[420px] text-black rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-2 cursor-pointer">
        <div>
            <img src={img} alt="img" />
        </div>
        <div>
            <h1> {name} </h1>
            <div>
                <h2>${price}</h2>
                <h2> ${discount} </h2>
            </div>

            <div>
                <button className="bg-ExtraDarkColor text-white px-4 py-2 font-medium active:bg-amber-800 ">
                          Add to Cart
                </button>
                <div>
                    <h2>
                        5.0
                    </h2>
                    <FaStar className="text-yellow-300"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard