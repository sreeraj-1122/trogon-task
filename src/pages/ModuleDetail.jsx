import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getVideos } from "../services/api";
import { FiArrowRight } from "react-icons/fi";

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

  if (loading) return <p className="text-white">Loading videos...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-gray-900 text-3xl font-bold mb-6">Module Videos</h1>

      <div className="grid md:grid-cols-3 gap-8 w-full max-w-5xl">
        {videos.map((video) => (
          <div
            key={video.id}
            className="p-4 bg-white shadow-md rounded-lg cursor-pointer hover:shadow-lg transition"
            onClick={() => navigate(`/video/${video.id}`)}
          >
            <h2 className="text-xl font-semibold text-gray-700 flex items-center justify-between">
              {video.title}
              <FiArrowRight className=" text-gray-500" />
            </h2>
            <p className="text-gray-600 text-sm mt-3">{video.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModuleDetail;
