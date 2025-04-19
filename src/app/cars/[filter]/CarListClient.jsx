'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Divide } from 'lucide-react';

export default function CarListClient({ cars = [], error }) {
  const [carList, setCarList] = useState(cars);

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  return (
    <div>
      {carList.map((car) => (
        <div key={car.id}>
          <div className='relative h-40 w-screen'>
            <Image src={car.image} alt={car.name} fill className='object-contain' />
          </div>
          <h2 className='block text-center text-2xl font-semibold'>{car.name}</h2>
          <p><strong>Price:</strong> {car.price}</p>
          <p><strong>Fuel:</strong> {car.fuel}</p>
          <p><strong>Mileage:</strong> {car.mileage}</p>
          <p><strong>Type:</strong> {car.type}</p>
          <p><strong>Brand:</strong> {car.brand}</p>
        </div>
      ))}
    </div>
  );