import React, { createContext, useState } from 'react';

const ContactContext = createContext();

const ContactProvider = ({ children }) => {
    const [contacts] = useState([
        { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '098-765-4321' },

    ]);
    const [selectedContact, setSelectedContact] = useState(null);

    return (
        <ContactContext.Provider value={{ contacts, selectedContact, setSelectedContact }}>
            {children}
        </ContactContext.Provider>
    );
};

export { ContactContext, ContactProvider };