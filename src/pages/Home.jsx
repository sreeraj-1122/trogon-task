import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SubjectCard from "../components/SubjectCard";
import { getSubjects } from "../services/api";

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
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-700 mb-6 text-center">Subjects</h1>

      {loading && (
        <div className="flex justify-center items-center h-32">
          <div className="animate-spin rounded-full h-10 w-10 border-4 border-blue-500 border-t-transparent"></div>
        </div>
      )}

      {error && <p className="text-red-500 text-center">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {subjects.map((subject) => (
          <Link key={subject.id} to={`/subjects/${subject.id}`}>
            <SubjectCard subject={subject} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
