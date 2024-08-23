import supertest from 'supertest'
import { bench, describe } from 'vitest'
import app from '../src/index'

describe('should benchmark /sync and /async endpoint', () => {
  const server = app.listen()
  const request = supertest.agent(server)

  bench('/sync', async () => {
    await request.get('/sync')
  })

  bench('/async', async () => {
    await request.get('/async')
  })
})
