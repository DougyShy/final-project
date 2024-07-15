const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://dougscheible:fossil69@cluster0.n9nhf0f.mongodb.net/bookstore?retryWrites=true&w=majority&appName=Cluster0");
//mongoose.connect('mongodb://127.0.0.1:27017/bookstore');


module.exports = mongoose.connection;
