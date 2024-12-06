import React, { useState } from "react";
import image from "./assets/logo.webp";
import photo from "./assets/image.png"; // Replace with the correct path to your photo

const App = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showResume, setShowResume] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowResume(true); // Show resume for any input
    }, 2000);
  };

  const closeResume = () => {
    setShowResume(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 via-white to-gray-200 font-sans relative">
      {/* Loading Overlay */}
      {loading && (
        <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="w-16 h-16 border-4 border-orange-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Header Section */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold text-orange-600">CyberPatrika</h1>
          <nav className="flex space-x-6 text-gray-600">
            <a href="#" className="hover:text-orange-600">
              Home
            </a>
            <a href="#" className="hover:text-orange-600">
              Cyber Security
            </a>
            <a href="#" className="hover:text-orange-600">
              Patrika
            </a>
            <a href="#" className="hover:text-orange-600">
              Services
            </a>
            <button className="text-orange-600 hover:text-orange-700">
              Log in
            </button>
          </nav>
        </div>
      </header>

      {/* Main Section */}
      <main className="px-6" style={{ marginTop: "100px" }}>
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-800">
            Access your <span className="text-orange-600">CyberPatrika</span> instantly
          </h2>
          <h2 className="text-5xl font-bold text-gray-800 mt-2">
            with a single click
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Enter a user name to fetch information instantly.
          </p>
        </div>

        {/* Input Box Section */}
        <div
          className="mt-12 w-full max-w-4xl mx-auto flex"
          style={{ marginTop: "50px" }}
        >
          <input
            type="text"
            placeholder="Enter a User name..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 px-6 py-4 text-2xl border border-gray-300 rounded-l-lg focus:outline-none focus:ring-4 focus:ring-orange-600"
          />
          <button
            onClick={handleSubmit}
            className="px-8 py-4 text-2xl text-white bg-orange-600 rounded-r-lg hover:bg-orange-700"
          >
            Get Patrika
          </button>
        </div>
      </main>

      {/* Features Section */}
      <section className="mt-24 px-6">
        <h3 className="text-center text-4xl font-bold text-gray-800 mb-12">
          Why Choose <span className="text-orange-600">CyberPatrika</span>?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h4 className="text-2xl font-bold text-orange-600">Fast Results</h4>
            <p className="mt-4 text-gray-600">
              Instantly retrieve Information with high accuracy.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h4 className="text-2xl font-bold text-orange-600">Reliable Data</h4>
            <p className="mt-4 text-gray-600">
              Trustworthy and secure Information retrieval for all domains.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h4 className="text-2xl font-bold text-orange-600">Easy to Use</h4>
            <p className="mt-4 text-gray-600">
              User-friendly interface designed for simplicity and speed.
            </p>
          </div>
        </div>
      </section>

      {/* Resume Overlay Section */}
      {showResume && (
        <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full p-6 relative">
            {/* Close Button */}
            <button
              onClick={closeResume}
              className="absolute top-4 right-4 bg-gray-800 text-white text-2xl rounded-full p-2 hover:bg-gray-600"
            >
              &times;
            </button>

            {/* Resume Header */}
            <div className="text-center border-b pb-6">
              <h1 className="text-3xl font-bold text-orange-600">
                CyberPatrika
              </h1>
              <p className="text-gray-600 mt-2">
                Your personalized cyber profile at a glance
              </p>
            </div>

            {/* Resume Content */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <img
                  src={photo}
                  alt="Profile"
                  className="w-24 h-24 rounded-full border border-gray-300"
                />
                <div className="ml-4">
                  <h2 className="text-xl font-bold text-gray-800">John Doe</h2>
                  <p className="text-gray-600">johndoe@example.com</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">Personal Details</h3>
                <ul className="mt-2 text-gray-600">
                  <li><strong>Mobile Number:</strong> +123 456 7890</li>
                  <li><strong>City Born:</strong> Mumbai</li>
                  <li><strong>Favourite Color:</strong> Blue</li>
                  <li><strong>Pet Name:</strong> Buddy</li>
                  <li><strong>School Visited:</strong> XYZ High School</li>
                  <li><strong>First Employer:</strong> ABC Corp</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer Section */}
      <footer className="mt-24 bg-gray-800 text-white py-6">
        <div className="text-center">
          <p className="text-lg">&copy; 2024 CyberPatrika. All rights reserved.</p>
          <p className="mt-2">
            Designed with ❤️ by the CyberPatrika team.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;