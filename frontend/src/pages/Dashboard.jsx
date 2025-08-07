import React, { useState, useEffect } from 'react';
import '../styles/dashboard.css';
import '../styles/index.css';
import LogoutButton from '../components/LogoutButton.jsx';
import MeetingForm from "../components/MeetingForm.jsx";
import MeetingList from '../components/MeetingList.jsx';
import ProfileIcon from '../components/ProfileIcon.jsx';
import { Link } from 'react-router-dom';

function Dashboard() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            setUser(parsedUser);
            console.log("User loaded from localstorage: ", parsedUser);
        }
    }, []);

    if (!user) {
        return <div className="text-white p-6">Loading...</div>;
    }

    const { role, id: userId } = user;

    return (
        <div className="min-h-screen w-full bg-black">
            <nav className="flex justify-between items-center px-8 py-4 bg-gray-900 shadow w-full">
                <h2 className="text-4xl font-bold text-green-400">Dashboard</h2>
                <div className="flex items-center space-x-4">
                    <div className="flex justify-between items-center px-8 space-x-8 text-green">
                        <Link to="/" className="hover:text-green-400">Home</Link>
                        <Link to="/report" className="hover:text-green-400">Report</Link>
                    </div>
                    <ProfileIcon user={user} />
                    <LogoutButton />
                </div>
            </nav>

            <main className="p-6 w-full">
                {role === 'candidate'.toUpperCase() ? (
                    <div className="w-full">
                        <MeetingList userId={userId} />
                    </div>
                ) : (
                    <div className="flex flex-col md:flex-row gap-6 w-full">
                        <div className="md:w-1/2 w-full">
                            <MeetingForm interviewerId={userId} />
                        </div>
                        <div className="md:w-1/2 w-full">
                            <MeetingList userId={userId} />
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}

export default Dashboard;
