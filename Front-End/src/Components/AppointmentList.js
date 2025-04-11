import React, { useState } from "react";

const AppointmentList = ({
	appointments,
	deleteAppointment,
	editAppointment,
	clearAppointments,
}) => {
	const [editedIndex, setEditedIndex] = useState(null);
	const [editedName, setEditedName] = useState("");
	const [editedDate, setEditedDate] = useState("");

	const handleEdit = (index) => {
		setEditedIndex(index);
		setEditedName(appointments[index].firstName);
		setEditedDate(appointments[index].date);
	};

	const handleSaveEdit = (index) => {
		editAppointment(index, editedName, editedDate);
		setEditedIndex(null);
		setEditedName("");
	};

	const handleCancelEdit = () => {
		setEditedIndex(null);
		setEditedName("");
	};

	return (
		<div className="container">
			<h1>Appointment List</h1>
			<table id="list">
				<thead>
					<tr>
						<th>ID</th>
						<th>First Name</th>
						<th>Middle Name</th>
						<th>Last Name</th>
						<th>Father's Name</th>
						<th>Email</th>
						<th>Age</th>
						<th>Contact</th>
						<th>Consent Department</th>
						<th>Address</th>
						<th>Date</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{appointments.map((appointment, index) => (
						<tr key={index}>
							<td>{index + 1}</td>
							<td>
								{editedIndex === index ? (
									<input
										type="text"
										value={editedName}
										onChange={(e) =>
											setEditedName(e.target.value)
										}
									/>
								) : (
									appointment.firstName
								)}
							</td>
							<td>{appointment.middleName}</td>
							<td>{appointment.lastName}</td>
							<td>{appointment.fatherName}</td>
							<td>{appointment.email}</td>
							<td>{appointment.age}</td>
							<td>{appointment.contact}</td>
							<td>{appointment.consentDept}</td>
							<td>{appointment.address}</td>
							<td>
								{editedIndex === index ? (
									<input
										type="date"
										value={editedDate}
										onChange={(e) =>
											setEditedDate(e.target.value)
										}
									/>
								) : (
									appointment.date
								)}
							</td>
							<td>
								{editedIndex === index ? (
									<>
										<button
											onClick={() =>
												handleSaveEdit(index)
											}
										>
											Save
										</button>
										<button onClick={handleCancelEdit}>
											Cancel
										</button>
									</>
								) : (
									<>
										<button
											onClick={() => handleEdit(index)}
										>
											Edit
										</button>
										<button
											onClick={() =>
												deleteAppointment(index)
											}
										>
											Delete
										</button>
									</>
								)}
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<button onClick={clearAppointments}>
				Clear All Appointments
			</button>
		</div>
	);
};

export default AppointmentList;
