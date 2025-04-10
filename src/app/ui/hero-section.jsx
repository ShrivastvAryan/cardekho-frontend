 import React from "react";
 import Image from 'next/image'
 import { Link, Tabs,Tab,TabList,Grid,GridItem,Select,Button } from "@chakra-ui/react"
 
 const HeroSection=()=>{

    const carBrands=[
        { label: 'Maruti Suzuki', value: 'M' },
        { label: 'Hyundai', value: 'H' },
        { label: 'Tata Motors', value: 'TM' },
        { label: 'Mahindra', value: 'M&M' },
        { label: 'Volkswagen', value: 'VW' },
    ];


    return(
        
        
    <div className="flex h-96 relative max-w-full">

    <Image 
      src="https://cdn4.singleinterface.com/files/enterprise/coverphoto/76409/tata-17-04-24-10-55-58.jpg"
      alt="Tata poster"
      fill
      className="object-cover"/>      

      <div className="w-72 h-36 bg-gray-200 ml-5 mr-3 rounded-md my-5 p-2 z-10">
        <p className="font-semibold text-lg text-center">Search By Car Brand</p>
        <Select bg="white" className="mt-2 font-semibold">
            {carBrands.map((brand)=>(
                <option key={brand.value} value={brand.value}>
                    {brand.label}
                </option>
            ))}
        </Select>
        <Button colorScheme='red' size="sm" className=" mt-3 mx-auto block">Search</Button>
      </div>
      </div>
    )
 }

 export default HeroSection
 
 