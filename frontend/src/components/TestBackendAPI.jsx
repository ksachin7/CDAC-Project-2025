import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TestBackendAPI() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get('https://cdac-project-2025.onrender.com/api/message')
            .then(response => setMessage(response.data.message))
            .catch(error => console.error(error));
    }, []);

    return <div>{message}</div>;
}

export default TestBackendAPI;
