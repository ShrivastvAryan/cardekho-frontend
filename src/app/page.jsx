import React from "react";
import Image from 'next/image'
import { Link, Tabs,Tab,TabList,Grid,GridItem,Select,Button } from "@chakra-ui/react"

const mainPage=()=>{
  return(
    <>
    <div className="flex">
      <div className="w-72 h-80 bg-gray-200 ml-2 mr-3 rounded-md my-5 p-2">
        <p className="font-semibold text-lg text-center">Search By Car Brand</p>
        <Select bg="white" className="mt-2 font-semibold">
        <option value='M'>Maruti Suzuki</option>
        <option value='H'>Hyundai</option>
        <option value='TM'>Tata Motors</option>
        <option value='M&M'>Mahindra</option>
        <option value='VW'>Volkswagen</option>
        </Select>
        <Button colorScheme='red' size="sm" className=" mt-3">Search</Button>
      </div>
      <div>
      <Image 
      src="https://cdn4.singleinterface.com/files/enterprise/coverphoto/76409/tata-17-04-24-10-55-58.jpg"
      alt="Tata poster"
      width={1000}
      height={550}
      className="content-end"/>
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