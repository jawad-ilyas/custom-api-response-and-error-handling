import express from "express"
import cors from "cros"
import cookieParser from "cookie-parser"

const app = express()

//[use] for middlewares 
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

// configuration and miidle wares
app.use(express.json({limit : "16kb"}))
app.use(express.urlencoded({extended : true , limit : "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


export { app }