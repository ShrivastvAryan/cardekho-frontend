"use client";

import React from "react";
import{Tabs,TabList,Tab, AvatarGroup,Avatar,TabPanels,TabPanel} from '@chakra-ui/react'
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar=()=>{

  const pathname = usePathname(); // Get current path

  // Ensure pathname is defined before using it
  if (!pathname) return null;

  // Define active tab based on current route
  const getTabIndex = () => {
    switch (pathname) {
      case "/discovercars":
        return 1;
      case "/electriccars":
        return 2;
      case "/aboutUs":
        return 3;
      default:
        return 0;
    }
  };

    return(
        <>
        <div className="w-full bg-white shadow-md h-14 p-2 flex relative">
        <div className="mx-auto">
        <Tabs index={getTabIndex()} variant='soft-rounded' colorScheme='red'>
        <TabList>
        <Tab as={Link} href="/">Home</Tab>
        <Tab as={Link} href="/discovercars">Discover Cars</Tab>
        <Tab as={Link} href="/electriccars">Electric Cars</Tab>
        <Tab as={Link} href="/aboutUs">About Us</Tab>
       </TabList>
    
       </Tabs>

       </div>
       <div>
        <AvatarGroup>
        <Avatar bg='red.500' className="cursor-pointer" size="sm" className="m-2"/>
        </AvatarGroup>
       </div>
        </div>
        </>
    )
}

export default Navbar