// seedClients.js
const mongoose = require('mongoose');
const Client = require('../models/Client.js'); // adjust path if needed
require('dotenv').config();

mongoose.connect('mongodb://localhost:27017/Realtrust')
  .then(() => console.log("DB connected"))
  .catch(err => console.log(err));

const dummyClients = [
  {
    name: "Rowman Smith",
    designation: "Real Estate Client",
    description: "I was completely satisfied with the high service and final result.",
    image: "Ellipse 28.png"
  },
  {
    name: "Shijana Kayak",
    designation: "Home Buyer",
    description: "Design and execution were outstanding. Highly recommend!",
    image: "Ellipse 29.png"
  },
  {
    name: "John Lopess",
    designation: "Investor",
    description: "Wonderful team to work with. Truly professional and friendly.",
    image: "Ellipse 31.png"
  },
  {
    name: "Merry Freeman",
    designation: "Marketing Manager",
    description: "Great experience with the design team. Loved the outcome.",
    image: "Ellipse 33.png"
  },
  {
    name: "Lucy",
    designation: "Client",
    description: "Beautiful design work and smooth process throughout.",
    image: "Ellipse 35.png"
  }
];

const seedDB = async () => {
  await Client.deleteMany({});
  await Client.insertMany(dummyClients);
  console.log("Client data inserted");
  mongoose.connection.close();
};

seedDB();
