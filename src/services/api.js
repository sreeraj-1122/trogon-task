import axios from "axios";

const API_BASE = "https://trogon.info/interview/php/api/";

export const getSubjects = async () => {
  return await axios.get(`${API_BASE}subjects.php`);
};

export const getModules = async (subjectId) => {
  return await axios.get(`${API_BASE}modules.php?subject_id=${subjectId}`);
};

export const getVideos = async (moduleId) => {
  return await axios.get(`${API_BASE}videos.php?module_id=${moduleId}`);
};
