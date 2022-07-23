import express, { Request, Response } from 'express'
import { HelloController } from '../controller/HelloController'
import { LogInfo } from '../utils/logger'

//Router from express

let helloRouter = express.Router()

// htpp://localhost:8000/api/hello?nane=Gaston/
//GET :
helloRouter.route('/').get(async (req: Request, res: Response) => {
  // Obtain a query param
  let name: any = req?.query?.name
  LogInfo(`Query Param: ${name}`)
  //Conmtroller Instance to exectue method
  const controller: HelloController = new HelloController()
  //Obtain Response
  const response: any = await controller.getMessage(name)
  //Send to the client response
  return res.send(response)
})

export default helloRouter
