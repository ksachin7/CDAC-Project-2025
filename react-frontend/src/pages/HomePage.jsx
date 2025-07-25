import { useState } from 'react';
import { Monitor } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const [meetingId, setMeetingId] = useState('');
    const navigate = useNavigate();

    return (
        <div className="w-screen min-h-screen bg-black text-white">
            <header className="w-screen bg-black px-8 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                    <span className="text-gray-400">/</span>
                    <span className="text-gray-400">hire@topone.in</span>
                </div>

                <nav className="flex items-center gap-4 text-sm">
                    <span className="text-gray-400">Api</span>
                    <span className="text-gray-400">Meeting</span>
                    <span className="text-gray-400">Web App</span>
                    <span className="text-gray-400">Companies</span>
                </nav>

                <button
                    className="px-4 py-2 text-sm bg-white text-black rounded-full"
                    onClick={() => navigate('/login')}
                >
                    Get Started — It's Free
                </button>
            </header>

            <main className="w-screen px-8 py-20">
                <div className="w-full text-center mb-12">
                    <h1 className="text-5xl font-bold leading-tight">
                        Online Video Calls, Meetings<br />and Conferencing
                    </h1>
                </div>

                {/* Meeting Join */}
                <div className="w-full flex justify-center">
                    <div className="flex w-full max-w-md gap-3 bg-white/5 backdrop-blur-md p-4 rounded-xl shadow-xl">
                        <div className="relative flex-1">
                            <Monitor className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                            <input
                                type="text"
                                value={meetingId}
                                onChange={(e) => setMeetingId(e.target.value)}
                                placeholder="Enter Meeting ID"
                                className="w-full pl-10 pr-4 py-3 bg-white/10 text-white placeholder-gray-400 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                            />
                        </div>
                        <button
                            onClick={() => {
                                if (meetingId.trim()) {
                                    navigate(`/interview/${meetingId}`);
                                }
                            }}
                            className="px-5 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium rounded-lg shadow-md transition-all duration-200"
                        >
                            Join
                        </button>
                    </div>
                </div>

            </main>
        </div>
    );
};

export default HomePage;
