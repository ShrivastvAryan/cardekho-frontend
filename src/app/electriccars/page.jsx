"use client"
import React from 'react'
import { Grid,GridItem } from "@chakra-ui/react"
import{useState,useEffect} from "react";
import Image from 'next/image'
import Link from "next/link";

const ElectricCars=()=>{

    const [carList, setCarList] = useState([]); //for API

     useEffect(() => {
        const fetchCars = async () => {
          try {
            const response = await fetch('/data/car.json'); 
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
              <div className="m-5 p-5 bg-gray-100 w-auto h-auto mx-auto rounded-md">
                  <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={4} className="p-2 my-2">
                   {carList.map((list, index) => (
                    <GridItem key={index}  className="rounded-md cursor-pointer md:w-72 w-full h-64 bg-slate-200  shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ">
                   <div className=" w-full h-3/5 relative">
                   <Link href={`/cars/${list.id}`}>
                  <Image
                    src={list.image}
                    alt={list.name}
                    fill
                    className="object-cover rounded-md"
                   />
                   </Link>
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

export default ElectricCars