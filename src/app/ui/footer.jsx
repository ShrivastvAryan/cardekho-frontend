import React from "react";
import Link from 'next/link';

const Footer=()=>{
    return(
        <>
     <footer className="w-full bg-[#1f1f1f] mt-12 rounded-tl-2xl rounded-tr-2xl px-6 py-10 text-white">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
    {/* Left - Links */}
    <div className="text-center md:text-left">
      <h2 className="font-bold text-xl mb-4 text-white">Find Your Car Now</h2>
      <ul className="space-y-2 text-sm md:text-base">
        <li>
          <Link href="/" className="hover:text-yellow-400 transition-colors">Home</Link>
        </li>
        <li>
          <Link href="/discovercars" className="hover:text-yellow-400 transition-colors">Discover Cars</Link>
        </li>
        <li>
          <Link href="/electriccars" className="hover:text-yellow-400 transition-colors">Electric Cars</Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-yellow-400 transition-colors">Contact Us</Link>
        </li>
      </ul>
    </div>

    {/* Right - Info */}
    <div className="text-center md:text-right space-y-2 text-sm md:text-base">
      <p>&copy; 2025 <span className="text-gray-300">All rights reserved</span></p>
      <p>
        Designed & Developed by{' '}
        <span className="text-yellow-400 font-medium">Aryan Shrivastava</span>
      </p>
    </div>
  </div>
</footer>
        </>
    )
}

export default Footer