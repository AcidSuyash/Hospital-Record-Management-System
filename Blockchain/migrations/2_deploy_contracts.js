
const AppointmentRegistry = artifacts.require("BookAppointment");

module.exports = function(deployer) {
  deployer.deploy(AppointmentRegistry);
};
