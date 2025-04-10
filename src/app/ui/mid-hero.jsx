import React from "react";
import Image from 'next/image'
import { Link, Tabs,Tab,TabList,Grid,GridItem,Select,Button } from "@chakra-ui/react"


const MidHero=()=>{

  const carTab=[
    {label:'All', value:'All'},
    {label:'Hatchback',value:'Hatchback'},
    {label:'Sedan',value:'Sedan'},
    {label:'SUV',value:'SUV'},
    {label:'MUV',value:'MUV'},
    {label:'Luxury',value:'Luxury'}
  ]

  const carList=[
    {name:'Tata Curvv ',mileage:'15-16kmpl',price:'10-19 Lakh',image:'/curvv.jpeg'}

  ]
    return(
        <>
         <div className="my-5 p-2 bg-gray-100 w-11/12 h-80 mx-auto rounded-md" >
              <div>
              <Tabs colorScheme="red">
              <TabList className="font-semibold">
              {carTab.map((tab)=>(
                <Tab key={tab.value} value={tab.value}>{tab.label}</Tab>
              ))}
              </TabList>
              </Tabs>
          </div>


        <div>
         <Grid templateColumns="repeat(4, 1fr)" gap={3} className="p-2 my-2">
           {carList.map((list, index) => (
           <GridItem key={index} w="90%" h="60" bg="gray.200" className="rounded-md cursor-pointer">
           <div className="p-2 w-full bg-red-500 h-3/5 relative">
          <Image
            src={list.image}
            alt={list.name}
            fill
            className="object-cover rounded-md"
           />
           </div>

           <div className="p-2 font-semibold text-xl">
           <p className="font-extrabold">{list.name}</p>
           <p className="text-sm mt-1.5">Mileage:{list.mileage}</p>
           <p className="text-sm mt-1.5">Price:{list.price}</p>
           </div>
          </GridItem>
         ))}
    </Grid>
  </div>
</div>
</>
    )
}

export default MidHero