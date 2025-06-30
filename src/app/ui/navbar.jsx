'use client'
import {
  Drawer,
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
  Tab,
  Flex,
  Text,
  Badge,
  useColorModeValue
} from "@chakra-ui/react"
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { usePathname } from 'next/navigation';
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  const pathname = usePathname();
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  // Color mode values for better theming
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('orange.200', 'red.600');
  const textColor = useColorModeValue('gray.800', 'white');

  if (!pathname) return null;

  const getTabIndex = () => {
    switch (pathname) {
      case "/discovercars":
        return 1;
      case "/electriccars":
        return 2;
      default:
        return 0;
    }
  };

  const navItems = [
    { label: 'Home', href: '/', icon: '🏠' },
    { label: 'Discover Cars', href: '/discovercars', icon: '🚗' },
    { label: 'Electric Cars', href: '/electriccars', icon: '⚡', badge: 'New' },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <Box 
        className="w-full bg-white/95 backdrop-blur-md shadow-lg border-b border-orange-100 sticky top-0 z-50"
        display={{ base: 'none', md: 'block' }}
        py={4}
        px={6}
      >
        <Flex 
          maxW="1200px" 
          mx="auto" 
          alignItems="center" 
          justifyContent="space-between"
        >
          {/* Logo */}
          <Box>
            <Link href="/">
              <Flex alignItems="center" gap={3}>
                <Box 
                  w={10} 
                  h={10} 
                  bg="linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)"
                  borderRadius="xl"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="white"
                  fontWeight="bold"
                  fontSize="lg"
                  _hover={{
                    transform: 'rotate(10deg) scale(1.05)',
                    shadow: 'lg'
                  }}
                  transition="all 0.3s"
                >
                  🚗
                </Box>
                <Text 
                  fontSize="2xl" 
                  fontWeight="bold" 
                  bgGradient="linear(to-r, red.600, orange.500)"
                  bgClip="text"
                  _hover={{
                    bgGradient: "linear(to-r, red.700, orange.600)"
                  }}
                  transition="all 0.3s"
                >
                  CarFinder
                </Text>
              </Flex>
            </Link>
          </Box>

          {/* Navigation Tabs */}
          <Box flex="1" display="flex" justifyContent="center">
            <Tabs 
              index={getTabIndex()} 
              variant="soft-rounded" 
              colorScheme="red"
              size="lg"
            >
              <TabList 
                bg="orange.50" 
                p={2} 
                borderRadius="2xl"
                border="2px solid"
                borderColor="orange.200"
                _hover={{
                  borderColor: "orange.300",
                  shadow: 'md'
                }}
                transition="all 0.3s"
              >
                {navItems.map((item, index) => (
                  <Tab 
                    key={index}
                    as={Link} 
                    href={item.href}
                    _selected={{
                      bg: 'linear-gradient(135deg, #dc2626, #ea580c)',
                      color: 'white',
                      shadow: 'lg',
                      transform: 'translateY(-2px)'
                    }}
                    _hover={{
                      shadow: 'md',
                      transform: 'translateY(-1px)',
                      borderColor: 'orange.300'
                    }}
                    transition="all 0.2s"
                    fontWeight="semibold"
                    mx={1}
                    position="relative"
                    borderRadius="xl"
                  >
                    <Flex alignItems="center" gap={2}>
                      <Text fontSize="sm">{item.icon}</Text>
                      <Text>{item.label}</Text>
                      {item.badge && (
                        <Badge 
                          colorScheme="orange" 
                          variant="solid" 
                          fontSize="xs"
                          borderRadius="full"
                          bg="linear-gradient(135deg, #f97316, #ea580c)"
                        >
                          {item.badge}
                        </Badge>
                      )}
                    </Flex>
                  </Tab>
                ))}
              </TabList>
            </Tabs>
          </Box>

          {/* CTA Button */}
          <Box>
            <Button
              as={Link}
              href="/contact"
              bg="linear-gradient(135deg, #dc2626 0%, #ea580c 100%)"
              color="white"
              _hover={{
                bg: 'linear-gradient(135deg, #b91c1c 0%, #c2410c 100%)',
                transform: 'translateY(-2px)',
                shadow: 'xl'
              }}
              borderRadius="xl"
              px={6}
              py={3}
              fontWeight="bold"
              transition="all 0.3s"
              border="2px solid transparent"
              _focus={{
                border: '2px solid',
                borderColor: 'orange.300'
              }}
            >
              Get Started
            </Button>
          </Box>
        </Flex>
      </Box>

      {/* Mobile Navbar */}
      <Box 
        display={{ base: 'block', md: 'none' }} 
        className="w-full bg-white/95 backdrop-blur-md shadow-lg border-b border-orange-100 sticky top-0 z-50"
        py={4}
        px={4}
      >
        <Flex alignItems="center" justifyContent="space-between">
          {/* Mobile Logo */}
          <Link href="/">
            <Flex alignItems="center" gap={2}>
              <Box 
                w={8} 
                h={8} 
                bg="linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)"
                borderRadius="lg"
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="white"
                fontWeight="bold"
                _hover={{
                  transform: 'rotate(10deg) scale(1.05)'
                }}
                transition="all 0.3s"
              >
                🚗
              </Box>
              <Text 
                fontSize="xl" 
                fontWeight="bold" 
                bgGradient="linear(to-r, red.600, orange.500)"
                bgClip="text"
              >
                CarFinder
              </Text>
            </Flex>
          </Link>

          {/* Mobile Menu Button */}
          <IconButton
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            onClick={isOpen ? onClose : onOpen}
            variant="ghost"
            size="lg"
            bg="orange.50"
            color="red.600"
            _hover={{ 
              bg: 'orange.100',
              transform: 'scale(1.05)'
            }}
            _active={{
              bg: 'orange.200'
            }}
            borderRadius="xl"
            border="2px solid"
            borderColor="orange.200"
            aria-label="Toggle Menu"
            transition="all 0.2s"
          />
        </Flex>

        {/* Mobile Drawer */}
        <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="sm">
          <DrawerOverlay backdropFilter="blur(4px)" bg="blackAlpha.400" />
          <DrawerContent borderRadius="0 2xl 2xl 0" bg="gradient-to-br from-orange-50 to-red-50">
            <DrawerCloseButton 
              size="lg" 
              borderRadius="full"
              color="red.600"
              _hover={{ 
                bg: 'red.100',
                transform: 'scale(1.1)'
              }}
              transition="all 0.2s"
            />
            
            <DrawerHeader borderBottomWidth="2px" borderColor="orange.200" py={6}>
              <Flex alignItems="center" gap={3}>
                <Box 
                  w={10} 
                  h={10} 
                  bg="linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)"
                  borderRadius="xl"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="white"
                  fontWeight="bold"
                  fontSize="lg"
                  shadow="lg"
                >
                  🚗
                </Box>
                <Text 
                  fontSize="2xl" 
                  fontWeight="bold" 
                  bgGradient="linear(to-r, red.600, orange.500)"
                  bgClip="text"
                >
                  CarFinder
                </Text>
              </Flex>
            </DrawerHeader>
            
            <DrawerBody py={6}>
              <Box className="space-y-3">
                {navItems.map((item, index) => (
                  <Box key={index}>
                    <Link href={item.href} onClick={onClose}>
                      <Flex
                        alignItems="center"
                        gap={4}
                        p={4}
                        borderRadius="xl"
                        bg={pathname === item.href ? 'linear-gradient(135deg, rgba(220, 38, 38, 0.1), rgba(234, 88, 12, 0.1))' : 'transparent'}
                        borderLeft={pathname === item.href ? '4px solid' : '4px solid transparent'}
                        borderColor="red.500"
                        _hover={{
                          bg: 'linear-gradient(135deg, rgba(251, 146, 60, 0.1), rgba(249, 115, 22, 0.1))',
                          transform: 'translateX(4px)',
                          shadow: 'md'
                        }}
                        transition="all 0.2s"
                        fontWeight="semibold"
                        fontSize="lg"
                      >
                        <Text fontSize="xl">{item.icon}</Text>
                        <Text color={pathname === item.href ? 'red.600' : 'gray.700'}>
                          {item.label}
                        </Text>
                        {item.badge && (
                          <Badge 
                            colorScheme="orange" 
                            variant="solid" 
                            fontSize="xs"
                            borderRadius="full"
                            ml="auto"
                            bg="linear-gradient(135deg, #f97316, #ea580c)"
                          >
                            {item.badge}
                          </Badge>
                        )}
                      </Flex>
                    </Link>
                  </Box>
                ))}
              </Box>
            </DrawerBody>
            
            <DrawerFooter borderTopWidth="2px" borderColor="orange.200">
              <Flex gap={3} w="full">
                <Button 
                  variant="outline" 
                  onClick={onClose} 
                  colorScheme="red"
                  borderRadius="xl"
                  flex="1"
                  borderWidth="2px"
                  _hover={{
                    bg: 'red.50',
                    transform: 'translateY(-1px)'
                  }}
                  transition="all 0.2s"
                >
                  Close
                </Button>
                <Button
                  as={Link}
                  href="/contact"
                  onClick={onClose}
                  bg="linear-gradient(135deg, #dc2626 0%, #ea580c 100%)"
                  color="white"
                  _hover={{
                    bg: 'linear-gradient(135deg, #b91c1c 0%, #c2410c 100%)',
                    transform: 'translateY(-1px)',
                    shadow: 'lg'
                  }}
                  borderRadius="xl"
                  flex="2"
                  transition="all 0.2s"
                >
                  Get Started
                </Button>
              </Flex>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
};

export default Navbar;