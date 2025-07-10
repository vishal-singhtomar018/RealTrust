const mongoose = require('mongoose');
const Project = require('../models/Project.js'); // update path if needed
require('dotenv').config();

mongoose.connect('mongodb://localhost:27017/Realtrust ', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const sampleProjects = [
  {
    name: "Consultation",
    description: "Project information is available",
    image: "image1.jpg.png",
  },
  {
    name: "Design",
    description: "Project information is available",
    image: "project2.png",
  },
  {
    name: "Marketing & Design",
    description: "Project information is available",
    image: "project3.png",
  },
  {
    name: "Consultation & Marketing",
    description: "Project information is available",
    image: "project4.png",
  },
  {
    name: "Consultation",
    description: "Project information is available",
    image: "project5.png",
  },
];

const seedDB = async () => {
  await Project.deleteMany({});
  await Project.insertMany(sampleProjects);
  console.log("✅ Projects inserted successfully!");
  mongoose.connection.close();
};

seedDB();
