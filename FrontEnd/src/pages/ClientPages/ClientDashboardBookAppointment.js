import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const ClientDashboardBookAppointment = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialDoctorName = queryParams.get('doctor') || '';
  const initialService = queryParams.get('service') || 'Orthodontics'; // Default value if service is not provided

  const [doctorName, setDoctorName] = useState(initialDoctorName);
  const [selectedService, setSelectedService] = useState(initialService);
  const [availableDates, setAvailableDates] = useState([]);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  // Simulating fetch data from backend API
  useEffect(() => {
    // Fake data for demonstration
    const fakeDates = [
      '2024-07-10',
      '2024-07-11',
      '2024-07-12',

    ];

    const fakeTimes = [
      '09:00 AM',
      '10:00 AM',
      '11:00 AM',
      '12:00 PM',
      '01:00 PM',
      '02:00 PM',
    ];

    const fetchDates = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(fakeDates);
        }, 1000);
      });
    };

    const fetchTimes = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(fakeTimes);
        }, 500);
      });
    };

    fetchDates().then((data) => {
      setAvailableDates(data);
    });

    fetchTimes().then((data) => {
      setAvailableTimes(data);
    });
  }, []);

  const handleDateSelection = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can optionally prevent form submission if doctorName and selectedService are not allowed to change
    // Example: console.log("Form submitted with:", doctorName, selectedService);
  };

  return (
    <div className="min-h-screen flex items-center justify-start bg-[#F2F1FE]">
      <div className="w-full max-w-[70%] bg-[#F2F1FE] rounded-lg overflow-hidden">
        <div className="flex items-center justify-between bg-[#F2F1FE] p-4">
          <Link to="/ClientdashboardHome" className="flex items-center text-gray-700 hover:text-[#55CDF1]">
            <FaArrowLeft className="h-6 w-6" />
            <span className="font-semibold text-xl ml-2">Back</span>
          </Link>
        </div>
        <div className="p-8 bg-gray-100">
          <h1 className="font-bold text-3xl mb-6">Book an Appointment</h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <label htmlFor="doctorName" className="block text-sm font-medium text-gray-700">Doctor's Name</label>
                <input
                  id="doctorName"
                  type="text"
                  value={doctorName}
                  readOnly // Make the input read-only
                  className="px-3 py-2 w-full bg-gray-200 border border-gray-300 rounded-md focus:outline-none"
                />
              </div>
              <div className="relative">
                <label htmlFor="services" className="block text-sm font-medium text-gray-700">Services</label>
                <select
                  id="services"
                  value={selectedService}
                  disabled // Disable select to prevent changes
                  className="px-3 py-2 w-full bg-gray-200 border border-gray-300 rounded-md focus:outline-none"
                >
                  <option value="Orthodontics">Orthodontics</option>
                  <option value="Oral Hygiene">Oral Hygiene</option>
                  <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
                  <option value="Dental Treatment">Dental Treatment</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="appointmentDate" className="block text-sm font-medium text-gray-700 mb-1">Select Date</label>
              <div className="flex space-x-2 mb-2">
                {availableDates.map((date, index) => (
                  <button
                    key={index}
                    className={`px-3 py-2 bg-[#55CDF1] border border-[#55CDF1] text-[#55CDF1] rounded-md hover:bg-[#55CDF1] hover:text-white transition duration-200 ${
                      selectedDate === date ? 'bg-[#55CDF1] text-white' : 'bg-white'
                    }`}
                    onClick={() => handleDateSelection(date)}
                  >
                    {date}
                  </button>
                ))}
              </div>
              <input
                id="appointmentDate"
                type="hidden"
                value={selectedDate}
                className="px-3 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-[#55CDF1]"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="appointmentTime" className="block text-sm font-medium text-gray-700 mb-1">Select Time</label>
              <div className="flex space-x-2 mb-2">
                {availableTimes.map((time, index) => (
                  <button
                    key={index}
                    className={`px-3 py-2 bg-[#55CDF1] border border-[#55CDF1] text-[#55CDF1] rounded-md hover:bg-[#55CDF1] hover:text-white transition duration-200 ${
                      selectedTime === time ? 'bg-[#55CDF1] text-white' : 'bg-white'
                    }`}
                    onClick={() => handleTimeSelection(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
              <input
                id="appointmentTime"
                type="hidden"
                value={selectedTime}
                className="px-3 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-[#55CDF1]"
              />
            </div>
            <div className="relative">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                id="description"
                placeholder="Enter Description"
                className="px-3 py-2 w-full h-20 border border-gray-300 rounded-md focus:outline-none focus:border-[#55CDF1]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#55CDF1] w-full text-white py-2 px-4 rounded-md hover:bg-[#3BA4D8] transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboardBookAppointment;
