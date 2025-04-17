import React from 'react'
import { FaGithub,FaLinkedin,FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from '@chakra-ui/react';


const contactUs=()=>{

    const Links=[
        {label:'Github',link:'https://github.com/ShrivastvAryan',image:<FaGithub/>},
        {label:'LinkedIn',link:'https://www.linkedin.com/in/aryanshrivastava290605/',image:<FaLinkedin />},
        {label:'Instagram',link:'https://www.instagram.com/aryanshrivastv_/',image:<FaInstagram/>},
        {label:'Twitter',link:'https://x.com/ShrivastvAryan',image:<FaXTwitter />}
    ] 

    return(
        <>
        <div className='text-4xl text-red-500 flex justify-center align-center py-4'>
            Contact Form
        </div>

        <div className='md:flex '>
        <div className="border-[1px] border-black p-2 m-2 rounded-md md:w-1/2">
            <form>
            <div className="flex justify-between mt-4">
            <label htmlFor='username'>Username:</label>
             <input type='text' name="username" id="username" 
        autoComplete="off" required className='bg-red-100 pl-2 rounded-lg w-full ml-2 '/>
            </div>
        
            <div className="flex justify-between   mt-4">
            <label htmlFor='email'>Email:</label>
            <input type='text' name="email" id="email" 
            autoComplete="off" required className='bg-red-100 pl-2  mt-2 rounded-lg w-full ml-8'/>
            </div>

            <div className="flex justify-between w-full  mt-4">
            <label htmlFor='message'>Message:</label>
            <textarea
            name="message"
            id="message"
            cols="25"
            rows='4'
            className='bg-red-100 pl-2  mt-2 rounded-lg w-full ml-2'
            />
            </div>

            <div className="flex justify-center items-center pt-4">
            <Button type="submit" colorScheme='red' className="text-black p-2 cursor-pointer rounded-lg font-semibold">Submit</Button>
            </div>


            </form>
        </div>

        <div className=" border-[1px] border-black p-2 m-2 rounded-md md:w-1/2 md:flex md:justify-center md:items-center">
            <div className='flex justify-evenly gap-2'>
            {Links.map((icon,index)=>(
                <div key={index} className='rounded-full w-16 h-16 lg:w-28 lg:h-28 text-2xl bg-red-100 flex align-center items-center '><a href={icon.link} target="_blank">{icon.image}</a></div>
            ))   
            }
            </div>

        </div>
        </div>

        
       
        </>
    )
}

export default contactUs;