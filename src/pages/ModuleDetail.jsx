import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getVideos } from "../services/api";
import { FaCheckCircle } from "react-icons/fa";
import { HiOutlineChevronRight,HiOutlineChevronLeft  } from "react-icons/hi";

const ModuleDetail = () => {
  const { moduleId } = useParams();
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await getVideos(moduleId);
        setVideos(response.data);
        
      } catch (err) {
        setError("Failed to fetch videos. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [moduleId]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-32">
        <div className="animate-spin rounded-full h-10 w-10 border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-200 to-white px-6 py-6">
      {/* Header */}
      <div className="flex items-center mb-6">
        <button onClick={() => navigate(-1)} className="text-black text-3xl">
        <HiOutlineChevronLeft size={24} />
        </button>
      </div>
      <h2 className="text-gray-600 text-sm">Level 1</h2>
      <h1 className="text-black text-2xl font-bold mb-6">Module Videos</h1>

      <div className="relative">
        <div className="absolute left-8 top-8 bottom-8 w-1 bg-purple-500"></div>

        {videos.map((video, index) => (
          <div
            key={video.id}
            className="relative flex items-center gap-4 py-4 cursor-pointer hover:bg-purple-100 px-4 rounded-lg transition"
            onClick={() => navigate(`/video/${video.id}`)}
          >
            <div className="relative z-10 flex items-center justify-center w-10 h-10 bg-purple-600 rounded-full text-white">
              <FaCheckCircle size={20} />
            </div>

            {/* Title & Description */}
            <div className="flex-1">
              <p className="text-gray-500 text-sm">Step {index + 1}</p>
              <h3 className="text-black text-lg font-semibold">{video.title}</h3>
              <p className="text-gray-600 text-sm">{video.description}</p>
            </div>

            {/* Arrow Icon */}
            <HiOutlineChevronRight className="text-gray-500" size={24} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModuleDetail;
