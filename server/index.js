import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
const app = express()
dotenv.config()


import './db/config.js'
import route from './routes/Route.js'

const PORT = process.env.PORT || 4000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())

app.use('/',route)

app.listen(PORT, ()=> console.log("app listening on port" + PORT))