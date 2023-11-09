const mongoose = require("mongoose")

const connectDB = async ()=>{

    //in the url section use your own  mongodb database i have use my own i will provide a video with this zip you can check it
 
    try {
        const conn = await mongoose.connect("Use the data base in which you want  to connect ")
        console.log(`Connected to Database ${conn.connection.host}`)

    }catch(error){
        console.log(`Error in MongoDB ${error}`)
    }
}
module.exports = connectDB