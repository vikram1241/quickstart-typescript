import * as bodyParser from 'body-parser' 
import * as express from 'express'
import * as swaggerUi from 'swagger-ui-express'
import { APIRoute } from '../src/routes/api'
import { Index } from '../src/routes/index'
import { OrderRoute } from '../src/routes/order'
import { UserRoute } from '../src/routes/user'
import swaggerDocument from '../swagger/swagger'

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
    const options = {
      explorer: true,
      swaggerUrl: 'http://localhost:3000/api-docs'
    }
    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));
  }
}

export default new App().app
