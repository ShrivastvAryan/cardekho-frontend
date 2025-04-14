"use client"
import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';


const CarPage=()=>{

    const { brand } = useParams()
    const [carData, setCarData] = useState(null);

    useEffect(() => {
        if (brand) {
          fetch(`/data/car?${brand}`)
            .then(res => res.json())
            .then(data => setCarData(data))
            .catch(err => console.error(err));
        }
      }, [brand]);
    
      if (!carData) return <div>Loading...</div>;

    return(
        <>
         <div>
      <h1>{carData.name}</h1>
      <p>Brand: {carData.brand}</p>
      <p>ID: {carData.id}</p>
      {/* More details */}
    </div>
        </>
    )
}

export default CarPage