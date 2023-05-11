import Wrapper from '@/components/Wrapper';
import Link from 'next/link';
import React from 'react';
import ReactPlayer from 'react-player'



const about = () => {
  return (
    <main>
        <Wrapper>
            <div>
                <div>
                    
                    <div className="text-center max-w-[800px] mx-auto my-[25px] md:my-[80px]">
                            <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                                OUR MISSION IS 
                                        
                            </div>
                            <div className="text-md md:text-8xl font-extrabold ">
                            BRING INSPIRATION AND INNOVATION TO EVERY ATHLETE IN THE WORLD
                            </div>
                    </div>
                </div>
                
                <div className="text-center max-w-[1500px] mx-auto my-[25px] md:my-[80px] z-0">
                    <div className="text-left md:text-7xl font-extrabold ">
                            RUNNING IS A GIFT
                    </div>
                    <div className="text-left text-[28px] md:text-[34px] mb-5 font-semibold leading-tight pl-60">
                                WITH NIKE 
                    </div>
                    
                </div>
                <div className="text-center max-w-[1500px] mx-auto my-[25px] md:my-[80px] z-0">
                    <div className="text-right md:text-7xl font-extrabold pr-48">
                            BE
                    </div>
                    <div className="text-right md:text-7xl font-extrabold ">
                            LEGENDARY
                    </div>
                </div>
                <div className="text-center max-w-[1500px] mx-auto my-[25px] md:my-[80px] z-0">
                    <div className="text-left md:text-7xl font-extrabold ">
                            WE ARE ALL
                    </div>
                    <div className="text-left text-[28px] md:text-[34px] mb-5 font-semibold leading-tight pl-28">
                                WITNESSES 
                    </div>
                </div>
            </div>
        </Wrapper>
        

    </main>
  )
}

export default about