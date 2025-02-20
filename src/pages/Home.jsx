import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getSubjects } from "../services/api";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await getSubjects();
        setSubjects(response.data);
      } catch (err) {
        setError("Failed to fetch subjects. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchSubjects();
  }, []);

  return (
    <div className="p-6 bg-purple-700 min-h-screen text-white">
      <h1 className="text-3xl font-bold text-center mb-6">Subjects</h1>

      {loading && (
        <div className="flex justify-center items-center h-32">
          <div className="animate-spin rounded-full h-10 w-10 border-4 border-white border-t-transparent"></div>
        </div>
      )}

      {error && <p className="text-red-400 text-center">{error}</p>}

      <div className="relative mt-6 p-6">
        {subjects.map((subject, index) => (
          <Link key={subject.id} to={`/subjects/${subject.id}`} className="flex items-center  relative mb-6 gap-6 p-3">
            
            {index !== subjects.length - 1 && (
              <div className="absolute left-[35px] top-12 h-full w-[2px] bg-gray-300"></div>
            )}

            <div className="relative z-10 w-12 h-12 bg-white text-purple-700 font-bold flex items-center justify-center rounded-full border-4 border-purple-400 ">
              {index + 1}
            </div>

            <div className="flex-1">
              <p className="font-semibold">{subject.title}</p>
              <p className="text-sm text-gray-300">{15} Lessons</p>
            </div>

            <FaArrowRight className="text-white" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
