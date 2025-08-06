import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 py-12 relative">
      
      {/* Back Arrow Button completely transparent */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 flex items-center gap-2 text-blue-400 hover:text-blue-500 transition 
                   bg-transparent border-none outline-none focus:outline-none"
      >
        <FaArrowLeft className="w-5 h-5" />
        <span className="text-sm">Move to Home Page</span>
      </button>

      <div className="max-w-3xl bg-gray-800 shadow-lg rounded-xl p-8 border border-gray-700 mt-8">
        <h1 className="text-4xl font-bold text-blue-400 mb-6 text-center border-b border-gray-700 pb-3">
          About E-Valuation Project
        </h1>

        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          The <span className="text-blue-400 font-semibold">E-Valuation</span> project is an innovative platform designed for 
          conducting online technical interviews. It provides a seamless experience 
          for both interviewers and interviewees with the following features:
        </p>

        <ul className="list-disc list-inside text-gray-300 space-y-3 mb-6">
          <li>
            <span className="text-blue-400 font-semibold">Live Coding Environment:</span> 
            &nbsp;Candidates can solve coding problems in real-time with an interactive code editor.
          </li>
          <li>
            <span className="text-blue-400 font-semibold">Video Interview Facility:</span> 
            &nbsp;Interviewers can interact with candidates face-to-face during the session.
          </li>
          <li>
            <span className="text-blue-400 font-semibold">Meeting Management:</span> 
            &nbsp;Interviewers can create unique meeting IDs for interview sessions, 
            and interviewees can easily join using the provided link.
          </li>
          <li>
            <span className="text-blue-400 font-semibold">Real-time Collaboration:</span> 
            &nbsp;Both participants can view live coding progress and discuss solutions instantly.
          </li>
        </ul>

        <p className="text-gray-300 text-lg leading-relaxed">
          This project is ideal for remote technical interviews, coding assessments, 
          and evaluation sessions, offering an all-in-one platform for effective recruitment.
        </p>
      </div>
    </div>
  );
}

export default About;
