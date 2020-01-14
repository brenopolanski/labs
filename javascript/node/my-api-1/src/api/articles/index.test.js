import request from 'supertest'
import { masterKey, apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Articles } from '.'

const app = () => express(apiRoot, routes)

let articles

beforeEach(async () => {
  articles = await Articles.create({})
})

test('POST /articles 201 (master)', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ access_token: masterKey, title: 'test', content: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.title).toEqual('test')
  expect(body.content).toEqual('test')
})

test('POST /articles 401', async () => {
  const { status } = await request(app())
    .post(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /articles 200 (master)', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
    .query({ access_token: masterKey })
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /articles 401', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /articles/:id 200 (master)', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${articles.id}`)
    .query({ access_token: masterKey })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(articles.id)
})

test('GET /articles/:id 401', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}/${articles.id}`)
  expect(status).toBe(401)
})

test('GET /articles/:id 404 (master)', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
    .query({ access_token: masterKey })
  expect(status).toBe(404)
})

test('PUT /articles/:id 200 (master)', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${articles.id}`)
    .send({ access_token: masterKey, title: 'test', content: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(articles.id)
  expect(body.title).toEqual('test')
  expect(body.content).toEqual('test')
})

test('PUT /articles/:id 401', async () => {
  const { status } = await request(app())
    .put(`${apiRoot}/${articles.id}`)
  expect(status).toBe(401)
})

test('PUT /articles/:id 404 (master)', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ access_token: masterKey, title: 'test', content: 'test' })
  expect(status).toBe(404)
})

test('DELETE /articles/:id 204 (master)', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${articles.id}`)
    .query({ access_token: masterKey })
  expect(status).toBe(204)
})

test('DELETE /articles/:id 401', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${articles.id}`)
  expect(status).toBe(401)
})

test('DELETE /articles/:id 404 (master)', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
    .query({ access_token: masterKey })
  expect(status).toBe(404)
})
