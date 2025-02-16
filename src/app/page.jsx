import React from "react";
import Image from 'next/image'
import { Link, Tabs,Tab,TabList,Grid,GridItem } from "@chakra-ui/react"

const mainPage=()=>{
  return(
    <>
    <div className= "w-full h-80">
      <Image 
      src="https://s3-ap-southeast-1.amazonaws.com/assetsin.izmocars.com/b_images/harrier-16393-12554.jpg"
      alt="Tata poster"
      width={500}
      height={300}/>
    </div>
    <div className="my-10 p-2 bg-gray-100 w-11/12 h-80 mx-auto rounded-md" >
      <div>
      <Tabs colorScheme="red">
      <TabList className="font-semibold">
      <Tab>All</Tab>
      <Tab>Hatchback</Tab>
      <Tab>Sedan</Tab>
      <Tab>SUV</Tab>
      <Tab>MUV</Tab>
      <Tab>Luxury</Tab>
      </TabList>
      </Tabs>
      </div>
      <div>
      <Grid templateColumns='repeat(4, 1fr)' gap={3} className="p-2 my-2">
      <GridItem w='90%' h='60' bg='gray.200' className="rounded-md" />
      <GridItem w='90%' h='60' bg='gray.200' className="rounded-md" />
      <GridItem w='90%' h='60' bg='gray.200' className="rounded-md" />
      <GridItem w='90%' h='60' bg='gray.200' className="rounded-md" />
      </Grid>
      </div>
    </div>

    <div className="my-10 p-4 bg-gray-100 w-11/12 h-auto mx-auto rounded-md" >
    <h1 className="text-2xl font-semibold p-2">Latest Updates</h1>
    <Grid
     h='360px'
    templateRows='repeat(2, 1fr)'
    templateColumns='repeat(6, 1fr)'
    gap={4}
    >

    <GridItem rowSpan={2} colSpan={2} bg='tomato' />
    <GridItem colSpan={2} bg='papayawhip' />
    <GridItem colSpan={2} bg='papayawhip' />
    <GridItem colSpan={2} bg='tomato' />
    <GridItem colSpan={2}  bg='tomato' />
    </Grid>
    </div>
    </>
  )
}

export default mainPage