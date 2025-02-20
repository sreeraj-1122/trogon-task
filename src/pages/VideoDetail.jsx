import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getVideos } from "../services/api";
import VideoPlayer from "../components/VideoPlayer";
import { FaDownload, FaQuestionCircle } from "react-icons/fa"; // Import icons

const VideoDetail = () => {
  const { videoId } = useParams();
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await getVideos(videoId);
        const selectedVideo = response.data.find(
          (v) => v.id.toString() === videoId
        );
        setVideo(selectedVideo);
      } catch (err) {
        setError("Failed to fetch video details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchVideo();
  }, [videoId]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-32">
        <div className="animate-spin rounded-full h-10 w-10 border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  if (error) return <p className="text-red-500">{error}</p>;

  const handleDownload = () => {
    if (video?.video_url) {
      window.open(video.video_url, "_blank");
    }
  };

  const handleDoubt = () => {
    alert("Feature Coming Soon: Ask your doubts here!");
  };

  return (
    <div className="flex flex-col  p-8">
      <VideoPlayer videoUrl={video?.video_url} />
      <h1 className="text-gray-900 text-xl font-bold mb-1 mt-6">{video?.title}</h1>
      <p className="text-gray-600 text-lg mb-6">{video?.description}</p>

      <div className="flex gap-4 mt-1">
        <button
          className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          onClick={handleDownload}
        >
          <FaDownload /> Download
        </button>

        <button
          className="flex items-center gap-2 bg-red-600 text-white px-5 py-2 rounded-lg shadow hover:bg-red-700 transition"
          onClick={handleDoubt}
        >
          <FaQuestionCircle /> Doubt
        </button>
      </div>
    </div>
  );
};

export default VideoDetail;
