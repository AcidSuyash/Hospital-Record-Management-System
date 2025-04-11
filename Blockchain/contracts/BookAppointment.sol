// SPDX-License-Identifier: MIT

pragma solidity ^0.8.2;

contract BookAppointment {
    struct RequiredDetails {
        string firstName;
        string middleName;
        string lastName;
        string fathersName;
        string emailAddress;
        uint age;
        string phoneNumber;
        string addressofPatient;
        string concernedDepartment;
    }

    mapping(address => RequiredDetails) public Appointment;

    event appointmentCreated(
        address indexed user,
        bytes32 indexed blockHash
    );

    function createAppointment(
        string memory first,
        string memory middle,
        string memory last,
        string memory father,
        string memory mail,
        uint age,
        string memory phone,
        string memory location,
        string memory department
    ) public {
        Appointment[msg.sender] = RequiredDetails(
            first,
            middle,
            last,
            father,
            mail,
            age,
            phone,
            location,
            department
        );

        emit appointmentCreated(msg.sender, blockhash(block.number - 1));
    }
}
