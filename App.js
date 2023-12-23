
import React, { useState } from 'react';
import './App.css';
import Register_page from './Register-page';
import Login from './Login-page';
import ContactCreate from './ContactCreate';
import ContactList from './ContactList';


function App() {
  const [activeForm, setActiveForm] = useState('register-section');
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);

  const toggleForm = (formId) => {
    console.log('Toggling form to:', formId);
    setActiveForm(formId);
  };

  const handleLogin = (email) => {
    setLoggedInUser(email);
    toggleForm('contact-create-section');
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    toggleForm('login-section');
  };

  const handleContactCreate = (contactData) => {
    setContacts([...contacts, contactData]);
   
    toggleForm('contact-list-section');
  };

  const handleUpdateContact = (updatedContact) => {

    const contactIndex = contacts.findIndex((contact) => contact.email === updatedContact.email);

    if (contactIndex !== -1) {

      const updatedContacts = [...contacts];
      updatedContacts[contactIndex] = updatedContact;

  
      setContacts(updatedContacts);
    }
  };


  
const handleDeleteContact = (contactToDelete) => {
   
    setContacts((prevContacts) => prevContacts.filter((contact) => contact !== contactToDelete));

   
    setSelectedContact(null);
  };

  return (
    <div className="App">
      <header id="head-section">
        <ul>
      
    <li><a href="#" id="home-link">CMS</a></li>
  
        </ul>
      {loggedInUser ? (
          <ul>
            <li className="home" ><a href="#"  onClick={() => toggleForm('contact-list-section')}>All Contacts</a></li>
            <li className="home"><a href="#"  onClick={() => toggleForm('contact-create-section')}>Create</a></li>
            <li  id="logout"><a href="#"  onClick={handleLogout}>Logout</a></li>
          </ul>

      ) : (
        <ul>
          <li ><a href="#" onClick={() => toggleForm('register-section')}>REGISTER</a></li>
          <li ><a href="#" onClick={() => toggleForm('login-section')}>LOGIN</a></li>
        </ul>
        )}
      </header>
      {activeForm === 'register-section' && (
    <Register_page 
    activeForm={activeForm}
    onToggleForm={() => toggleForm('login-section')}
  />
      )}

{activeForm === 'login-section' && (
        <Login
          activeForm={activeForm}
          onToggleForm={() => toggleForm('contact-create-section')}
          onLogin={handleLogin}
        />
      )}


{activeForm === 'contact-create-section' && (
      <ContactCreate
        activeForm={activeForm}
        loggedInUser={loggedInUser}
        onToggleForm={() => toggleForm('contact-list-section')}
        onCreateContact={handleContactCreate}
      />
      )}

{activeForm === 'contact-list-section' && (
  <ContactList
    contacts={contacts}
    onUpdateContact={handleUpdateContact}
    onDeleteContact={handleDeleteContact}
    onEditContact={(contactId) => setSelectedContact(contactId)}
  />
)}

    </div>
  );
}

export default App;
