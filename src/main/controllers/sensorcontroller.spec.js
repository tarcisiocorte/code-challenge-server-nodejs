const request = require('supertest')

const server = require('../../main/middlewares/index')

describe('Temperature', () => {
  it('should be able to get a temperature by id', async () => {
    const response = await request(server).get(
      `/temperature/2`
    )
    expect(response.status).toBe(200)
  })

  it('should not be able to get a temperature if id does not exist', async () => {
    const response = await request(server).get(
      `/temperature/non-existing-id`
    )
    expect(response.status).toBe(200)
  })
})
