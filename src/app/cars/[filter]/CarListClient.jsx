'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Box, Divider } from '@chakra-ui/react'

export default function CarListClient({ cars = [], error }) {
  const [carList, setCarList] = useState(cars);

  if (error) {
    return <p className="text-red-500 relative">Error: {error}</p>;
  }

  return (
   <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 p-6">
  {carList.map((car) => (
    <div 
      key={car.id} 
      className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-red-100"
    >
      {/* Image Section */}
      <div className="relative w-full h-48 md:h-56 lg:h-64 bg-gradient-to-br from-red-100 to-orange-100">
        <Image 
          src={car.image} 
          alt={car.name} 
          fill 
          className="object-contain p-4 hover:scale-105 transition-transform duration-300" 
        />
      </div>
      
      {/* Car Name Header */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <Box className="text-center font-bold text-2xl lg:text-3xl py-4 px-6 tracking-wide">
          {car.name}
        </Box>
      </div>
      
      {/* Car Details */}
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between py-3 border-b-2 border-gradient-to-r from-red-200 to-orange-200">
          <span className="text-gray-700 font-medium text-lg">Price:</span>
          <span className="text-red-600 font-bold text-lg">{car.price}</span>
        </div>
        
        <div className="flex items-center justify-between py-3 border-b-2 border-red-200">
          <span className="text-gray-700 font-medium text-lg">Fuel:</span>
          <span className="text-orange-600 font-semibold text-lg">{car.fuel}</span>
        </div>
        
        <div className="flex items-center justify-between py-3 border-b-2 border-red-200">
          <span className="text-gray-700 font-medium text-lg">Mileage:</span>
          <span className="text-orange-600 font-semibold text-lg">{car.mileage}</span>
        </div>
        
        <div className="flex items-center justify-between py-3 border-b-2 border-red-200">
          <span className="text-gray-700 font-medium text-lg">Type:</span>
          <span className="text-orange-600 font-semibold text-lg">{car.type}</span>
        </div>
        
        <div className="flex items-center justify-between py-3">
          <span className="text-gray-700 font-medium text-lg">Brand:</span>
          <span className="text-red-600 font-bold text-lg">{car.brand}</span>
        </div>
      </div>
    </div>
  ))}
</div>

  )};