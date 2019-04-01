import { NextFunction, Request, Response } from 'express'
import * as _ from 'lodash'
import logger from '../../applogger';
import { default as Order } from '../model/order'
import { OrderStatus } from '../model/orderStatus'

let orders: Array<Order> = []

export let getOrder = (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id
  const order = orders.find(obj => obj.id === Number(id))
  const httpStatusCode = order ? 200 : 404
  return res.status(httpStatusCode).send(order)
}

export let addOrder = (req: Request, res: Response, next: NextFunction) => {
  const order: Order = {
    // generic random value from 1 to 100 only for tests so far
    complete: false,
    id: Math.floor(Math.random() * 100) + 1,
    quantity: req.body.quantity,
    shipDate: req.body.shipDate,
    status: OrderStatus.Placed,
    userId: req.body.userId,
  }
  orders.push(order)
  logger.debug("This is checking the logger ######################################");
  return res.status(201).send(order)
}

export let removeOrder = (req: Request, res: Response, next: NextFunction) => {
  const id = Number(req.params.id)
  const orderIndex = orders.findIndex(item => item.id === id)

  if (orderIndex === -1) {
    return res.status(404).send()
  }

  orders = orders.filter(item => item.id !== id)

  return res.status(204).send()
}

export let getInventory = (req: Request, res: Response, next: NextFunction) => {
  const grouppedOrders = _.groupBy(orders, 'userId')
  return res.status(200).send(grouppedOrders)
}