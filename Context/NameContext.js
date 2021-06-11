import React, { useState, createContext, useContext } from 'react'

const NameContext = createContext({});

export const NameContextProvider = ({ children }) => {
    const [name, setName] = useState('');
    return (
        
        <NameContext.Provider value = {{name, setName}} >
            {children}

        </NameContext.Provider>

    );
} 

export const useName = () => {
    return useContext(NameContext) 
}



