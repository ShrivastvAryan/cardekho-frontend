import React from "react";
import{Tabs,TabList,Tab, AvatarGroup,Avatar} from '@chakra-ui/react'

const Navbar=()=>{
    return(
        <>
        <div className="w-full bg-white shadow-md h-15 p-2 flex relative">
        <div className="mx-auto">
        <Tabs variant='soft-rounded' colorScheme='red'>
        <TabList>
        <Tab>Home</Tab>
        <Tab>Discover Cars</Tab>
        <Tab>About Us</Tab>
        <Tab>Contact</Tab>
       </TabList>
       </Tabs>
       </div>
       <div>
        <AvatarGroup>
        <Avatar bg='red.500' className="cursor-pointer"/>
        </AvatarGroup>
       </div>
        </div>
        </>
    )
}

export default Navbar