
import React, { useState } from 'react';

function ContactCreate({ activeForm, loggedInUser, onToggleForm, onCreateContact }) {
    const [contactName, setContactName] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactAddress, setContactAddress] = useState('');
    const [contactNumber, setContactNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();


        if (!contactName || !contactEmail || !contactAddress || !contactNumber) {
            alert('Please enter all contact details.');
            return;
        }


        if (!isValidEmail(contactEmail)) {
            alert('Please enter a valid email address.');
            return;
        }


        const newContact = {
            name: contactName,
            email: contactEmail,
            address: contactAddress,
            number: contactNumber,
        };


        onCreateContact(newContact);


        setContactName('');
        setContactEmail('');
        setContactAddress('');
        setContactNumber('');


        onToggleForm('some-other-section');
    };

    const isValidEmail = (email) => {

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <div id="contact-create-section" className={`form-section ${activeForm === 'contact-create-section' ? 'active' : ''}`}>
            <h1>Create Contact</h1>
            <form onSubmit={handleSubmit}>

                <label>Name of the Person</label>
                <input type="text" value={contactName} placeholder="Enter first name" onChange={(e) => setContactName(e.target.value)} required />
                <label>Email</label>
                <input type="text" value={contactEmail} placeholder="Enter email" onChange={(e) => setContactEmail(e.target.value)} required />
                <label>Address</label>
                <input type="text" value={contactAddress} placeholder="Enter address" onChange={(e) => setContactAddress(e.target.value)} required />
                <label>Contact Number</label>
                <input type="number" value={contactNumber} placeholder="Enter contact number" onChange={(e) => setContactNumber(e.target.value)} required />

                <button type="submit">Add Contact</button>
            </form>
        </div>
    );
}

export default ContactCreate;
