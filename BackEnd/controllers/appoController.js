import Appointment from '../models/appointmentModel.js';
import User from '../models/userModel.js';

export const addClientAppointment = async (req, res) => {
        try {
        const { doctorId } = req.params;
    const { service, state, date, time, description, location } = req.body;
    const userId = req.user._id;
    
    const newAppointment = new Appointment({
        doctorId,
        userId,
        service,
        state,
        date,
        time,
        description,
        location
    })
    newAppointment.save();
    res.status(200).json({ newAppointment });
} catch (e) {
    res.send(err.message)
}
}

export const allClientAppointments = async (req, res) => {
    try{
        const userId = req.user._id;
    let clientAppointments = await Appointment.find({ userId });
    res.status(200).json({ clientAppointments });
} catch (e) {
    res.send(e.message)
}
}

export const deleteClientAppointment = async (req, res) => {
    try {
        const {appointmentId} = req.params;
        const checkAppointment = await Appointment.findOne({ appointmentId })
        if(checkAppointment){
        if(req.user._id){
            const removeAppointment = await Appointment.findByIdAndDelete( appointmentId )
            res.status(200).json({ message: 'Appointment deleted successfully' })
        }else{
            res.json({ message: 'invalid user' })
        }
    }else{
        res.status(404).json({ message: 'appointment not found' })
    }
    } catch (e) {
        res.send(e.message)
    }
}


export const allDoctorAppointments = async (req, res) => {
    try{
        const doctorId = req.user._id;

        const findDoctorAppointments = await Appointment.find({ doctorId })
        
        if (findDoctorAppointments){
            res.status(200).json({findDoctorAppointments});
        } else {
            res.json({ message: "No Doctor Appointments"})
        }
    } catch (e) {
        res.send(e.message)
    }
}

export const allDoctorRequests = async (req, res) => {
    try{
        const doctorId = req.user._id;
        
        const findDoctorAppointments = await Appointment.find({ doctorId })
        
        const fliterRequests =  findDoctorAppointments.filter(e => e.state === "pending");
        if (fliterRequests){
            res.status(200).json({fliterRequests})
        } else {
            res.json({ message: "No requests pending" })
        }
    } catch (e) {
        res.send(e.message);
    }
}

export const updateDoctorRequestsState = async (req, res) => {
        const requestId = req.params.requestId;
        const newState = req.body.state
    try {
        const updateRequest = await Appointment.findByIdAndUpdate(requestId, { $set: { state: newState } }, { new: true });

        if (!updateRequest) {
            res.status(200).json({ message: "No requests pending" });
        } else {
            res.status(200).json({ updateRequest });
        }
    } catch (e) {
        res.status(500).send({ message: e.message });
    }
}