import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"
const connentDb = async () => {

    try {

        const connection = await mongoose.connect(`${process.env.MONGODB_URI}`)
        // console.log("db connection ",  connection)
        console.log("db connection connected")
    } catch (error) {
        console.log("error into db connection ", error)
    }
}


export default connentDb;