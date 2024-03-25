import { app } from "./app.js";
import connentDb from "./db/index.db.js";
import dotenv from "dotenv"


dotenv.config({
    path: "./env"
})


// create a connection of the dbs 
const Port = process.env.PORT || 4000;
connentDb()
    .then((response) => {
        app.on("Error", (error) => {
            console.log("Error", error)
            throw error;
        })
        app.listen(Port, () => {

            console.log("app is running on this port", Port)

        })

    }).catch((error) => {
        console.log("error into app listen : ", error)
    });