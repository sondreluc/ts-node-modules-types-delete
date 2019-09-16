import React, { useState, Fragment } from 'react';
import { Button } from './Button';

export const App = () => {
    const [message, setMessage] = useState('Hello World!');
    return (
        <div>
            <h1>{message}</h1>
            <Button onClick={() => setMessage('Godbye!')} text="Change message" />
        </div>
    );
};
