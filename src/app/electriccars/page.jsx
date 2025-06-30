"use client"
import React from 'react'
import{useState,useEffect} from "react";
import Image from 'next/image'
import Link from "next/link";

const ElectricCars=()=>{

    const [carList, setCarList] = useState([]); 

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
                 
                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-2 my-2">
                     {carList.map((car, index) => (
                       <div
                         key={index}
                         className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden border border-gray-100"
                       >
                         <Link href={`/cars/${car.id}`}>
                         
                           <div className="relative aspect-[4/3] overflow-hidden">
                             <Image
                               src={car.image}
                               alt={car.name}
                               fill
                               className="object-center group-hover:scale-105 transition-transform duration-300"
                             />
                             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                           </div>
             
                          
                           <div className="p-6">
                             <h3 className="font-bold text-xl text-gray-800 mb-3 hover:bg-gradient-to-r from-red-600 to-orange-500 hover:bg-clip-text hover:text-transparent  transition-colors duration-300">
                               {car.name}
                             </h3>
                             
                             <div className="space-y-2">
                               <div className="flex items-center justify-between">
                                 <span className="text-sm font-medium text-gray-500">Mileage</span>
                                 <span className="text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                                   {car.mileage}
                                 </span>
                               </div>
                               
                               <div className="flex items-center justify-between">
                                 <span className="text-sm font-medium text-gray-500">Price</span>
                                 <span className="text-lg font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                                   {car.price}
                                 </span>
                               </div>
                             </div>
             
                          
                             <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                               <div className="w-full bg-gradient-to-r from-red-600 to-orange-500 text-white text-center py-2 rounded-xl font-semibold text-sm">
                                 View Details →
                               </div>
                             </div>
                           </div>
                         </Link>
                       </div>
                     ))}
                   </div>
             
                  
                   {carList.length === 0 && (
                     <div className="text-center py-16">
                       <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                         <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
                         </svg>
                       </div>
                       <h3 className="text-xl font-semibold text-gray-600 mb-2">No cars found</h3>
                       <p className="text-gray-500">Try selecting a different body type to see available cars.</p>
                     </div>
                   )}
                   </>
    )
}

export default ElectricCars