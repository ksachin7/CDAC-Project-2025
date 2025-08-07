import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 py-12 relative">
      
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 flex items-center gap-2 text-green-400 hover:text-green-500 transition"
        aria-label="Go back to Home"
      >
        <FaArrowLeft className="w-5 h-5" />
        <span className="text-sm font-medium">Home</span>
      </button>

      {/* About Card */}
      <div className="max-w-3xl w-full bg-gray-800 shadow-xl rounded-xl p-8 border border-gray-700 mt-8">
        <h1 className="text-4xl font-extrabold text-green-400 mb-6 text-center border-b border-gray-700 pb-4">
          About E-Valuation
        </h1>

        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          <span className="text-green-400 font-semibold">E-Valuation</span> is a cutting-edge platform built for conducting 
          online technical interviews. It streamlines the process for both interviewers and candidates, offering a rich set of features:
        </p>

        <ul className="list-disc list-inside text-gray-300 space-y-4 mb-6">
          <li>
            <strong className="text-green-400">Live Coding Environment:</strong> 
            &nbsp;Solve problems in real-time with an interactive editor.
          </li>
          <li>
            <strong className="text-green-400">Video Interview Facility:</strong> 
            &nbsp;Engage in face-to-face discussions during the interview.
          </li>
          <li>
            <strong className="text-green-400">Meeting Management:</strong> 
            &nbsp;Create and share unique meeting IDs for seamless access.
          </li>
          <li>
            <strong className="text-green-400">Real-time Collaboration:</strong> 
            &nbsp;View live progress and communicate instantly.
          </li>
        </ul>

        <p className="text-lg text-gray-300 leading-relaxed">
          Whether you're hiring remotely or conducting coding assessments, 
          E-Valuation offers an all-in-one solution for efficient and effective technical evaluations.
        </p>
      </div>
    </div>
  );
}

export default About;
