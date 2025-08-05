import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import api from "../api"; 

function ReportPage() {
  const [meetings, setMeetings] = useState([]);
  const navigate = useNavigate(); 

  // Fetch meeting history from backend
  useEffect(() => {
    const fetchMeetings = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        const userId = user?.id; 

        console.log(userId);

        const res = await api.get(`/meeting/history/${userId}`);
        setMeetings(res.data);
        console.log(res);
      } catch (error) {
        console.error("Error fetching meeting history:", error);
      }
    };

    fetchMeetings();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-6 border-b border-gray-700 pb-3">
          <h1 className="text-3xl font-bold text-blue-400">
            Meeting  Report History
          </h1>

          {/* Navigation button */}
          <button
            onClick={() => navigate("/")} // navigate to homepage
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition"
          >
            Go to Home
          </button>
        </div>

        {meetings.length === 0 ? (
          <p className="text-gray-400">No meeting history available.</p>
        ) : (
          <ul className="space-y-6">
            {meetings.map((meeting) => (
              <li
                key={meeting.meetingid}
                className="bg-gray-800 p-5 rounded-xl border border-gray-700 hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  {/* Left Section */}
                  <div>
                    <p className="text-gray-400">
                      <span className="font-semibold text-white">Meeting ID:</span>{" "}
                      {meeting.meetingid}
                    </p>
                    <p className="text-gray-400">
                      <span className="font-semibold text-white">Date:</span>{" "}
                      {new Date(meeting.date).toLocaleDateString()}
                    </p>
                    <p className="text-gray-400 mt-2">
                      <span className="font-semibold text-white">Feedback:</span>{" "}
                      {meeting.review || "No feedback provided"}
                    </p>
                    <p className="text-gray-400 mt-2">
                      <span className="font-semibold text-white">Purpose:</span>{" "}
                      {meeting.purpose || "No feedback provided"}
                    </p>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        fill={meeting.rating >= star ? "gold" : "gray"}
                        viewBox="0 0 24 24"
                        stroke="none"
                        className="w-6 h-6"
                      >
                        <path d="M12 2l3 7h7l-5.5 4.5 2 7L12 17l-6.5 3.5 2-7L2 9h7z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ReportPage