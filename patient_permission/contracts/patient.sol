// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PatientPermissions {
    address public patient;
    mapping(address => bool) public permissions;

    event AccessGranted(address indexed provider);
    event AccessRevoked(address indexed provider);

    constructor() {
        // Set the patient as the contract deployer
        patient = msg.sender;
    }

    // Modifier to ensure only the patient can grant or revoke access
    modifier onlyPatient() {
        require(msg.sender == patient, "Only the patient can perform this action.");
        _;
    }

    // Grant access to a healthcare provider
    function grantAccess(address provider) public onlyPatient {
        permissions[provider] = true;
        emit AccessGranted(provider);
    }

    // Revoke access from a healthcare provider
    function revokeAccess(address provider) public onlyPatient {
        permissions[provider] = false;
        emit AccessRevoked(provider);
    }

    // Check if a provider has access
    function hasAccess(address provider) public view returns (bool) {
        return permissions[provider];
    }
}