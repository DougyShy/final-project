const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://dougscheible:fossil69@cluster0.n9nhf0f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

module.exports = mongoose.connection;
