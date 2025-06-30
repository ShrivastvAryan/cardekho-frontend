"use client"
import React from "react";
import Image from 'next/image';
import { Tabs,Tab,TabList} from "@chakra-ui/react";
import{useState,useEffect} from "react";
import Link from "next/link";


const MidHero=()=>{

  const [carList, setCarList] = useState([]); //for API
  const [selectedType, setSelectedType] = useState("All"); //for specific selection

  const carTab=[
    {label:'All', value:'All'},
    {label:'Hatchback',value:'Hatchback'},
    {label:'Sedan',value:'Sedan'},
    {label:'SUV',value:'SUV'},
    {label:'MUV',value:'MUV'},
    {label:'Luxury',value:'Luxury'}
  ]

  const brandPhoto=[
    {label:'Maruti Suzuki',img:"/cb1.jpg",brand:"Maruti"},
    {label:'Hyundai',img:"/cb2.jpg", brand:"Hyundai"},
    {label:'Tata Motors',img:"/cb3.jpg",brand:"Tata"},
    {label:'Mahindra',img:"/cb4.webp",brand:"Mahindra"},
    {label:'Volkswagen',img:"/cb5.jpg",brand:"Volkswagen"},
    {label:'Mercedes',img:"/cb6.jpeg",brand:"Mercedes"},
    {label:'Morris Garages',img:"/cb7.jpg",brand:"MG"},
    {label:'Skoda',img:"/cb8.png",brand:"Skoda"},
  ]

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch('/data/car.json'); // Replace with your API URL
        const data = await response.json();

        const filteredCars=
        selectedType === "All"
          ? data.slice(0,8)
          : data.filter(car => car.type === selectedType);


          setCarList(filteredCars);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchCars();
  }, [selectedType]);

    return(
        <>
   
<div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
  <div className="container mx-auto px-4 py-12">
    

    <div className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent mb-4">
        Find Your Perfect Car
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
        Discover your dream vehicle by browsing our extensive collection of premium car brands
      </p>
    </div>

    
    <div className="mb-20">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-12">
        Browse by Brand
      </h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 max-w-7xl mx-auto">
        {brandPhoto.map((photos, index) => (
          <div 
            key={index} 
            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-gray-100"
          >
            <Link href={`/cars/${photos.brand}`}>
              <div className="aspect-square p-6 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 group-hover:from-blue-50 group-hover:to-purple-50 transition-all duration-300">
                <div className="relative w-full h-full">
                  <Image
                    src={photos.img}
                    alt={photos.label}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-bold text-center text-sm md:text-base text-gray-800 hover:bg-gradient-to-r from-red-600 to-orange-500 hover:bg-clip-text hover:text-transparent transition-colors duration-300">
                  {photos.label}
                </h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>

   
    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Find Car By Body Type
        </h2>
        <p className="text-gray-600 text-lg">
          Filter cars by their body style to find exactly what you&apos;re looking for
        </p>
      </div>

   
      <div className="mb-8">
        <Tabs colorScheme="blue" variant="soft-rounded">
          <TabList className="flex flex-wrap gap-3 p-1 bg-gray-50 rounded-2xl">
            {carTab.map((tab) => (
              <Tab 
                key={tab.value} 
                value={tab.value} 
                onClick={() => setSelectedType(tab.value)}
                className="px-6 py-3 font-semibold text-sm rounded-xl transition-all duration-200 hover:bg-white hover:shadow-md"
                _selected={{
                   bg:"linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)",
                  color: 'white',
                  shadow: 'lg'
                }}
              >
                {tab.label}
              </Tab>
            ))}
          </TabList>
        </Tabs>
      </div>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
                 <h3 className="font-bold text-xl text-gray-800 mb-3 hover:bg-gradient-to-r from-red-600 to-orange-500 hover:bg-clip-text hover:text-transparent transition-colors duration-300">
                  {car.name}
                 </h3>
                             
                 <div className="space-y-2">
                  <div className="flex items-center justify-between">
                   <span className="text-sm font-medium text-gray-500">Brand</span>
                    <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {car.brand}
                    </span>
                    </div>
                               
                      <div className="flex items-center justify-between">
                       <span className="text-sm font-medium text-gray-500">Fuel</span>
                         <span className="text-sm font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                         {car.fuel}
                        </span>
                      </div>
                               
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
             
                     {/* Hover CTA */}
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
    </div>
  </div>
</div>
</>
    )
}

export default MidHero