import Wrapper from '@/components/Wrapper';
// import Link from 'next/link';
import React from 'react';
// import ReactPlayer from 'react-player'






const about = () => {
    return (
        <main>
            <Wrapper>
                <div className="bg-scroll bg-cover" style={{ backgroundImage: "url(/a1.jpg)" }}>
                    <div className="text-center  mx-auto my-[25px] md:my-[80px] " >
                        <div className="text-[2+8px] md:text-[34px] mb-5 font-semibold leading-tight z-20" >
                            OUR MISSION IS

                        </div>
                        <div className="text-md w-4 md:text-6xl font-extrabold z-20 "  >

                            BRING INSPIRATION AND INNOVATION TO EVERY ATHLETE IN THE WORLD
                        </div>
                    </div>

                    <div className="text-center max-w-[1500px] mx-auto my-[25px] md:my-[80px] z-0">
                        <div className="text-left md:text-7xl font-extrabold ">
                            RUNNING IS A GIFT
                        </div>
                        <div className="text-left text-[10px] md:text-[34px] mb-5 font-semibold leading-tight pl-60">
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


        </main >
    );
};

export default about;