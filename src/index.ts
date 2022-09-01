import * as express from "express"
import * as bodyParser from "body-parser"
import { Request, Response } from "express"
import { AppDataSource } from "./data-source"
import { Student } from "./entity/student"
import { parse } from "path"
import {router} from './routes/students_routes'
import path = require("path")
AppDataSource.initialize().then(async () => {

    // create express app
    const app = express()
    app.use(bodyParser.json())
    app.use('/',router)
//app.use('/',require(path.join(__dirname,'./routes/students_routes')))


    app.listen(3000, () => {
        console.log("Listening at : Open http://localhost:3000/")
    })






}).catch(error => console.log(error))
