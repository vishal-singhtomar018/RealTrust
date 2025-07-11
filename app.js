require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));

// Static files

// DB Connection
mongoose.connect(process.env.MONGO_URI);

// Routes
const publicRoutes = require('./routes/listings'); // rename later if needed
const adminRoutes = require('./routes/admin');

app.use('/', publicRoutes);       // Handles landing, contact, subscribe
app.use('/admin', adminRoutes);  // Handles /admin/dashboard, addProject, etc.

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
