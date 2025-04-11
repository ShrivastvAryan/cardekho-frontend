import React from "react";
import Link from 'next/link';

const Footer=()=>{
    return(
        <>
       <footer className="w-full bg-[#222222] mt-12 rounded-tl-lg rounded-tr-lg p-6 md:p-10">
      {/* Top Section: Links */}
      <div className="flex flex-col md:flex-row justify-evenly items-center md:items-start gap-6 md:gap-10">
        {/* Consumer Policy */}
        <div className="text-white text-center md:text-left">
          <p className="font-semibold text-lg mb-2">CONSUMER POLICY</p>
          <ul className="space-y-1 text-sm md:text-md">
            <li><Link href="/cancellation">Cancellation and Returns</Link></li>
            <li><Link href="/terms-of-use">Terms Of Use</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/shipping-policy">Shipping Policy</Link></li>
            {/*<li><Link href="/">Sitemap</Link></li>*/}
          </ul>
        </div>

        {/* Help */}
        <div className="text-white text-center md:text-left">
          <p className="font-semibold text-lg mb-2">HELP</p>
          <ul className="space-y-1 text-sm md:text-md">
            <li><Link href="/Contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="text-white text-center md:text-left w-44 flex-wrap">
          <p className="font-semibold text-lg mb-2">CONTACT US</p>
        </div>



      {/* Social Media Links 
      <div className="flex justify-center gap-6 mt-6 text-white text-2xl">
        <a href="https://www.facebook.com/profile.php?id=61574782899010" target="_blank"><FaFacebook className="hover:text-gray-400 transition" /></a>
        <a href="https://www.instagram.com/nixshopofficials/?hl=en " target="_blank"><FaInstagram className="hover:text-gray-400 transition" /></a>
        <a href="https://www.pinterest.com/" target="_blank"><FaPinterest className="hover:text-gray-400 transition" /></a>
      </div> */}

      {/* Payment Methods & Copyright */}
      <div className="flex flex-col items-center mt-6 text-white text-sm md:text-md">
        {/* Placeholder for Payment Icons 
        <div className="flex gap-3">
          <span className="block h-6 w-10 bg-gray-800 rounded"></span>
          <span className="block h-6 w-10 bg-gray-800 rounded"></span>
          <span className="block h-6 w-10 bg-gray-800 rounded"></span>
          <span className="block h-6 w-10 bg-gray-800 rounded"></span>
        </div>*/}

        <p className="mt-4">&copy; 2025 All rights reserved</p>
         <p className="mt-2">Designed and Developed by Aryan Shrivastava</p>
      </div>
      </div>
    </footer>
        </>
    )
}

export default Footer