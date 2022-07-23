/**
 * Root Router
 * Redirection to Routers
 */
import express, { Request, Response } from 'express'
import HelloRouter from './HelloRouter'
import { LogInfo } from '../utils/logger'

// Server instance

let server = express()

// Router instance

let rootRouter = express.Router()

//Activate for requests to http://localhost:8000/api

//GET : http://localhost:8000/api/
rootRouter.get('/', (req: Request, res: Response) => {
  LogInfo('GET: http://localhost:8000/api/')
  res.send(
    'Welcome to my api restful: express + ts + nodemon + jest + swagger + Mongoose'
  )
})

// Redirections to Router & Controllers

server.use('/', rootRouter) // http://localhost:8000/api
server.use('/hello', HelloRouter) //http://localhost:8000/api/hello --> HelloRouter
//Add more routes to the app

export default server
