import Appointment from '../models/appointmentModel.js';
import User from '../models/userModel.js';

export const addClientAppointment = async (req, res) => {
    try {
        const { doctorId } = req.params;
        const { service, date, time, description } = req.body;
        const userId = req.user?._id; // Ensure userId is present

        if (!userId) {
            return res.status(401).json({ error: "User not authenticated" });
        }

        // Fetch doctorName and location from User model based on doctorId
        const doctor = await User.findById(doctorId);
        if (!doctor) {
            return res.status(404).json({ error: "Doctor not found" });
        }
        const docName = doctor.fullName; // Assuming 'name' is the field that holds the doctor's name
        const doctorLocation = doctor.location; // Assuming 'location' is the field that holds the doctor's location

        const formattedDate = date.split('T')[0];

        // Format time to show only the time part
        const formattedTime = time;

        const newAppointment = new Appointment({
            doctorId,
            doctorName: docName,
            userId,
            service,
            state: 'pending', // Set state to 'pending' by default
            date:formattedDate,
            time: formattedTime,
            description,
            location: doctorLocation
        });

        await newAppointment.save(); // Use await to make sure the appointment is saved before responding
        res.status(200).json({ newAppointment });
    } catch (err) {
        console.error("Error adding appointment:", err);
        res.status(500).json({ error: err.message });
    }
};


export const allClientAppointments = async (req, res) => {
    try {
        const userId = req.user._id;
        let clientAppointments = await Appointment.find({ userId });
        res.status(200).json({ clientAppointments });
    } catch (e) {
        res.send(e.message)
    }
}

export const deleteClientAndDoctorAppointment = async (req, res) => {
    try {
        const { appointmentId } = req.params;
        if (req.user._id) {
            const removeAppointment = await Appointment.findByIdAndDelete(appointmentId)
            res.status(200).json({ message: 'Appointment deleted successfully' })
        } else {
            res.json({ message: 'invalid user' })
        }

    } catch (e) {
        res.send(e.message)
    }
}


export const allDoctorAppointments = async (req, res) => {
    try {
        const doctorId = req.user._id;

        const findDoctorAppointments = await Appointment.find({ doctorId })

        if (findDoctorAppointments) {
            res.status(200).json({ findDoctorAppointments });
        } else {
            res.json({ message: "No Doctor Appointments" })
        }
    } catch (e) {
        res.send(e.message)
    }
}

export const allDoctorRequests = async (req, res) => {
    try {
        const doctorId = req.user._id;

        const findDoctorAppointments = await Appointment.find({ doctorId })

        const fliterRequests = findDoctorAppointments.filter(e => e.state === "pending");
        if (fliterRequests) {
            res.status(200).json({ fliterRequests })
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
            res.status(400).json({ message: "No requests pending" });
        } else {
            res.status(200).json({ updateRequest });
        }
    } catch (e) {
        res.status(500).send({ message: e.message });
    }
}

export const todayAppointment = async (req, res) => {
    try {
      const doctorId = req.user._id;
      const now = new Date();
      const todayString = now.toISOString().slice(0, 10);
      const todayAppointments = await Appointment.find({
        doctorId,
        date: {
          $gte: todayString,
          $lt: todayString + 'T23:59:59.999Z',
        },
      });
      res.status(200).json(todayAppointments);
    } catch (e) {
      res.send(e.message);
    }
  };
