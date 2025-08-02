import { useState } from 'react';
import api from '../api';

const MeetingForm = ({ interviewerId }) => {
    const [email, setEmail] = useState('');
    const [purpose, setPurpose] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post(
                '/user/getbyemail',
                email, // pass plain string
                {
                    headers: {
                        'Content-Type': 'text/plain',
                    },
                }
            );
            const intervieweeId = response.data.id;
            console.log("id" + intervieweeId);
            //const intervieweeId=2;
            await api.post('/meeting/create', {

                interviewerid: interviewerId,
                candidateid: intervieweeId,
                purpose,
            });

            alert('Meeting created successfully!');
        } catch (err) {
            console.error(err);
            alert('Failed to create meeting');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-6 rounded-lg bg-gray-900 shadow-md text-white space-y-4 w-full h-full">
            <h3 className="text-2xl font-semibold text-blue-400">Create Meeting</h3>
            <input
                type="email"
                placeholder="Interviewee Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />
            <input
                type="text"
                placeholder="Purpose of Meeting"
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />
            <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 transition-all duration-200 text-white py-2 px-4 rounded w-full"
            >
                New Meeting
            </button>
        </form>
    );
};

export default MeetingForm;



