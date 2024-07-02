import React, { useState, useEffect, useContext } from 'react';
import Greeting from '../../Component/Greeting';
import { TokenContext } from '../../Component/TokenProvider';


function ClientdashboardHome() {
  const token = useContext(TokenContext)
  console.log(token.token,'token');

  const [selectedService, setSelectedService] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredDentists, setFilteredDentists] = useState([]);

  const services = [
    { name: 'Orthodontics', image: '/Orthodontics.png' },
    { name: 'Oral Hygiene', image: '/Oral Hygiene.png' },
    { name: 'Cosmetic Dentistry', image: '/Cosmetic Dentistry.png' },
    { name: 'Dental Treatment', image: '/Dental Treatment.png' },
  ];

  const dentists = [
    { name: 'Joseph Brostito', location: 'Damascus', services: ['Orthodontics', 'Oral Hygiene'], image: '/DoctorAvatar.png' },
    { name: 'Sarah Johnson', location: 'New York', services: ['Cosmetic Dentistry', 'Dental Treatment'], image: '/DoctorAvatar.png' },
    { name: 'Michael Smith', location: 'Los Angeles', services: ['Orthodontics', 'Cosmetic Dentistry'], image: '/DoctorAvatar.png' },
    { name: 'Emma Davis', location: 'Chicago', services: ['Oral Hygiene', 'Dental Treatment'], image: '/DoctorAvatar.png' },
  ];

  const handleServiceClick = (service) => {
    setSelectedService(service.name);
  };

  useEffect(() => {
    const filtered = dentists.filter(dentist =>
      (searchQuery === '' || dentist.name.toLowerCase().startsWith(searchQuery.toLowerCase()) || dentist.location.toLowerCase().startsWith(searchQuery.toLowerCase())) &&
      (selectedService === null || dentist.services.includes(selectedService))
    );
    setFilteredDentists(filtered);
  }, [searchQuery, selectedService]);

  return (
    <div>
      <Greeting name={'Sam'} welcome={"Hello "} text={'Let’s help you book an appointment Choose a service to find dentist '} />
      <div className="p-2">
        <h2 className="text-2xl font-bold mb-2">Services</h2>
        <div className="grid grid-cols-4 gap-4">
          {services.map(service => (
            <div
              key={service.name}
              className={`p-4 bg-white rounded-2xl shadow-lg text-center border-2 border-solid cursor-pointer transition-all duration-300 transform ${selectedService === service.name ? 'border-[#55CDF1] text-[#55CDF1]' : 'border-[#FFFFFF]'} hover:border-[#55CDF1] hover:text-[#55CDF1] hover:scale-105`}
              onClick={() => handleServiceClick(service)}
            >
              <img src={service.image} alt={service.name} className="w-42 mx-auto mb-2" />
              <p className="text-lg font-bold">{service.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="p-2 w-full">
        <div className="flex items-center justify-between mb-6 w-full">
          <h2 className="text-2xl font-bold">Dentists</h2>
          <div className="relative flex items-center">
            <img src={"/img13.png"} alt="search icon" className="absolute left-2" />
            <input
              type='text'
              placeholder='Search for dentist'
              className='outline-none pl-10 placeholder:text-black border-[#F2F1FE] border-b-black border-2 border-solid w-60 bg-[#F2F1FE]'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full">
          {(searchQuery || selectedService ? filteredDentists : dentists).map((dentist, index) => (
            <div key={index} className="flex items-center mb-4 p-4 bg-white shadow-lg rounded-lg w-full">
              <img src={dentist.image} alt={dentist.name} className="w-16 h-16 rounded-full mr-4" />
              <div className="flex-grow">
                <h3 className="text-lg font-bold">Dr. {dentist.name}</h3>
                <div className='flex items-center'>
                  <img src="/img5.png" alt="location" className="w-3 h-4 mr-2 inline-block" />
                  <p className="text-gray-600 inline-block">{dentist.location}</p>
                </div>
                <p className="text-gray-600 inline-block">Services: {dentist.services.join(', ')}</p>
              </div>
              <button className="ml-auto bg-[#FFFFFF] text-[#55CDF1] border-[#55CDF1] border-solid border-2 transition-all duration-500 hover:bg-[#55CDF1] hover:text-[#FFFFFF] hover:border-[#55CDF1] px-4 py-2 rounded-3xl">Book an appointment</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ClientdashboardHome;
