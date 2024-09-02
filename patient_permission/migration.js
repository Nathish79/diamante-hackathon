const patient_permissionsientPermissions = artifacts.require("patient_permissions");

module.exports = function(deployer) {
  deployer.deploy(patient_permissions);
};