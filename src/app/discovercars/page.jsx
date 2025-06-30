"use client"
import React from "react";
import Image from 'next/image'
import { 
  Tabs, 
  Tab, 
  TabList, 
  Input, 
  InputGroup, 
  InputLeftElement, 
  InputRightElement,
  IconButton,
  Box,
  Flex,
  Text,
  Badge,
  HStack
} from "@chakra-ui/react"
import { SearchIcon, CloseIcon } from '@chakra-ui/icons';
import { useState, useEffect } from "react";
import Link from "next/link";

const DiscoverCars = () => {
  const [carList, setCarList] = useState([]); // for API
  const [filteredCars, setFilteredCars] = useState([]); // for filtered results
  const [selectedType, setSelectedType] = useState("All"); // for specific selection
  const [searchQuery, setSearchQuery] = useState(""); // for search functionality
  const [allCars, setAllCars] = useState([]); // store all cars for filtering

  const carTab = [
    { label: 'All', value: 'All' },
    { label: 'Hatchback', value: 'Hatchback' },
    { label: 'Sedan', value: 'Sedan' },
    { label: 'SUV', value: 'SUV' },
    { label: 'MUV', value: 'MUV' },
    { label: 'Luxury', value: 'Luxury' }
  ]

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch('/data/car.json'); // Replace with your API URL
        const data = await response.json();
        setAllCars(data);
        setCarList(data);
        setFilteredCars(data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchCars();
  }, []);

  // Filter cars based on type and search query
  useEffect(() => {
    let filtered = allCars;

    // Filter by type
    if (selectedType !== "All") {
      filtered = filtered.filter(car => car.type === selectedType);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter(car =>
        car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.fuel.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredCars(filtered);
  }, [selectedType, searchQuery, allCars]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  const getSearchResultsText = () => {
    const total = filteredCars.length;
    if (searchQuery.trim()) {
      return `Found ${total} car${total !== 1 ? 's' : ''} for "${searchQuery}"`;
    }
    if (selectedType !== "All") {
      return `Showing ${total} ${selectedType} car${total !== 1 ? 's' : ''}`;
    }
    return `Showing all ${total} cars`;
  };

  return (
    <>
      {/* Search Bar Section */}
      <Box className="my-6 px-2">
        <Flex direction="column" gap={4}>
          <Box maxW="600px" mx="auto" w="full">
            <InputGroup size="lg">
             <InputLeftElement pointerEvents="none">
             <SearchIcon color="orange.400" boxSize={5} />
             </InputLeftElement>
              
              <Input
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search cars by name, brand, type, or fuel..."
                bg="white"
                border="2px solid"
                borderColor="orange.200"
                borderRadius="2xl"
                _hover={{
                  borderColor: "orange.300",
                  shadow: "md"
                }}
                _focus={{
                  borderColor: "red.400",
                  shadow: "0 0 0 3px rgba(251, 146, 60, 0.1)",
                  bg: "white"
                }}
                _placeholder={{
                  color: "gray.400"
                }}
                fontSize="lg"
                fontWeight="medium"
                pr={searchQuery ? "3rem" : "1rem"}
                transition="all 0.2s"
              />
              
              {searchQuery && (
                <InputRightElement>
                  <IconButton
                    size="sm"
                    variant="ghost"
                    icon={<CloseIcon />}
                    onClick={clearSearch}
                    color="gray.400"
                    _hover={{
                      color: "red.500",
                      bg: "red.50"
                    }}
                    borderRadius="full"
                    aria-label="Clear search"
                  />
                </InputRightElement>
              )}
            </InputGroup>
          </Box>

          {/* Search Results Info */}
          <HStack justify="space-between" align="center" px={2}>
            <Text fontSize="sm" color="gray.600" fontWeight="medium">
              {getSearchResultsText()}
            </Text>
            {searchQuery && (
              <Badge 
                colorScheme="orange" 
                variant="subtle" 
                borderRadius="full"
                px={3}
                py={1}
              >
                Search Active
              </Badge>
            )}
          </HStack>
        </Flex>
      </Box>

      {/* Category Tabs */}
      <div className="my-8 px-2">
        <Tabs colorScheme="blue" variant="soft-rounded">
          <TabList className="flex flex-wrap gap-3 p-1 bg-gray-50 rounded-2xl">
            {carTab.map((tab) => (
              <Tab 
                key={tab.value} 
                value={tab.value} 
                onClick={() => setSelectedType(tab.value)}
                className="px-6 py-3 font-semibold text-sm rounded-xl transition-all duration-200 hover:bg-white hover:shadow-md"
                _selected={{
                  bg: "linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)",
                  color: 'white',
                  shadow: 'lg'
                }}
              >
                {tab.label}
              </Tab>
            ))}
          </TabList>
        </Tabs>
      </div>

      {/* Cars Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-2">
        {filteredCars.map((car, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden border border-gray-100"
          >
            <Link href={`/cars/${car.id}`}>
              {/* Car Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Car Type Badge */}
                <div className="absolute top-3 left-3">
                  <Badge
                    bg="linear-gradient(135deg, rgba(220, 38, 38, 0.9), rgba(234, 88, 12, 0.9))"
                    color="white"
                    px={3}
                    py={1}
                    borderRadius="full"
                    fontSize="xs"
                    fontWeight="bold"
                    backdropFilter="blur(4px)"
                  >
                    {car.type}
                  </Badge>
                </div>
              </div>

              {/* Car Details */}
              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-800 mb-3 hover:bg-gradient-to-r from-red-600 to-orange-500 hover:bg-clip-text hover:text-transparent transition-colors duration-300">
                  {car.name}
                </h3>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500">Brand</span>
                    <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {car.brand}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500">Fuel</span>
                    <span className="text-sm font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                      {car.fuel}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500">Mileage</span>
                    <span className="text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                      {car.mileage}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500">Price</span>
                    <span className="text-lg font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                      {car.price}
                    </span>
                  </div>
                </div>

                {/* Hover CTA */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-full bg-gradient-to-r from-red-600 to-orange-500 text-white text-center py-2 rounded-xl font-semibold text-sm">
                    View Details →
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* No Results State */}
      {filteredCars.length === 0 && (
        <div className="text-center py-16">
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center">
            {searchQuery ? (
              <SearchIcon className="w-12 h-12 text-orange-400" />
            ) : (
              <svg className="w-12 h-12 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
              </svg>
            )}
          </div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">
            {searchQuery ? `No results for "${searchQuery}"` : 'No cars found'}
          </h3>
          <p className="text-gray-500 mb-4">
            {searchQuery 
              ? 'Try searching with different keywords or clear your search to see all cars.'
              : 'Try selecting a different body type to see available cars.'
            }
          </p>
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-xl font-medium hover:from-red-700 hover:to-orange-600 transition-all duration-200"
            >
              <CloseIcon className="w-4 h-4 mr-2" />
              Clear Search
            </button>
          )}
        </div>
      )}
    </>
  )
}

export default DiscoverCars