import React from 'react'

const CartItem = () => {
    return (
        <div className="flex py-5 gap-3 md:gap-5 border-b">
            {/* IMAGE START */}
            <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
                <img src="product-1.webp" />
            </div>
            {/* IMAGE END */}
            <div className="w-full flex flex-col">
                <div className="flex  flex-col md:flex-row justify-between ">
                    {/* PRODUCT TITLE */}
                    <div className='text-lg md:text-2xl font-semibold text-black/[0.8]'>
                        Jorden Retro 6 G
                    </div>
                    {/* PRODUCT SUBTITLE */}
                    <div className='text-lg md:text-md font-medium text-black/[0.5] block md:hidden'>
                        Men's Golf Shoes
                    </div>
                    {/* PRODUCT PRICE */}
                    <div className='text-lg md:text-2xl font-bold text-black/[0.5] mt-2'>
                        MRP : ₹ 19 695.00
                    </div>
                </div>
                {/* PRODUCT SUBTITLE */}
                <div className='text-lg md:text-md font-medium text-black/[0.5] hidden  md:block'>
                    Men's Golf Shoes
                </div>

            </div>
        </div>
    )
}

export default CartItem
