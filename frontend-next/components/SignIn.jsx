import React from 'react'

import Wrapper from './Wrapper';
import Link from 'next/link';

const SignIn = () => {
  return (
    <Wrapper>
        <div className=' text-center mx-auto px-6 py-6 h-[600px] border border-gray-900 rounded-3xl  my-8'>
            <div className=" block font-extrabold text-3xl  m-6">
            {/* <Link href="/"> 
                    <img src="/logo.svg" className="  m-3 items-center w-[40px] " />
            </Link> */}
                SIGN IN
                </div>
            <div className=" align-middle font-extrabold py-6">
                YOUR ACCOUNT FOR <br /> EVERYTHING NIKE
            </div>
            
            
            <div className="relative overflow-hidden">

            <div>
                <label class="block">
                    <input class="placeholder-gray-500 border rounded-md   px-2 py-2 my-6 w-80 " placeholder="Email address"/>  
                </label>
            </div>
            <div>
                <label class="block">
                    <input type="password" class="placeholder-gray-500 rounded-md w-80 border px-2 py-2 my-2  " placeholder="Password"/>  
                </label>
            </div>
            <div className="py-3 justify-items-start">
            <input type="checkbox" checked="default" className=""/>
                <span> Keep me signed in</span>
            </div>
                <Link href={"/"} className="text-md text-slate-400">Forget your password?</Link>
                    <div className="my-4 text-sm">
                        By logging in, you agree to NIKE's <Link href={"/"} className="underline hover:font-semibold" >Privacy Policy</Link> and <Link href={"/"} className="underline hover:font-semibold">Terms of Use</Link>
                    </div>
                    <button type="button" class=" w-80 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 my-4 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">SIGN IN</button>
                    <div>
                        Not a Member?
                        <span> <Link href={"/"}className="underline hover:font-semibold" >Join Us. </Link></span>
                    </div>
            </div>
        </div>

        </Wrapper>
  )
}

export default SignIn;