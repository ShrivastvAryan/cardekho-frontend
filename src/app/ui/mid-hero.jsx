"use client"
import React from "react";
import Image from 'next/image';
import { Tabs,Tab,TabList,Grid,GridItem } from "@chakra-ui/react";
import{useState,useEffect} from "react";
import Link from "next/link";


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
    {label:'Maruti Suzuki',img:"/cb1.jpg",brand:"Maruti"},
    {label:'Hyundai',img:"/cb2.jpg", brand:"Hyundai"},
    {label:'Tata Motors',img:"/cb3.jpg",brand:"Tata"},
    {label:'Mahindra',img:"/cb4.webp",brand:"Mahindra"},
    {label:'Volkswagen',img:"/cb5.jpg",brand:"Volkswagen"},
    {label:'Mercedes',img:"/cb6.jpeg",brand:"Mercedes"},
    {label:'Morris Garages',img:"/cb7.jpg",brand:"MG"},
    {label:'Skoda',img:"/cb8.png",brand:"Skoda"},
  ]

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch('/data/car.json'); // Replace with your API URL
        const data = await response.json();

        const filteredCars=
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
        <p className="font-semibold text-xl md:text-2xl lg:text-4xl p-2 pb-10 block text-center mt-10">Find  A Car By Brand</p>
       <div className=" w-[95vw] h-auto rounded-md  mx-auto" >
      
         <div className=" flex flex-row gap-6 lg:gap-10 flex-wrap justify-center pb-6">
          {brandPhoto.map((photos,index)=>(
            <div key={index} className="h-36 w-36
              md:h-60 md:w-60  shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ">
            <div className="relative w-full h-[80%] cursor-pointer">
            <Link href={`/cars/${photos.brand}`}>
            <Image
              src={photos.img}
              alt={photos.label} 
              fill                  
              className="object-contain"
             />
             </Link>
             </div>
             <div className="h-[20%] font-bold text-center md:text-2xl p-2 bg-gray-200 flex items-center justify-center">{photos.label}</div>
             </div>
         
          ))}
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
         <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={9} className="p-2 my-2 ">
           {carList.map((list, index) => (
           <GridItem
           key={index}  className="rounded-md cursor-pointer md:w-72 w-full h-64 bg-slate-200  shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ">
           <div className=" w-full h-3/5 relative ">
           <Link href={`/cars/${list.id}`}>
          <Image
            src={list.image}
            alt={list.name}
          fill
           className="object-cover rounded-md"

           />
           </Link>
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