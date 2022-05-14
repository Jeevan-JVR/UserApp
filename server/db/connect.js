const mongoose = require("mongoose");

const connectDB = (url)=>{
    return mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to the db....."))
    .catch(err => console.error(err));
}

module.exports = connectDB