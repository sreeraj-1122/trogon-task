import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getModules } from "../services/api";
import { FaArrowRight, FaArrowDown } from "react-icons/fa"; 

const Modules = () => {
  const { id } = useParams(); 
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
const navigate=useNavigate()
  useEffect(() => {
    const fetchModules = async () => {
      try {
        const response = await getModules(id);
        setModules(response.data);
      } catch (err) {
        setError("Failed to fetch modules. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchModules();
  }, [id]);

  return (
    <div
      className="relative min-h-screen flex flex-col items-center p-8   bg-purple-700"
    >
      <h1 className="text-white text-3xl font-bold mb-8">Modules</h1>
      {loading && (
        <div className="flex justify-center items-center h-32">
          <div className="animate-spin rounded-full h-10 w-10 border-4 border-blue-500 border-t-transparent"></div>
        </div>
      )}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid md:grid-cols-4 lg:grid-cols-8 grid-cols-1 gap-4 md:gap-11 relative flex-wrap ">
        {modules.map((module, index) => (
          <React.Fragment key={module.id}>
            <div className="w-48 h-20 flex items-center justify-center bg-white rounded-lg shadow-md text-center cursor-pointer" onClick={()=>navigate(`/modules/${module.id}`)}>
              <span className="text-sm font-bold text-gray-700">{module.title}</span>
            </div>

            {(index + 1)  !== 0 && index < modules.length - 1 && (
              <div className="flex items-center justify-center">
                <FaArrowRight className="text-yellow-400 text-2xl hidden md:block ml-10" />
                <FaArrowDown className="text-yellow-400 text-2xl md:hidden" />
              </div>
            )}

           
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Modules;
  