import React from 'react';
import { ContactProvider } from './context/ContactContext';
import { InventoryProvider } from './context/InventoryContext';
import ContactList from './components/ContactList';
import ContactDetails from './components/ContactDetails';
import ProductList from './components/ProductList';
import NewProductForm from './components/NewProductForm';

const App = () => {
    return (
        <ContactProvider>
            <InventoryProvider>
                <div>
                    <ContactList />
                    <ContactDetails />
                    <ProductList />
                    <NewProductForm />
                </div>
            </InventoryProvider>
        </ContactProvider>
    );
};

export default App;