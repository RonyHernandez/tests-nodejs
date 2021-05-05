const app = require('../src/server')
const request = require('supertest')
test('server test', async () => {
    const res = await request(app)
      .get('/')
    expect(res.body.length).toBe(3)
});