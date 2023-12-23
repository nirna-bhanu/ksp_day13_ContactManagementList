
import React, { useState } from 'react';


function ContactList({ contacts, onUpdateContact, onDeleteContact }) {
    const [selectedContact, setSelectedContact] = useState(null);

    const handleContactClick = (contact) => {
        setSelectedContact(contact);
    };

    const handleUpdateClick = (updatedContact) => {
        onUpdateContact(updatedContact);
        setSelectedContact(null);
    };

    const handleDeleteClick = () => {
        onDeleteContact(selectedContact);
        closeContactCard();
    };


    const closeContactCard = () => {
        setSelectedContact(null);
    };

    return (
        <div id="contact-list-section">
            <h1 id="contactlist">Contact List</h1>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Contact Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact, index) => (
                            <tr key={index} onClick={() => handleContactClick(contact)}>
                                <td>{contact.name}</td>
                                <td>{contact.email}</td>
                                <td>{contact.address}</td>
                                <td>{contact.number}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {selectedContact && (
                <div className="contact-details-card-container">
                    <div className="contact-details-card">
                        <h2>Contact Details</h2>
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={selectedContact.name}
                            onChange={(e) => setSelectedContact({ ...selectedContact, name: e.target.value })}
                        />

                        <label>Email:</label>
                        <input
                            type="text"
                            name="email"
                            value={selectedContact.email}
                            onChange={(e) => setSelectedContact({ ...selectedContact, email: e.target.value })}
                        />

                        <label>Address:</label>
                        <input
                            type="text"
                            name="address"
                            value={selectedContact.address}
                            onChange={(e) => setSelectedContact({ ...selectedContact, address: e.target.value })}
                        />

                        <label>Contact Number:</label>
                        <input
                            type="text"
                            name="number"
                            value={selectedContact.number}
                            onChange={(e) => setSelectedContact({ ...selectedContact, number: e.target.value })}
                        />

                        <div className="button-container">
                            <button id="btnA" onClick={() => handleUpdateClick(selectedContact)}>Update</button>
                            <button id="btnB" onClick={handleDeleteClick}>Delete</button>
                            <button id="btnC" onClick={closeContactCard}>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ContactList;
