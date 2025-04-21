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
    <div>
      {carList.map((car)=>(
        <div key={car.id}>
          <div className='relative w-screen h-48 md:h-64 lg:h-[60vh] mt-2'>
          <Image src={car.image} alt={car.name} fill className='object-contain '/>
          </div>

          <Box  className='block text-center italic bg-red-600 text-white text-3xl font-semibold mt-4 p-1 lg:text-4xl'>{car.name}</Box>
          <div className=' flex flex-col font-semibold pl-4 pt-6 text-xl gap-2 italic lg:text-2xl '>
          <div >Price: {car.price}</div>
          <Divider orientation='horizontal' colorScheme='red' className='border-red-500 border-2' />
          <div>Fuel: {car.fuel}</div>
          <Divider orientation='horizontal'  colorScheme='red'/>
          <div>Mileage: {car.mileage}</div>
          <Divider orientation='horizontal'  colorScheme='red'/>
          <div>Type: {car.type}</div>
          <Divider orientation='horizontal'  colorScheme='red'/>
          <div>Brand: {car.brand}</div>
          </div>

        </div>
      ))}
    </div>

  )};