import * as bodyParser from 'body-parser' 
import * as express from 'express'
import { Index } from '../src/routes/index'
import { APIRoute } from '../src/routes/api'
import { OrderRoute } from '../src/routes/order'
import { UserRoute } from '../src/routes/user'

class App {
  public app: express.Application
  public indexRoutes: Index = new Index()
  public userRoutes: UserRoute = new UserRoute()
  public apiRoutes: APIRoute = new APIRoute()
  public orderRoutes: OrderRoute = new OrderRoute()

  constructor() {
    this.app = express()
    this.app.use(bodyParser.json())
    this.indexRoutes.routes(this.app)
    this.userRoutes.routes(this.app)
    this.apiRoutes.routes(this.app)
    this.orderRoutes.routes(this.app)
  }
}

export default new App().app
