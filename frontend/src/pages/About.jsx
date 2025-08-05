import React from 'react'

function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-6 py-12">
      <div className="max-w-3xl bg-gray-800 shadow-lg rounded-xl p-8 border border-gray-700 space-y-5">
        
        <h1 className="text-3xl font-bold text-blue-400 text-center border-b border-gray-700 pb-3">
          About E-Valuation
        </h1>
        
        <p className="text-base text-gray-300 leading-relaxed">
          <span className="text-blue-400 font-semibold">E-Valuation</span> is an innovative platform crafted to revolutionize the way technical interviews are conducted online. Designed with user experience in mind, it bridges the gap between interviewers and candidates by offering a streamlined, feature-rich environment.
        </p>

        <p className="text-base text-gray-300 leading-relaxed">
          One of its standout features is the <span className="text-blue-400 font-semibold">Live Coding Environment</span>, allowing candidates to tackle coding challenges in real-time while interviewers observe and guide.
        </p>

        <p className="text-base text-gray-300 leading-relaxed">
          With the integrated <span className="text-blue-400 font-semibold">Video Interview Facility</span>, face-to-face interaction is effortless, enabling genuine conversation and immediate feedback.
        </p>

        <p className="text-base text-gray-300 leading-relaxed">
          To keep things organized, E-Valuation simplifies scheduling with its <span className="text-blue-400 font-semibold">Meeting Management</span> feature.
        </p>

        <p className="text-base text-gray-300 leading-relaxed">
          Collaboration is at the core of E-Valuation. The platform supports <span className="text-blue-400 font-semibold">Real-time Collaboration</span>, so both parties can discuss solutions and view progress simultaneously.
        </p>

        <p className="text-base text-gray-300 leading-relaxed">
          Whether you're running remote coding assessments or hiring drives, E-Valuation offers an all-in-one solution for modern recruitment. It’s not just a tool — it’s a better way to connect, evaluate, and build great teams.
        </p>
      </div>
    </main>
  )
}

export default AboutPage
