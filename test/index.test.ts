import supertest from 'supertest'
import type { MockInstance } from 'vitest'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import app from '../src/index'

describe('should validate redirect', () => {
  let logMock: MockInstance<(message?: any, ...optionalParams: any[]) => void>
  const server = app.listen()
  const request = supertest.agent(server)
  beforeEach(() => {
    logMock = vi.spyOn(console, 'log')
  })

  afterEach(() => {
    server.close()
    logMock.mockReset()
  })

  describe('when GET /posts', () => {
    it('should validate after redirect call', async () => {
      const response = await request
        .get('/')
      expect(response.status).toEqual(302)
      expect(response.redirect).toEqual(true)
      expect(logMock).toHaveBeenCalledTimes(4)
      expect(logMock.mock.calls[0]).toBeDefined()
    })
  })
})
