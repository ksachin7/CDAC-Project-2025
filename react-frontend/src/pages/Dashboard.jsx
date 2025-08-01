import React, { useState } from 'react';
import '../styles/dashboard.css';
import '../styles/index.css';
import LogoutButton from '../components/LogoutButton.jsx';
import MeetingForm from "../components/MeetingForm.jsx"
import MeetingList from '../components/MeetingList.jsx';
import ProfileIcon from '../components/ProfileIcon.jsx';


function Dashboard() {
    const [role] = useState('interviewer'); // 'candidate' or 'interviewer'
    const [userId] = useState(1);

    return (
        <div className="min-h-screen w-full bg-black text-white">
            <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 shadow w-full">
                <h2 className="text-2xl font-bold text-blue-400">Dashboard</h2>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <ProfileIcon />
                    <LogoutButton />
                </div>
            </nav>

            <main className="p-6 w-full">
                {role === 'candidate' ? (
                    <div className="w-full">
                        <MeetingList />
                    </div>
                ) : (
                    <div className="flex flex-col md:flex-row gap-6 w-full">
                        <div className="md:w-1/2 w-full">
                            <MeetingForm interviewerId={userId} />
                        </div>
                        <div className="md:w-1/2 w-full">
                            <MeetingList />
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}

export default Dashboard;
