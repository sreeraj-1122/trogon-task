import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
    const navigate=useNavigate()
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-cover bg-center" 
      style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1663106423058-c5242333348c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2lkcyUyMGxlYXJuaW5nfGVufDB8fDB8fHww')" }}>
      
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="relative text-center text-white px-6">
        <h1 className="text-3xl md:text-5xl font-bold">Expand Your Knowledge</h1>
        <p className="text-lg md:text-xl mt-4">Explore different subjects and learn at your own place</p>
        
        <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition" onClick={()=>navigate("/subjects")}>
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;