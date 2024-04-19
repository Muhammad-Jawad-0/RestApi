const mongoose = require('mongoose');

// uri = "mongodb+srv://Muhammad-Jawad:passwordformongodb1122.js@cluster0.mi0bpep.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=Cluster0"

const connectDB = (uri) => {
    console.log("connect database MongoDB")
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        // useCreateIndex: true,
        useUnifiedTopology: true,
        // useFindAndModify: false
    })
};

module.exports = connectDB