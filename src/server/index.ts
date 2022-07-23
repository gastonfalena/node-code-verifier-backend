import express, { Express, Request, Response } from 'express'

//security
import cors from 'cors'
import helmet from 'helmet'

// TODO HTTPS
//ROOT ROUTER
import rootRouter from '../routes'

//Create Express APP
const server: Express = express()
// const port: string | number = process.env.PORT || 8000

// Define SERVER to use "/api" and use rootRouter from 'index' in routes
// From this point onover: http://localhost:8000/api/...
server.use('/api', rootRouter)

//TODO Mongoose Connection

//Security Config
server.use(helmet())
server.use(cors())

// Content type config
server.use(express.urlencoded({ extended: true, limit: '50mb' }))
server.use(express.json({ limit: '50mb' }))
//Redirection Config
//htpp://localhost:8000/ --> htpp://localhost:8000/api/
server.get('/', (req: Request, res: Response) => {
  res.redirect('/api')
})

export default server
