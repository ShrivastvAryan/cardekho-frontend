"use client"
import React from "react";
import Image from 'next/image'
import { Tabs,Tab,TabList,Grid,GridItem,Box } from "@chakra-ui/react"
import{useState,useEffect} from "react";


const MidHero=()=>{

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

  const brandPhoto=[
    {label:'Maruti Suzuki',img:"/cb1.jpg"},
    {label:'Hyundai',img:"/cb2.jpg"},
    {label:'Tata',img:"/cb3.jpg"},
    {label:'Mahindra',img:"/cb4.webp"},
    {label:'Volkswagen',img:"/cb5.jpg"},
    {label:'Mercedes',img:"/cb6.jpeg"},
    {label:'MG',img:"/cb7.jpg"},
    {label:'SKoda',img:"/cb8.png"},
  ]

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch('/data/car.json'); // Replace with your API URL
        const data = await response.json();

        const filteredCars =
        selectedType === "All"
          ? data.slice(0,8)
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
       <div className="m-5 p-2 bg-gray-100 w-auto h-auto rounded-md" >
       <p className="font-semibold text-2xl p-2 pb-4">Find Car By Brand</p>

       <div>
         <div className="flex flex-row gap-10 flex-wrap ">
          {brandPhoto.map((photos,index)=>(
             <div key={index} className="h-44 w-44 relative p-4">
            <Image
              src={photos.img}
              alt={photos.label}
              fill                  // makes image fill its parent container
              className="object-contain"
             />
             </div>
          ))}
          
           </div>
        </div>

        </div>


        {/*Mid hero 2*/}
         <div className="m-5 p-2 bg-gray-100 w-auto h-auto rounded-md" >
          <p className="font-semibold text-2xl p-2 pb-4">Find Car By Body</p>
              <div>
              <Tabs colorScheme="red">
              <TabList className=" font-semibold text-xs flex flex-wrap gap-2 pt-1">
              {carTab.map((tab)=>(
                <Tab key={tab.value} value={tab.value} onClick={()=>setSelectedType(tab.value)}>{tab.label}</Tab>
              ))}
              </TabList>
              </Tabs>
             </div>


        <div>
         <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={9} className="p-2 my-2">
           {carList.map((list, index) => (
           <GridItem
           key={index}  className="rounded-md cursor-pointer md:w-72 w-full h-64 bg-slate-200">
           <div className=" w-full h-3/5 relative">
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