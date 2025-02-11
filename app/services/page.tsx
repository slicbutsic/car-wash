import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faCarSide, faTruckPickup, faVanShuttle } from "@fortawesome/free-solid-svg-icons";
import Navbar from "@/components/Navbar";

// Define types for the service details
interface Services {
  [key: string]: {
    duration: string;
    prices?: {
      [key: string]: number;
    };
    price?: number;
  };
}

export default function Services() {
  // Define the services object
  const services: Services = {
    "Basic Outside Wash": {
      duration: "25 minutes",
      prices: {
        "Hatchback & Sedan": 30,
        "Wagon & Mid Size SUV": 40,
        "Large SUV & UTE": 45,
        "Van & Extra Large Vehicle": 55,
      },
    },
    "Basic Inside/Out Detailing": {
      duration: "55 minutes",
      prices: {
        "Hatchback & Sedan": 60,
        "Wagon & Mid Size SUV": 65,
        "Large SUV & UTE": 70,
        "Extra Large SUV & Van": 80,
      },
    },
    "Mega Wash (Inside/Out Clean & Dry)": {
      duration: "1h 15 minutes",
      prices: {
        "Hatchback & Sedan": 100,
        "Wagon & Mid Size SUV": 110,
        "Large SUV & UTE": 120,
        "Extra Large SUV & Van": 139,
      },
    },
    "Full Detailing (Seats & Floors + Boost Shampooed)": {
      duration: "2h 30 minutes",
      prices: {
        "Hatchback & Sedan": 300,
        "Wagon & Mid Size SUV": 350,
        "Large SUV & UTE": 400,
        "Van & Extra Large SUV": 450,
      },
    },
  };

  // Inline style for forcing small icon size
  const iconStyle = {
    width: '17px',
    height: '17px',
    fontSize: '12px',
    display: 'inline-block',
  };

  return (
    <div className="w-full">
      {/* Navbar */}
      <div className="w-full md:absolute md:top-0 md:left-0 z-10 sm:relative">
        <Navbar />
      </div>

      {/* Placeholder for the image */}
      <div className="relative w-full h-[40vh] md:h-[50vh] bg-gray-300">
        {/* This will represent the image */}
        <div className="absolute inset-0 bg-gray-400 opacity-50"></div>

        {/* Centered Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-5xl md:text-5xl tracking-widest">Services</h1>
        </div>
      </div>

      {/* Service List */}
      <div className="container mx-auto p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {Object.entries(services).map(([serviceName, serviceDetails]) => (
          <div key={serviceName} className="p-6 border rounded-lg shadow-lg bg-white">
            <div className="flex justify-between mb-4">
              <h2 className="text-xl tracking-wide">{serviceName}</h2>
              <span className="font-medium">{serviceDetails.duration}</span>
            </div>
            {serviceDetails.prices ? (
              // If it's an object with vehicle types and prices
              <div className="space-y-4">
                {Object.entries(serviceDetails.prices).map(([vehicleType, price]) => {
                  let icon;

                  if (vehicleType.includes("Hatchback & Sedan")) {
                    icon = (
                      <span style={iconStyle}>
                        <FontAwesomeIcon icon={faCar} className="text-gray-500" />
                      </span>
                    );
                  } else if (vehicleType.includes("Wagon & Mid Size SUV")) {
                    icon = (
                      <span style={iconStyle}>
                        <FontAwesomeIcon icon={faCarSide} className="text-gray-500" />
                      </span>
                    );
                  } else if (vehicleType.includes("Large SUV & UTE")) {
                    icon = (
                      <span style={iconStyle}>
                        <FontAwesomeIcon icon={faTruckPickup} className="text-gray-500" />
                      </span>
                    );
                  } else if (vehicleType.includes("Van")) {
                    icon = (
                      <span style={iconStyle}>
                        <FontAwesomeIcon icon={faVanShuttle} className="text-gray-500" />
                      </span>
                    );
                  }

                  return (
                    <div key={vehicleType} className="flex justify-between items-center p-4 border-b">
                      <span className="font-medium flex items-center space-x-2">
                        {icon}
                        <span>{vehicleType}</span>
                      </span>
                      <span>${price}</span>
                    </div>
                  );
                })}
              </div>
            ) : (
              // If it's a single service object
              <div className="p-4 border-b">
                <div className="flex justify-between">
                  <span className="font-medium">${serviceDetails.price}</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
