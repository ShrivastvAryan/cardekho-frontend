import React from "react";
import Link from 'next/link';

const Footer=()=>{
    return(
        <>
       <footer className="w-full bg-[#222222] mt-12 rounded-tl-lg rounded-tr-lg p-6 md:p-10">
   
      <div className="flex justify-evenly items-center md:items-start gap-6 md:gap-10">
      
        <div className="text-white text-center md:text-left">
          <p className="font-semibold text-lg mb-2">Find Your Car Now</p>
          <div className="space-y-1 text-sm md:text-md">
            <p><Link href="/">Home</Link></p>
            <p><Link href="/discovercars">Discover Cars</Link></p>
            <p><Link href="/electriccars">Electric Cars</Link></p>
            <p><Link href="/contact">Contact Us</Link></p>
          </div>
        </div>

      <div className="flex flex-col items-center mt-6 text-white text-sm md:text-md">
        <p className="mt-4">&copy; 2025 All rights reserved</p>
         <p className="mt-2">Designed and Developed by Aryan Shrivastava</p>
      </div>
      </div>

    </footer>
        </>
    )
}

export default Footer