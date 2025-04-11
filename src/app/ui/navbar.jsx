'use client'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Tabs,
  TabList,
  Tab,
  Avatar,
  AvatarGroup,
  Box
} from '@chakra-ui/react'

import { HamburgerIcon } from '@chakra-ui/icons';
import { usePathname } from 'next/navigation';
import React from 'react';
import Link from 'next/link';


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
      case "/about":
        return 3;
      default:
        return 0;
    }
  };

    return(
        <>
        <Box className="w-full bg-white shadow-md h-14 p-2 relative"
         display={{ base: 'none', md: 'flex' }}
         justifyContent="center"
         alignItems="center">
        <Box>
        <Tabs index={getTabIndex()} variant='soft-rounded' colorScheme='red'>
        <TabList>
        <Tab as={Link} href="/">Home</Tab>
        <Tab as={Link} href="/discovercars">Discover Cars</Tab>
        <Tab as={Link} href="/electriccars">Electric Cars</Tab>
        <Tab as={Link} href="/about">About Us</Tab>
       </TabList>
    
       </Tabs>

       </Box>
       <div>
        <AvatarGroup>
        <Avatar bg='red.500' className="cursor-pointer" size="sm" className="m-2"/>
        </AvatarGroup>
       </div>
        </Box>


<Box display={{ base: 'block', md: 'none' }}>
<Menu >
<MenuButton
  as={IconButton}
  aria-label='Options'
  icon={<HamburgerIcon />}
  variant='outline'
/>
<MenuList className="font-semibold p-1 ml-2" colorScheme='red' >
  <MenuItem as={Link} href="/"  >
    Home
  </MenuItem>
  <MenuItem  as={Link} href="/discovercars" >
    Discover Cars
  </MenuItem>
  <MenuItem as={Link} href="/electriccars" >
    Electric cars
  </MenuItem>
  <MenuItem as={Link} href="/about" >
    About Us
  </MenuItem>
</MenuList>
</Menu>
</Box>
        </>
    )
}

export default Navbar