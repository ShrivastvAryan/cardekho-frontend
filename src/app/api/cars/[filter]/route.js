    const cars = [
      {
        id: 101,
        name: "Hyundai Creta",
        mileage: "16-21 Kmpl",
        type: "SUV",
        fuel: "Petrol/Diesel",
        brand: "Hyundai",
        image: "/b3.jpg",
        price: "₹10.87 - ₹19.20 Lakh"
      },
      {
        id: 102,
        name: "Mahindra XUV700",
        mileage: "12-16 Kmpl",
        type: "MUV",
        fuel: "Petrol/Diesel",
        brand: "Mahindra",
        image: "/b2.webp",
        price: "₹14.03 - ₹26.57 Lakh"
      },
      {
        id: 103,
        name: "Tata Curvv",
        mileage: "14-18 Kmpl",
        type: "Coupe SUV",
        fuel: "Petrol/Electric",
        brand: "Tata",
        image: "/b6.jpeg",
        price: "₹15.00 - ₹20.00 Lakh"
      },
      {
        id: 104,
        name: "Kia Seltos",
        mileage: "16-20 Kmpl",
        type: "SUV",
        fuel: "Petrol/Diesel",
        brand: "Kia",
        image: "/b4.jpeg",
        price: "₹10.90 - ₹20.30 Lakh"
      },
      {
        id: 105,
        name: "Toyota Fortuner",
        mileage: "10-14 Kmpl",
        type: "SUV",
        fuel: "Petrol/Diesel",
        brand: "Toyota",
        image: "/b5.webp",
        price: "₹32.99 - ₹50.34 Lakh"
      },
      {
        id: 106,
        name: "Tata Altroz",
        mileage: "19-25 Kmpl",
        type: "Hatchback",
        fuel: "Petrol/Diesel/CNG",
        brand: "Tata",
        image: "/b7.jpeg",
        price: "₹6.35 - ₹10.25 Lakh"
      },
      {
        id: 107,
        name: "Hyundai i20",
        mileage: "19-25 Kmpl",
        type: "Hatchback",
        fuel: "Petrol/Diesel",
        brand: "Hyundai",
        image: "/b8.webp",
        price: "₹7.19 - ₹11.83 Lakh"
      },
      {
        id: 108,
        name: "Honda City",
        mileage: "17-24 Kmpl",
        type: "Sedan",
        fuel: "Petrol/Hybrid",
        brand: "Honda",
        image: "/b15.webp",
        price: "₹11.82 - ₹16.34 Lakh"
      },
      {
        id: 109,
        name: "Hyundai Verna",
        mileage: "18-25 Kmpl",
        type: "Sedan",
        fuel: "Petrol/Diesel",
        brand: "Hyundai",
        image: "/b16.jpeg",
        price: "₹10.96 - ₹17.38 Lakh"
      },
      {
        id: 110,
        name: "Tata Harrier",
        mileage: "14-16.8 Kmpl",
        type: "SUV",
        fuel: "Diesel",
        brand: "Tata",
        image: "/b1.webp",
        price: "₹15.49 - ₹26.44 Lakh"
      },
      {
        id: 111,
        name: "Hyundai Alcazar",
        mileage: "14.2-20.4 Kmpl",
        type: "MUV",
        fuel: "Petrol/Diesel",
        brand: "Hyundai",
        image: "/b18.jpeg",
        price: "₹16.77 - ₹21.22 Lakh"
      },
      {
        id: 112,
        name: "Mahindra Scorpio",
        mileage: "15-17 Kmpl",
        type: "SUV",
        fuel: "Diesel",
        brand: "Mahindra",
        image: "/b19.webp",
        price: "₹13.60 - ₹24.54 Lakh"
      },
      {
        id: 113,
        name: "Toyota Innova",
        mileage: "15.6-18.1 Kmpl",
        type: "MPV",
        fuel: "Petrol/Diesel/Hybrid",
        brand: "Toyota",
        image: "/b20.jpeg",
        price: "₹19.13 - ₹29.02 Lakh"
      },
      {
        id: 114,
        name: "Mercedes-Benz EQS",
        mileage: "677 km range",
        type: "Luxury Sedan",
        fuel: "Electric",
        brand: "Mercedes-Benz",
        image: "/b21.jpeg",
        price: "₹1.55 - ₹2.45 Crore"
      },
      {
        id: 115,
        name: "BMW M3",
        mileage: "9-11 Kmpl",
        type: "Sports Sedan",
        fuel: "Petrol",
        brand: "BMW",
        image: "/b22.webp",
        price: "₹1.52 - ₹1.55 Crore"
      },
      {
        id: 116,
        name: "Audi A4",
        mileage: "12-17 Kmpl",
        type: "Luxury Sedan",
        fuel: "Petrol",
        brand: "Audi",
        image: "/b23.jpeg",
        price: "₹43.85 - ₹51.85 Lakh"
      },
      {
        id: 117,
        name: "Jaguar XF",
        mileage: "12-16 Kmpl",
        type: "Luxury Sedan",
        fuel: "Petrol/Diesel",
        brand: "Jaguar",
        image: "/b24.jpeg",
        price: "₹71.60 - ₹76.00 Lakh"
      },
      {
        id: 118,
        name: "Lotus Emira",
        mileage: "10-12 Kmpl",
        type: "Sports Car",
        fuel: "Petrol",
        brand: "Lotus",
        image: "/b25.webp",
        price: "₹2.35 Crore"
      },
      {
        id: 119,
        name: "Tata Nexon EV",
        mileage: "437 km range",
        type: "Electric SUV",
        fuel: "Electric",
        brand: "Tata",
        image: "/b26.jpeg",
        price: "₹14.74 - ₹19.94 Lakh"
      },
      {
        id: 120,
        name: "MG ZS EV",
        mileage: "461 km range",
        type: "Electric SUV",
        fuel: "Electric",
        brand: "MG",
        image: "/b27.jpeg",
        price: "₹21.99 - ₹25.88 Lakh"
      },
      {
        id: 121,
        name: "Hyundai Kona Electric",
        mileage: "452 km range",
        type: "Electric SUV",
        fuel: "Electric",
        brand: "Hyundai",
        image: "/b28.jpeg",
        price: "₹23.84 - ₹24.03 Lakh"
      },
      {
        id: 122,
        name: "Tata Tiago EV",
        mileage: "315 km range",
        type: "Electric Hatchback",
        fuel: "Electric",
        brand: "Tata",
        image: "/b29.jpeg",
        price: "₹8.69 - ₹11.99 Lakh"
      },
      {
        id: 123,
        name: "BYD Atto 3",
        mileage: "521 km range",
        type: "Electric SUV",
        fuel: "Electric",
        brand: "BYD",
        image: "/b30.jpeg",
        price: "₹33.99 - ₹34.49 Lakh"
      },
      {
        id: 124,
        name: "Citroen eC3",
        mileage: "320 km range",
        type: "Electric Hatchback",
        fuel: "Electric",
        brand: "Citroen",
        image: "/b31.jpg",
        price: "₹11.50 - ₹12.43 Lakh"
      },
      {
        id: 125,
        name: "Tata Punch EV",
        mileage: "421 km range",
        type: "Electric SUV",
        fuel: "Electric",
        brand: "Tata",
        image: "/b32.jpg",
        price: "₹10.99 - ₹15.49 Lakh"
      },
      {
        id: 126,
        name: "Volvo XC40 Recharge",
        mileage: "418 km range",
        type: "Electric SUV",
        fuel: "Electric",
        brand: "Volvo",
        image: "/b33.jpeg",
        price: "₹56.90 Lakh"
      },
      {
        id: 127,
        name: "BMW i4",
        mileage: "590 km range",
        type: "Electric Sedan",
        fuel: "Electric",
        brand: "BMW",
        image: "/b34.jpeg",
        price: "₹69.90 - ₹72.50 Lakh"
      },
      {
        id: 128,
        name: "BMW X7",
        mileage: "13-17 Kmpl",
        type: "Luxury SUV",
        fuel: "Petrol/Diesel",
        brand: "BMW",
        image: "/b36.jpeg",
        price: "₹48.50 - ₹52.70 Lakh"
      },
      {
        id: 129,
        name: "BMW i5",
        mileage: "582 km range",
        type: "Electric Sedan",
        fuel: "Electric",
        brand: "BMW",
        image: "/b34.jpeg",
        price: "₹1.20 - ₹1.50 Crore"
      },
      {
        id: 130,
        name: "Kia EV6",
        mileage: "528 km range",
        type: "Electric Crossover",
        fuel: "Electric",
        brand: "Kia",
        image: "/b37.jpeg",
        price: "₹60.95 - ₹65.95 Lakh"
      },
      {
        id: 131,
        name: "Hyundai IONIQ 5",
        mileage: "631 km range",
        type: "Electric SUV",
        fuel: "Electric",
        brand: "Hyundai",
        image: "/b38.jpeg",
        price: "₹44.95 - ₹45.95 Lakh"
      },
      {
        id: 132,
        name: "Mahindra BE6",
        mileage: "415 km range",
        type: "Electric MPV",
        fuel: "Electric",
        brand: "Mahindra",
        image: "/b40.png",
        price: "₹29.15 Lakh"
      },
      {
        id: 133,
        name: "Volkswagen Virtus",
        mileage: "18Kmpl-20Kmpl",
        type: "Sedan",
        fuel: "Petrol",
        brand: "Volkswagen",
        image: "/b41.webp",
        price: "₹12-20 Lakh",
      },
      {
        id: 134,
        name: "Tata Safari",
        mileage: "11-14Kmpl",
        type: "MUV",
        fuel: "Diesel",
        brand: "Tata",
        image: "/b43.jpeg", 
        price: "₹19.99-29 Lakh",
      },
      {
        id: 135,
        name: "Skoda Slavia",
        mileage: "12-16Kmpl",
        type: "Sedan",
        fuel: "Petrol",
        brand: "Skoda",
        image: "/b42.jpeg", 
        price: "₹11.99-18.00 Lakh",
      },
     
    ];


  
    export async function GET(request, { params }) {
      const { filter } = params;
      const searchParams = new URL(request.url).searchParams;
      const type = searchParams.get('type');
    
      const isNumeric = !isNaN(filter);
    
      if (isNumeric) {
        // Filter by ID
        const car = cars.find(car => car.id === parseInt(filter));
        if (!car) {
          return new Response(JSON.stringify({ message: "Car not found" }), { status: 404 });
        }
        return Response.json(car);
      } else {
        // Filter by brand (case-insensitive)
        const brandCars = cars.filter(car => car.brand.toLowerCase() === filter.toLowerCase());
    
        if (type) {
          const filtered = brandCars.filter(car => car.type.toLowerCase() === type.toLowerCase());
          return Response.json(filtered);
        }
    
        return Response.json(brandCars);
      }
    }