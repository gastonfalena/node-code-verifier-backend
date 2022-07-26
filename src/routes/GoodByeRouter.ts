import express, { Request, Response } from 'express'
import { GoodByeController } from '../controller/GoodByeController'
import { LogInfo } from '../utils/logger'

//Router from express

let goodByeRouter = express.Router()

// htpp://localhost:8000/api/hello?nane=Gaston/
//GET :
goodByeRouter.route('/').get(async (req: Request, res: Response) => {
  // Obtain a query param
  let name: any = req?.query?.name
  LogInfo(`Query Param: ${name}`)
  //Conmtroller Instance to exectue method
  const controller: GoodByeController = new GoodByeController()
  //Obtain Response
  let response: any = await controller.getMessage(name)
  //Send to the client response
  return res.send(response)
})

export default goodByeRouter
