import React from 'react'
import { Link, Tabs,Tab,TabList,Grid,GridItem,Select,Button } from "@chakra-ui/react"

const electricCars=()=>{
    return(
        <>
         <div className="my-5 p-2 bg-gray-100 w-11/12 h-auto mx-auto rounded-md" >
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
              <Grid templateColumns='repeat(4, 1fr)' gap={4} className="p-4">
              <GridItem w='92%' h='60' bg='gray.200' className="rounded-md" />
              <GridItem w='92%' h='60' bg='gray.200' className="rounded-md" />
              <GridItem w='92%' h='60' bg='gray.200' className="rounded-md" />
              <GridItem w='92%' h='60' bg='gray.200' className="rounded-md" />
              <GridItem w='92%' h='60' bg='gray.200' className="rounded-md" />
              <GridItem w='92%' h='60' bg='gray.200' className="rounded-md" />
              <GridItem w='92%' h='60' bg='gray.200' className="rounded-md" />
              <GridItem w='92%' h='60' bg='gray.200' className="rounded-md" />
              <GridItem w='92%' h='60' bg='gray.200' className="rounded-md" />
              <GridItem w='92%' h='60' bg='gray.200' className="rounded-md" />
              <GridItem w='92%' h='60' bg='gray.200' className="rounded-md" />
              <GridItem w='92%' h='60' bg='gray.200' className="rounded-md" />
              </Grid>
              </div>
            </div>
        </>
    )
}

export default electricCars