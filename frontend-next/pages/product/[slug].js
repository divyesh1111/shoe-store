import React, { useState } from 'react'
import { IoMdHeartEmpty } from "react-icons/io";
import Wrapper from "@/components/Wrapper";
import ProductDetailsCarousel from '@/components/ProductDetailsCarousel';
import RelatedProducts from '@/components/RelatedProducts';
import { fetchDataFromApi } from '@/utils/api';
import { getDiscountedPricePercentage } from '@/utils/helper';





const ProductDetails = ({product,products}) => {

    const [selectedSize, setSelectedSize] = useState();
    const [showError, setShowError] = useState();

    const p = product?.data?.[0]?.attributes;

  return <div className="w-full md:py-20">
    <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
{/* left column start */}
<div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
                        <ProductDetailsCarousel images={p.image.data} />
                    </div>
        {/* left column end */}
        <div className="flex-[1] py-3">
            <div className="text-[34px] font-semibold mb-2">
            {p.name}
            </div>

            <div className="text-lg font-semibold mb-5">
                {p.subtitle}        
            </div>
            <div className="flex items-center">
              <p className="mr-2 text-lg font-semibold"> MRP : &#8377;{p.price}</p> 
              {p.original_price && (
                <>
                <p className="text-base font-medium line-through ">
                    &#8377; {p.original_price}
                </p>
                <p className="ml-auto text-base font-medium text-green-500">
                    {getDiscountedPricePercentage(
                        p.original_price,
                        p.price
                    )}
                    %off 
                </p>
                </>
              )}          
            </div>
            <div className="text-md font-medium text-black/[0.5]">
                            incl. of taxes
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-20">
                            {`(Also includes all applicable duties)`}
            </div>

            <div className="mb-10">
                <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">
                    Size Select
                </div>
                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                    Select Guide
                </div>
            </div>

                <div className="grid grid-cols-3 gap-2">

                    {p.size.data.map((item, i ) => (
                        <div key = {i} className={`border rounded-md text-center py-3 font-medium ${item.enabled ? 'hover:border-black cursor-pointer' : 'cursor-not-allowed bg-black/[0.1] opacity-50'}
                        ${selectedSize === item.size ? "border-black": ""}`}
                        onClick={()=>{
                            setSelectedSize(item.size)
                            setShowError(false)
                        }}
    
                        
                        >
                        {item.size}
                    </div>

                    )
                    )}
                    {/* <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                        UK-6
                    </div>
                    <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                        UK-6.5
                    </div>
                    <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                        UK-7
                    </div>
                    <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                        UK-7.5
                    </div>
                    <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                        UK-8
                    </div>
                    <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                        UK-8.5
                    </div>
                    <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                        UK-9
                    </div>
                    <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                        UK-9.5
                    </div>
                    <div className="border rounded-md text-center py-3 font-mediumcursor-not-allowed bg-black/[0.1] opacity-50">
                        UK-10
                    </div>
                    <div className="border rounded-md text-center py-3 font-mediumcursor-not-allowed bg-black/[0.1] opacity-50">
                        UK-10.5
                    </div>
                    <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50">
                        UK-11
                    </div> */}

               </div>
                  {  showError && <div className="text-red-600 mt-1">
                        Size selection is required
                    </div>}
            </div>
            {/* add cart start */}
                    <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75" >
                        Add to Cart
                    </button>
                    {/* add cart end */}
            {/*Wish list start */}
                    <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                            Whishlist
                    </button> 
           {/*wishlist end  */}

                    <div>
                        <div className="text-lg font-bold md-5">
                            Product Details
                        </div>
                        <div className="text md mb-5">
                        Nike's range of products include shoes, jerseys, shorts, cleats, baselayers, etc. for sports activities such as association football, basketball, track and field, combat sports, tennis, American football, athletics, golf, ice hockey, and cross training for men, women, and children.
                        </div>
                        <div className="text md mb-5">
                        Nike's range of products include shoes, jerseys, shorts, cleats, baselayers, etc. for sports activities such as association football, basketball, track and field, combat sports, tennis, American football, athletics, golf, ice hockey, and cross training for men, women, and children.
                        </div>
                    </div>
        </div>

        </div>
        
            {/* <RelatedProducts /> */}
    </Wrapper>
         </div>;
  
};

export default ProductDetails;


export async function getStaticPaths() {
    const products = await fetchDataFromApi("/api/products?populate=*");
    const paths = products.data.map((p) => ({
        params: {
            slug: p.attributes.slug,
        },
    }));
    return {
        paths,
        fallback: false,
    };

  }


  export async function getStaticProps({ params: { slug } }) {
    const product = await fetchDataFromApi(
        `/api/products?populate=*&filters[slug][$eq]=${slug}`
    );
    
    const products = await fetchDataFromApi(
        `/api/products?populate=*&[filters][slug][$ne]=${slug}`);
    
    return {
        props: {
            product, 
            products
        },
    };
        }
   
