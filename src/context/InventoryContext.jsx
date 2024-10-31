import React, { createContext, useState } from 'react';

const InventoryContext = createContext();

const InventoryProvider = ({ children }) => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 200 },

    ]);

    const fetchProducts = () => {
        return products;
    };

    const addProduct = (product) => {
        setProducts([...products, { ...product, id: products.length + 1 }]);
    };

    const removeProduct = (productId) => {
        setProducts(products.filter(product => product.id !== productId));
    };

    return (
        <InventoryContext.Provider value={{ products, fetchProducts, addProduct, removeProduct }}>
            {children}
        </InventoryContext.Provider>
    );
};

export { InventoryContext, InventoryProvider };