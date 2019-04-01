'use strict'

import * as chai from 'chai'
import chaiHttp = require('chai-http')
import 'mocha'
import app from '../../src/app'
import Order from '../../src/model/order'
import { OrderStatus } from '../../src/model/orderStatus'

chai.use(chaiHttp)

const expect = chai.expect

const order: Order = {
  // generic random value from 1 to 100 only for tests so far
  complete: false,
  id: 1,
  quantity: 1,
  shipDate: new Date(),
  status: OrderStatus.Placed,
  userId: 20,
}

describe('userRoute', () => {
  it('should respond with HTTP 404 status because there is no order', async () => {
    return chai
      .request(app)
      .get(`/store/orders/${order.id}`)
      .then(res => {
        expect(res.status).to.be.equal(404)
      })
  })
  it('should create a new order and retrieve it back', async () => {
    return chai
      .request(app)
      .post('/store/orders')
      .send(order)
      .then(res => {
        expect(res.status).to.be.equal(201)
        expect(res.body.userId).to.be.equal(order.userId)
        expect(res.body.complete).to.be.equal(false)
        order.id = res.body.id
      })
  })
  it('should return the order created on the step before', async () => {
    return chai
      .request(app)
      .get(`/store/orders/${order.id}`)
      .then(res => {
        expect(res.status).to.be.equal(200)
        expect(res.body.id).to.be.equal(order.id)
        expect(res.body.status).to.be.equal(order.status)
      })
  })
  it('should return the inventory for all users', async () => {
    return chai
      .request(app)
      .get(`/store/inventory`)
      .then(res => {
        expect(res.status).to.be.equal(200)
        expect(res.body[20].length).to.be.equal(1)
      })
  })
  it('should remove an existing order', async () => {
    return chai
      .request(app)
      .del(`/store/orders/${order.id}`)
      .then(res => {
        expect(res.status).to.be.equal(204)
      })
  })
  it('should return 404 when it is trying to remove an order because the order does not exist', async () => {
    return chai
      .request(app)
      .del(`/store/orders/${order.id}`)
      .then(res => {
        expect(res.status).to.be.equal(404)
      })
  })
})