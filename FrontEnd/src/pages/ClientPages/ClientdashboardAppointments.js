import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import Appointment from '../../Component/Appointment';
import { TokenContext } from "../../Component/TokenProvider";

function ClientdashboardAppointments() {
    const {setToken} = useContext(TokenContext)
    const [appointments, setAppointments] = useState([
        {
            id: 1,
            profilePicture: '',
            name: 'John Doe',
            location: 'New York, NY',
            date: '2023-07-01',
            time: '10:00 AM',
            status: 'Approved'
        },
        {
            id: 2,
            profilePicture: '',
            name: 'Jane Smith',
            location: 'Los Angeles, CA',
            date: '2023-07-02',
            time: '2:00 PM',
            status: 'Pending'
        }
    ]);

    const handleDelete = (id) => {
        setAppointments(appointments.filter(appointment => appointment.id !== id));
    };

    return (
        <div>
            <div className="p-2">
                <h2 className="text-2xl font-bold mb-2">My Appointments</h2>
                <div className="overflow-x-auto">
                    <div className="min-w-full divide-y divide-gray-200">
                        <div className="grid grid-cols-6 gap-4 p-2 bg-gray-100 rounded-t-md mt-4">
                            <div></div>
                            <div className="text-left text-[#79747E] font-semibold">Name</div>
                            <div className="text-left text-[#79747E] font-semibold">Location</div>
                            <div className="text-left text-[#79747E] font-semibold">Date</div>
                            <div className="text-left text-[#79747E] font-semibold">Time</div>
                            <div className="text-left text-[#79747E] font-semibold">Status</div>
                            <div></div>
                        </div>
                        {appointments.map((appointment, index) => (
                            <motion.div
                                key={appointment.id}
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Appointment
                                    profilePicture={appointment.profilePicture}
                                    name={appointment.name}
                                    location={appointment.location}
                                    date={appointment.date}
                                    time={appointment.time}
                                    status={appointment.status}
                                    onDelete={() => handleDelete(appointment.id)}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ClientdashboardAppointments;