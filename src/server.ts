import 'reflect-metadata'
import express, {Request, Response, NextFunction} from 'express'
const app = express()
import 'express-async-errors'
import './database/index'
import { route } from './routes'
import { DetectError } from './middlewares/ErrorCreate.middleware'
//import {errorCreate} from './middlewares/ErrorCreate.middleware'

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(route)
const ErrorMiddle = new DetectError()
app.use(ErrorMiddle.handle)
app.listen(3069, () => {
    console.log(`Server rodando na porta ${3069}!`)  
})