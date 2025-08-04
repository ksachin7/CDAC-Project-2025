import React, { useEffect, useState } from 'react';
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';
import api from '../api';
import { useNavigate } from 'react-router-dom';

const MeetingList = ({ userId }) => {
  const [meetings, setMeetings] = useState([]);
  const navigate = useNavigate();
    const [isCandidate,setIsCandidate]=useState(false);
  useEffect(() => {
    if (!userId) return;
    
       const storedUser = localStorage.getItem("user");
  console.log("📦 Raw user from localStorage:", storedUser);

  if (storedUser) {
    try {
      const parsedUser = JSON.parse(storedUser);
      console.log("🔍 Parsed user:", parsedUser);

      if (parsedUser.role?.toUpperCase() === "CANDIDATE") {
        console.log("🎯 Role is CANDIDATE");
        setIsCandidate(true);
      }
    } catch (err) {
      console.error("❌ Error parsing user from localStorage:", err);
    }
  }

    const fetchMeetings = async () => {

      try {
       
        const response = await api.get(`/meeting/user/${userId}`);
        setMeetings(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching meetings:", error);
      }
    };

    fetchMeetings();

    const socket = new SockJS(`${import.meta.env.VITE_API_URL}/ws`);
    const client = new Client({
      webSocketFactory: () => socket,
      reconnectDelay: 5000,
      onConnect: () => {
        client.subscribe(`/queue/user/${userId}`, (message) => {
          const newMeeting = JSON.parse(message.body);
          setMeetings(prev => [...prev, newMeeting]);
        });
      },
      onStompError: (frame) => {
        console.error("STOMP error:", frame.headers['message']);
      }
    });

    client.activate();
    return () => client.deactivate();
  }, [userId]);

  return (
    <div className="p-6 max-w-3xl mx-auto rounded-xl bg-gray-900 shadow-lg text-white h-full">
      <h3 className="text-3xl font-bold mb-6 text-blue-400 border-b border-gray-700 pb-2">
        Your Meetings
      </h3>

      {meetings.length === 0 ? (
        <p className="text-gray-400 italic">No meetings yet.</p>
      ) : (
        <ul className="space-y-4">
          {meetings.map((meeting, index) => (
            <li
              key={index}
              className="p-5 bg-gray-800 rounded-xl border border-gray-700 hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className={`grid ${isCandidate ? 'grid-cols-3' : 'grid-cols-2'} gap-x-4 gap-y-1 text-sm w-full md:w-auto`}>
                  {/* <p className="text-gray-400">
                    <span className="font-semibold text-white">ID:</span> {meeting.meetingid}
                  </p> */}
                  <p className="text-gray-400 truncate">
                    <span className="font-semibold text-white">Purpose:</span> {meeting.purpose}
                  </p>
                  {!isCandidate &&<p className="text-gray-400">
                    <span className="font-semibold text-white">Candidate:</span> {meeting.candidatname}
                  </p>}
                  {isCandidate && <p className="text-gray-400">
                    <span className="font-semibold text-white">Interviewer:</span> {meeting.interviewername}
                  </p> }
                  <p className="text-gray-400 ">
                    <span className="font-semibold text-white">Join Before:</span> {meeting.date}
                  </p>
                </div>

                <button
                  onClick={() => navigate(`/room/${meeting.meetingid}`)}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition-colors text-white rounded-lg font-medium w-full md:w-auto"
                >
                  Join
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MeetingList;
