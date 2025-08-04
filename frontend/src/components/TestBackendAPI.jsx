import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TestBackendAPI() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8080/api/message')
            .then(response => setMessage(response.data.message))
            .catch(error => console.error(error));
    }, []);

    return <div>{message}</div>;
}

export default TestBackendAPI;
