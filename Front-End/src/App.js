import React, { useState } from "react";
import "./App.css";
import AppointmentForm from "./Components/AppointmentForm";
import AppointmentList from "./Components/AppointmentList";

const App = () => {
	const [appointments, setAppointments] = useState([]);
	const [showAppointments, setShowAppointments] = useState(false);

	const addAppointment = (appointment) => {
		setAppointments([...appointments, appointment]);
	};

	const deleteAppointment = (index) => {
		const deletedAppointments = [...appointments];
		deletedAppointments.splice(index, 1);
		setAppointments(deletedAppointments);
	};

	const editAppointment = (index, editedName, editedDate) => {
		const updatedAppointments = [...appointments];
		updatedAppointments[index] = {
			...updatedAppointments[index],
			name: editedName,
			date: editedDate,
		};
		setAppointments(updatedAppointments);
	};

	const clearAppointments = () => {
		setAppointments([]);
	};

	const handleCheckAppointments = () => {
		setShowAppointments(true);
	};

	const handleBackToForm = () => {
		setShowAppointments(false);
	};

	return (
		<div>
			<h1>Book Your Appointment!</h1>
			{!showAppointments ? (
				<AppointmentForm addAppointment={addAppointment} />
			) : (
				<AppointmentList
					appointments={appointments}
					deleteAppointment={deleteAppointment}
					clearAppointments={clearAppointments}
					editAppointment={editAppointment}
				/>
			)}
			{!showAppointments && (
				<button onClick={handleCheckAppointments}>Check Appointments</button>
			)}
			{showAppointments && (
				<button onClick={handleBackToForm}>Back to Form</button>
			)}
		</div>
	);
};

export default App;
