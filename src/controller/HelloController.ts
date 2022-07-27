import { Get,Query,Route,Tags } from 'tsoa'
import { BasiscResponse } from './types'
import { IHelloController } from './interfaces'
import { LogSuccess } from '../utils/logger'

@Route("/api/hello")
@Tags("HelloController")
export class HelloController implements IHelloController {
  /**
   * Endpoint to retreive a Message "Hello{name}" in JSON
   * @param {string | undefined}name Name os user to be greeted
   * @returns {BasicResponse}Promise of Basicresponse
   */
  @Get("/")
  public async getMessage(@Query()name?: string | undefined): Promise<BasiscResponse> {
    LogSuccess('{[/api/hello] Get Request}')
    return {
      message: `Hello ${name || 'world'}`,
    }
  }
}
