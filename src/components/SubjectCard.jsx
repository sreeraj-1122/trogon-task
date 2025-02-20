import React from "react";

const SubjectCard = ({ subject }) => {
  return (
    <div className="bg-white h-[280px] shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
      <img
        src={subject.image}
        alt={subject.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{subject.title}</h2>
        <p className="text-gray-600 text-sm mt-2">{subject.description}</p>
      </div>
    </div>
  );
};

export default SubjectCard;
