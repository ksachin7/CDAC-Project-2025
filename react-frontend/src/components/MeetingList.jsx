import React, { useEffect, useState } from 'react';
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';
import api from '../api';
const MeetingList = ({ userId }) => {
    const [meetings, setMeetings] = useState([]);

    useEffect(() => {
        if (!userId) return;

        // 1. Fetch all meetings
        const fetchMeetings = async () => {
            try {
                const response = await api.get(`/meeting/user/${userId}`);
                setMeetings(response.data);
            } catch (error) {
                console.error("Error fetching meetings:", error);
            }
        };

        fetchMeetings();

        // 2. WebSocket connection
        const socket = new SockJS('http://localhost:8080/ws');
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

        return () => {
            client.deactivate();
        };
    }, [userId]);

    return (
        <div className="p-6 rounded-lg bg-gray-900 shadow-md text-white h-full">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Your Meetings</h3>
            {meetings.length === 0 ? (
                <p className="text-gray-300">No meetings yet.</p>
            ) : (
                <ul className="space-y-2">
                    {meetings.map((meeting, index) => (
                        <li key={index} className="p-4 border border-gray-700 rounded-md bg-gray-800">
                            <p><strong>Meeting ID:</strong> {meeting.meetingid}</p>
                            <p><strong>Purpose:</strong> {meeting.purpose}</p>
                            <p><strong>Candidate ID:</strong> {meeting.candidateid}</p>
                            <p><strong>Interviewer ID:</strong> {meeting.interviewerid}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MeetingList;
