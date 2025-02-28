const express = require("express")
const app = express();
const tasks = require("./routes/tasks")
const connectDB = require("./db/connect")
require("dotenv").config()
const ratelimiter = require("./middlewares/rate-limiter")
const cors = require("cors")

const notfound = require("./middlewares/not-found")


// middleware
app.use(express.static("./public")) // this will make a call to our API in nodejs
app.use(express.json())
app.use(cors());

// routes
app.get("/hello", (req, res)=> {
    res.send("Task Manager app")
})

app.use("/api/v1/tasks", tasks);

app.use(notfound)

// app.get("/api/v1/tasks")
// app.post("/api/v1/tasks")
// app.get("/api/v1/tasks/:id")
// app.patch("/api/v1/tasks/:id")
// app.delete("/api/v1/tasks/:id")

const PORT = process.env.PORT || 3000; // Use Render's assigned port or fallback to 3000

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, "0.0.0.0", () => { console.log(`Server is running on port ${PORT}`); });

    }
    catch(err){
        console.log(err)
    }
}


start();
