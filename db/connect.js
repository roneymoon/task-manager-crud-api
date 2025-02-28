const mongoose = require("mongoose")

const connection_string = "mongodb+srv://roney:r0newhy123@node-express.iijuo.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority&appName=node-express"

const connectDB = (url) => {
    return mongoose.connect(connection_string, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

module.exports = connectDB

