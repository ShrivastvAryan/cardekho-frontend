import React from "react";
import Image from 'next/image'
import { Link, Tabs,Tab,TabList,Grid,GridItem,Select,Button } from "@chakra-ui/react"

const mainPage=()=>{
  return(
    <>
    <div className="flex bg-slate-600 h-96 relative w-full">

    <Image 
      src="https://cdn4.singleinterface.com/files/enterprise/coverphoto/76409/tata-17-04-24-10-55-58.jpg"
      alt="Tata poster"
      fill
      className="object-cover"/>

      <div className="w-72 h-36 bg-gray-200 ml-5 mr-3 rounded-md my-5 p-2 z-10">
        <p className="font-semibold text-lg text-center">Search By Car Brand</p>
        <Select bg="white" className="mt-2 font-semibold">
        <option value='M'>Maruti Suzuki</option>
        <option value='H'>Hyundai</option>
        <option value='TM'>Tata Motors</option>
        <option value='M&M'>Mahindra</option>
        <option value='VW'>Volkswagen</option>
        </Select>
        <Button colorScheme='red' size="sm" className=" mt-3 mx-auto block">Search</Button>
      </div>
     
    </div>
    <div className="my-5 p-2 bg-gray-100 w-11/12 h-80 mx-auto rounded-md" >
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
    <h1 className="text-4xl font-semibold p-2 mb-4">Latest Updates</h1>
    <Grid
     h='360px'
    templateRows='repeat(2, 1fr)'
    templateColumns='repeat(6, 1fr)'
    gap={4}
    >

    <GridItem rowSpan={2} colSpan={2} bg='tomato' className="transition-transform duration-300 hover:scale-105">
      <div className=" w-full h-4/5  relative ">
      <Image src="https://images.moneycontrol.com/static-mcnews/2022/04/4-tata-curvv.jpg"
       alt="Tata poster"
       fill
       className="object-cover"/>
      </div>
      <div className="text-4xl font-semibold text-center my-2">All new Tata Curvv !!</div>
    </GridItem>

    <GridItem colSpan={2} bg='tomato'  className="transition-transform duration-300 hover:scale-105 flex">
    <div className="bg-black h-full w-3/4"></div>
    <div className="text-2xl p-2 font-sans font-semibold"> Will the new kylaq take on nexon?</div>
    </GridItem>
    
    <GridItem colSpan={2} bg='tomato'  className="transition-transform duration-300 hover:scale-105 flex">
    <div className="bg-black h-full w-3/4"></div>
    <div className="text-2xl p-2 font-sans font-semibold"> Will the new kylaq take on nexon?</div>
    </GridItem>

    <GridItem colSpan={2} bg='tomato'  className="transition-transform duration-300 hover:scale-105 flex">
    <div className="bg-black h-full w-3/4"></div>
    <div className="text-2xl p-2 font-sans font-semibold"> Will the new kylaq take on nexon?</div>
    </GridItem>

    <GridItem colSpan={2} bg='tomato'  className="transition-transform duration-300 hover:scale-105 flex">
    <div className="bg-black h-full w-3/4"></div>
    <div className="text-2xl p-2 font-sans font-semibold"> Will the new kylaq take on nexon?</div>
    </GridItem>

    </Grid>
    </div>
    </>
  )
}

export default mainPage