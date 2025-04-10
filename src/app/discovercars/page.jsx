"use client"
import React from "react";
import Image from 'next/image'
import { Link, Tabs,Tab,TabList,Grid,GridItem,Select,Button } from "@chakra-ui/react"
import{useState,useEffect} from "react";


const discoverCars=()=>{
     const [carList, setCarList] = useState([]); //for API
      const [selectedType, setSelectedType] = useState("All"); //for specific selection
    
      const carTab=[
        {label:'All', value:'All'},
        {label:'Hatchback',value:'Hatchback'},
        {label:'Sedan',value:'Sedan'},
        {label:'SUV',value:'SUV'},
        {label:'MUV',value:'MUV'},
        {label:'Luxury',value:'Luxury'}
      ]
    
      useEffect(() => {
        const fetchCars = async () => {
          try {
            const response = await fetch('/data/car.json'); // Replace with your API URL
            const data = await response.json();
    
            const filteredCars =
            selectedType === "All"
              ? data
              : data.filter(car => car.type === selectedType);
    
    
              setCarList(filteredCars);
          } catch (error) {
            console.error("Error fetching cars:", error);
          }
        };
    
        fetchCars();
      }, [selectedType]);


    return(
        <>
         <div className="my-5 p-2 bg-gray-100 w-11/12 h-auto mx-auto rounded-md" >
                      <div>
                      <Tabs colorScheme="red">
                      <TabList className="font-semibold">
                      {carTab.map((tab)=>(
                        <Tab key={tab.value} value={tab.value} onClick={()=>setSelectedType(tab.value)}>{tab.label}</Tab>
                      ))}
                      </TabList>
                      </Tabs>
                  </div>
        
        
                <div>
                 <Grid templateColumns="repeat(4, 1fr)" gap={5} className="p-2 my-2">
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

export default discoverCars