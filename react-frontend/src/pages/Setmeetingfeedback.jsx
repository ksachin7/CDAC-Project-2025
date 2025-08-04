import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useState } from 'react';




function Setmeetingfeedback() {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [feedback, setFeedback] = useState("");

    const { meetingid } = useParams();

useEffect(()=>{

console.log(rating);


},[rating])

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="p-6 max-w-3xl mx-auto rounded-xl bg-gray-900 shadow-lg text-white relative">
 

      <h3 className="text-3xl font-bold mb-6 text-blue-400 border-b border-gray-700 pb-2">
        Rate Inteviewee
      </h3>

      <ul className="space-y-4">
        <li className="p-5 bg-gray-800 rounded-xl border border-gray-700 hover:shadow-xl transition-shadow">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            
            <div className="grid-cols-2 gap-x-4 gap-y-1 text-md w-full md:w-auto">
              <p className="text-gray-400  mb-3 truncate">
                <span className="font-semibold text-white">Feedback:</span>
                <input
    type="text"
    value={feedback}
    onChange={(e) => setFeedback(e.target.value)}
    placeholder="Enter feedback"
    className="ml-2 px-2 py-1 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
  />

              </p>
              
              <p className="text-gray-400 flex items-center">
                <span className="font-semibold text-white mr-2">Rating:</span>
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                    xmlns="http://www.w3.org/2000/svg"
                    fill={(hover || rating) >= star ? "gold" : "gray"}
                    viewBox="0 0 24 24"
                    stroke="none"
                    className="w-6 h-6 cursor-pointer transition"
                  >
                    <path d="M12 2l3 7h7l-5.5 4.5 2 7L12 17l-6.5 3.5 2-7L2 9h7z" />
                  </svg>
                ))}
              </p>
            </div>

          </div>
        </li>
        
      </ul>

      <div className="mt-6 text-right">
          <button
            
            className="px-4 py-2 bg-blue-600 hover:bg-blue-400 text-white rounded-md transition"
          >
            Submit Feedback
          </button>
        </div>

    </div>
  </div>
  )
}

export default Setmeetingfeedback