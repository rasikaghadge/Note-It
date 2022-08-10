require('dotenv').config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const userRouter = require("./routes/userRouter")
const noteRouter = require("./routes/noteRouter")

const app = express()
app.use(express.json())
app.use(cors())

//routes
app.use("/users", userRouter)
app.use("/api/notes", noteRouter)

//listening server
const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log("Server running on port ,", PORT)
})

//connecting to db
const URI = process.env.MONGODB_URL

//connecting to db
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if(err){
        throw err;
    }
    else{
        console.log("Connected to DB")
    }
})