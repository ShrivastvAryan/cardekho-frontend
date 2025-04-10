"use client"
import React from 'react'
import { Link, Tabs,Tab,TabList,Grid,GridItem,Select,Button } from "@chakra-ui/react"
import{useState,useEffect} from "react";
import Image from 'next/image'

const electricCars=()=>{

    const [carList, setCarList] = useState([]); //for API

     useEffect(() => {
        const fetchCars = async () => {
          try {
            const response = await fetch('/data/car.json'); // Replace with your API URL
            const data = await response.json();    

            const electricCars = data.filter(car => car.fuel==="Electric");
            setCarList(electricCars);
          } catch (error) {
            console.error("Error fetching cars:", error);
          }
        };
    
        fetchCars();
      }, [])


    return(
        <>
              <div className="my-5 p-2 bg-gray-100 w-11/12 h-auto mx-auto rounded-md">
                 <Grid templateColumns="repeat(4, 1fr)" gap={5} className="p-2 my-2 ">
                   {carList.map((list, index) => (
                   <GridItem key={index}  w="90%" h="60" bg="gray.200" className="rounded-md cursor-pointer">
                   <div className="p-2 w-full bg-red-500 h-3/5 relative">
                  <Image
                    src={list.image}
                    alt={list.name}
                    fill
                    className="object-cover rounded-md"
                   />
                   </div>
        
                   <div className="p-2 font-semibold text-xl">
                   <p className="font-extrabold">{list.name}</p>
                   <p className="text-sm mt-1.5">Mileage:{list.mileage}</p>
                   <p className="text-sm mt-1.5">Price:{list.price}</p>
                   </div>
                  </GridItem>
                 ))}
            </Grid>
          </div>
        </>
    )
}

export default electricCars