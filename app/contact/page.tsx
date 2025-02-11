import Navbar from "@/components/Navbar";
import { MapPinHouse, Phone, Clock } from "lucide-react";

export default function Contact() {
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
          <h1 className="text-white text-5xl md:text-5xl tracking-widest font-bold">Contact Us</h1>
        </div>
      </div>

      {/* Contact Information */}
      <div className="container mx-auto py-12 px-4 text-center space-y-8">
        {/* Address */}
        <div className="flex flex-col items-center space-y-2">
          <MapPinHouse size={40} className="text-gray-600" />
          <span className="text-lg font-medium text-gray-700">
            97 Flockton St, Everton Park QLD 4053
          </span>
        </div>

        {/* Phone Number */}
        <div className="flex flex-col items-center space-y-2">
          <Phone size={40} className="text-gray-600" />
          <span className="text-lg font-medium text-gray-700">0435 903 054</span>
        </div>

        {/* Opening Hours */}
        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Opening Hours</h2>
          <div className="flex items-center space-x-2">
            <Clock size={40} className="text-gray-600" />
            <span className="text-lg font-medium text-gray-700">
              Monday - Saturday: 8:00 AM - 5:00 PM
            </span>
          </div>
        </div>
      </div>

      {/* Google Maps */}
      <div style={{ width: '100%', height: 'auto' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3542.379383782813!2d152.99464797474533!3d-27.39509121353012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9157937dcbb9eb%3A0xd3d68cdbec8376b6!2s97%20Flockton%20St%2C%20McDowall%20QLD%204053!5e0!3m2!1sen!2sau!4v1739264434451!5m2!1sen!2sau"
          width="100%"
          height="350"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
