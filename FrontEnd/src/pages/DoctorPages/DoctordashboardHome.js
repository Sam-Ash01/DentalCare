import React, { useState } from 'react';
import Greeting from '../../Component/Greeting';
import Appointment from '../../Component/Appointment';
import MsgCard from '../../Component/MsgCard';

const DoctordashboardHome = () => {
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

    const messages = [
        {
            id: 1,
            sender: 'John Doe',
            profilePicture: '',
            content: 'Hello there! How are you doing today?',
            time: '11:00pm'
        },
        {
            id: 2,
            sender: 'Jane Smith',
            profilePicture: '',
            content: 'Hey! Just checking in. Do you have the latest updates?',
            time: '11:00pm'

        },
        // Add more messages as needed
    ];


    const handleDelete = (id) => {
        setAppointments(appointments.filter(appointment => appointment.id !== id));
    };

    return (
        <div>
            <Greeting name={'Chris'} welcome={"Hello Dr."} text={'Here’s Your Summary for Today'} />
            <div className="p-2">
                <h2 className="text-2xl font-bold mb-2">Upcoming Appointments</h2>
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
                        {appointments.map(appointment => (
                            <Appointment
                                key={appointment.id}
                                profilePicture={appointment.profilePicture}
                                name={appointment.name}
                                location={appointment.location}
                                date={appointment.date}
                                time={appointment.time}
                                status={appointment.status}
                                onDelete={() => handleDelete(appointment.id)}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="p-2 flex flex-col items-start justify-start">
                <h2 className="text-2xl font-bold mb-6">New Messages</h2>
                <div>
                    {messages.map(message => (
                        <MsgCard
                            key={message.id}
                            sender={message.sender}
                            profilePicture={message.profilePicture}
                            content={message.content}
                            time={message.time}
                        />
                    ))}
                </div>
            </div>

        </div>
    );
};

export default DoctordashboardHome;
