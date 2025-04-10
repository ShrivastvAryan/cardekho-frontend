import React from "react";
import Image from 'next/image'
import { Link, Tabs,Tab,TabList,Grid,GridItem,Select,Button } from "@chakra-ui/react"

const LatestUpdate=()=>{

  const carUpdate=[
    {label:"All new Tata Curvv !!",image:"/curvv.jpeg"}
  ]
    return(
          <div className="my-10 p-4 bg-gray-100 w-11/12 h-auto mx-auto rounded-md" >
    <h1 className="text-4xl font-semibold p-2 mb-4">Latest Updates</h1>
    <Grid
     h='360px'
    templateRows='repeat(2, 1fr)'
    templateColumns='repeat(6, 1fr)'
    gap={4}
    >
      {carUpdate.map((update,index)=>(
         <React.Fragment key={index}>
        <GridItem rowSpan={2} colSpan={2} bg='tomato' className="transition-transform duration-300 hover:scale-105">
          <div className=" w-full h-4/5  relative ">
            <Image src={update.image}
              alt="Tata poster"
              fill
              className="object-cover" />
          </div>
          <div className="text-4xl font-semibold text-center my-2"></div>
        </GridItem>
        <GridItem colSpan={2} bg='tomato' className="transition-transform duration-300 hover:scale-105 flex">
            <div className="bg-black h-full w-3/4"></div>
            <div className="text-2xl p-2 font-sans font-semibold">{update.label}</div>
          </GridItem>
          </React.Fragment>
      ))}

    </Grid>
    </div>
    )
}

export default LatestUpdate