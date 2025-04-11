import React, { useState } from "react";

const AppointmentForm = ({ addAppointment }) => {
	const [firstName, setFirstName] = useState("");
	const [middleName, setMiddleName] = useState("");
	const [lastName, setLastName] = useState("");
	const [fatherName, setFatherName] = useState("");
	const [email, setEmail] = useState("");
	const [age, setAge] = useState("");
	const [contact, setContact] = useState("");
	const [address, setAddress] = useState("");
	const [consentDept, setConsentDept] = useState("");
	const [date, setDate] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		addAppointment({ firstName, middleName, lastName, fatherName, email, age, contact, address, consentDept, date });
		setFirstName("");
		setMiddleName("");
		setLastName("");
		setFatherName("");
		setEmail("");
		setAge("");
		setContact("");
		setAddress("");
		setConsentDept("");
		setDate("");
	};

	return (
		<div className="container">
			<form onSubmit={handleSubmit}>
				<div className="row">
					<div className="col-25">
						<label htmlFor="firstname">First Name</label>
					</div>
					<div className="col-75">
						<input
							type="text"
							id="firstname"
							name="firstname"
							placeholder="Your first name.."
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
							required
						/>
					</div>
				</div>
                <div className="row">
					<div className="col-25">
						<label htmlFor="middlename">Middle Name</label>
					</div>
					<div className="col-75">
						<input
							type="text"
							id="middlename"
							name="middlename"
							placeholder="Your middle name.."
							value={middleName}
							onChange={(e) => setMiddleName(e.target.value)}
							required
						/>
					</div>
				</div>
                <div className="row">
					<div className="col-25">
						<label htmlFor="lastname">Last Name</label>
					</div>
					<div className="col-75">
						<input
							type="text"
							id="lastname"
							name="lastname"
							placeholder="Your last name.."
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
							required
						/>
					</div>
				</div>
                <div className="row">
					<div className="col-25">
						<label htmlFor="fathername">Father's Name</label>
					</div>
					<div className="col-75">
						<input
							type="text"
							id="fathername"
							name="fathername"
							placeholder="Father's name.."
							value={fatherName}
							onChange={(e) => setFatherName(e.target.value)}
							required
						/>
					</div>
				</div>
                <div className="row">
					<div className="col-25">
						<label htmlFor="email">Email</label>
					</div>
					<div className="col-75">
						<input
							type="email"
							id="email"
							name="email"
							placeholder="Your email address.."
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>
				</div>
                <div className="row">
					<div className="col-25">
						<label htmlFor="age">Age</label>
					</div>
					<div className="col-75">
						<input
							type="number"
							id="age"
							name="age"
							placeholder="Your age.."
							value={age}
							onChange={(e) => setAge(e.target.value)}
							required
						/>
					</div>
				</div>
                <div className="row">
					<div className="col-25">
						<label htmlFor="contact">Contact</label>
					</div>
					<div className="col-75">
						<input
							type="text"
							id="contact"
							name="contact"
							placeholder="Your contact number.."
							value={contact}
							onChange={(e) => setContact(e.target.value)}
							required
						/>
					</div>
				</div>
                <div className="row">
					<div className="col-25">
						<label htmlFor="address">Address</label>
					</div>
					<div className="col-75">
						<textarea
							id="address"
							name="address"
							placeholder="Your address.."
							value={address}
							onChange={(e) => setAddress(e.target.value)}
							required
						></textarea>
					</div>
				</div>
                <div className="row">
					<div className="col-25">
						<label htmlFor="consentDept">Consent Department</label>
					</div>
					<div className="col-75">
						<select
							id="consentDept"
							name="consentDept"
							value={consentDept}
							onChange={(e) => setConsentDept(e.target.value)}
							required
						>
							<option value="">Select department...</option>
							<option value="Cardiology">Cardiology</option>
							<option value="Dermatology">Dermatology</option>
							<option value="Gynecology">Gynecology</option>
							<option value="Neurology">Neurology</option>
							<option value="Endocrinology">Endocrinology</option>
							<option value="Gastroenterology">Gastroenterology</option>
							<option value="ENT">ENT</option>
						</select>
					</div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="date">Appointment Date: </label>
					</div>
					<div className="col-75">
						<input
							id="date"
							name="date"
							placeholder="Select date.."
							type="date"
							value={date}
							onChange={(e) => setDate(e.target.value)}
							required
						/>
					</div>
				</div>
				<div className="row">
					<input type="submit" value="Add Appointment" />
				</div>
			</form>
		</div>
	);
};

export default AppointmentForm;
