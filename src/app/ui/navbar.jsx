'use client'
import {   Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerFooter,
  useDisclosure,
  Button,
  Box,
  IconButton,
  Tabs,
  TabList,
  Tab } from "@chakra-ui/react"


import {HamburgerIcon} from '@chakra-ui/icons';
import { usePathname } from 'next/navigation';
import React from 'react';
import Link from 'next/link';


const Navbar=()=>{

  const pathname = usePathname(); // Get current path
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        display={{ base: 'none', md: 'flex' }}   justifyContent="center"
        alignItems="center">
        <Box >
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
       </div>
        </Box>


<Box display={{ base: 'block', md: 'none' }} className="w-full bg-white shadow-md h-14 p-2 relative">
<IconButton
  variant="outline"
  size="sm"
  icon={<HamburgerIcon />}
  aria-label="Open Menu"
  onClick={onOpen}
/>
        <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Navigation</DrawerHeader>
            <DrawerBody>
              <ul className="space-y-4 font-semibold">
                <li><Link href="/" onClick={onClose}>Home</Link></li>
                <li><Link href="/discovercars" onClick={onClose}>Discover Cars</Link></li>
                <li><Link href="/electriccars" onClick={onClose}>Electric Cars</Link></li>
                <li><Link href="/about" onClick={onClose}>About Us</Link></li>
              </ul>
            </DrawerBody>
            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose} colorScheme='red'>
                Close
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
</Box>
        </>
    )
}

export default Navbar