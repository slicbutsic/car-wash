// 'use client'

// import { useSearchParams } from 'next/navigation';
// import { useState, useEffect } from 'react';
// // import { useAuth } from '@clerk/nextjs';
// import Navbar from "@/components/Navbar";
// import moment from 'moment-timezone';

// export default function BookingPage() {
//   const searchParams = useSearchParams();
//   // const { userId } = useAuth();
//   const [service, setService] = useState('');
//   const [carType, setCarType] = useState('');
//   const [licensePlate, setLicensePlate] = useState('');
//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('');
//   const [dateError, setDateError] = useState('');

//   useEffect(() => {
//     const serviceParam = searchParams.get('service');
//     if (serviceParam) setService(serviceParam);
//   }, [searchParams]);

//   const isValidDate = (dateString) => {
//     const selectedDate = moment.tz(dateString, 'Australia/Brisbane');
//     const now = moment().tz('Australia/Brisbane');

//     if (selectedDate.isBefore(now, 'day')) {
//       setDateError('Please select a future date');
//       return false;
//     }
//     if (selectedDate.day() === 0) {
//       setDateError('Bookings are not available on Sundays');
//       return false;
//     }
//     setDateError('');
//     return true;
//   };

//   const handleDateChange = (e) => {
//     const newDate = e.target.value;
//     if (isValidDate(newDate)) {
//       setDate(newDate);
//       setTime(''); // Reset time when date changes
//     } else {
//       setDate('');
//     }
//   };

//   const generateTimeOptions = () => {
//     const options = [];
//     const now = moment().tz('Australia/Brisbane');
//     const selectedDate = moment.tz(date, 'Australia/Brisbane');
//     const isToday = selectedDate.isSame(now, 'day');

//     let startHour = 8;
//     let startMinute = 0;

//     if (isToday) {
//       startHour = Math.max(8, now.hour());
//       startMinute = now.minute() < 30 ? 30 : 0;
//       startHour += startMinute === 0 ? 1 : 0;
//     }

//     for (let hour = startHour; hour < 17; hour++) {
//       for (let minute = (hour === startHour ? startMinute : 0); minute < 60; minute += 30) {
//         if (hour === 16 && minute === 30) continue;
//         const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
//         options.push(<option key={time} value={time}>{time}</option>);
//       }
//     }
//     return options;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const selectedDateTime = moment.tz(`${date} ${time}`, 'YYYY-MM-DD HH:mm', 'Australia/Brisbane');
//     const now = moment().tz('Australia/Brisbane');

//     if (selectedDateTime.isBefore(now)) {
//       setDateError('Please select a future date and time');
//       return;
//     }

//     console.log('Booking submitted:', { userId, service, carType, licensePlate, date, time });
//     // Implement your booking logic here
//   };

//   return (
//     <div className="w-full">
//       <Navbar />
//       <div className="container mx-auto p-8">
//         <h1 className="text-3xl font-bold mb-8">Book Your Service</h1>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block mb-2">Selected Service</label>
//             <input type="text" value={service} readOnly className="w-full p-2 border rounded" />
//           </div>
//           <div>
//             <label className="block mb-2">Car Type</label>
//             <select
//               value={carType}
//               onChange={(e) => setCarType(e.target.value)}
//               required
//               className="w-full p-2 border rounded"
//             >
//               <option value="">Select Car Type</option>
//               <option value="Hatchback & Sedan">Hatchback & Sedan</option>
//               <option value="Wagon & Mid Size SUV">Wagon & Mid Size SUV</option>
//               <option value="Large SUV & UTE">Large SUV & UTE</option>
//               <option value="Van & Extra Large Vehicle">Van & Extra Large Vehicle</option>
//             </select>
//           </div>
//           <div>
//             <label className="block mb-2">License Plate</label>
//             <input
//               type="text"
//               value={licensePlate}
//               onChange={(e) => setLicensePlate(e.target.value)}
//               required
//               className="w-full p-2 border rounded"
//               placeholder="Enter license plate"
//             />
//           </div>
//           <div>
//             <label className="block mb-2">Date</label>
//             <input
//               type="date"
//               value={date}
//               onChange={handleDateChange}
//               required
//               className="w-full p-2 border rounded"
//               min={moment().tz('Australia/Brisbane').format('YYYY-MM-DD')}
//               max={moment().tz('Australia/Brisbane').add(1, 'year').format('YYYY-MM-DD')}
//             />
//             {dateError && <p className="text-red-500 mt-1">{dateError}</p>}
//           </div>
//           <div>
//             <label className="block mb-2">Time</label>
//             <select
//               value={time}
//               onChange={(e) => setTime(e.target.value)}
//               required
//               className="w-full p-2 border rounded"
//               disabled={!date}
//             >
//               <option value="">Select Time</option>
//               {date && generateTimeOptions()}
//             </select>
//           </div>
//           <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
//             Confirm Booking
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
