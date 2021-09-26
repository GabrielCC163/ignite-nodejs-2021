import { hash } from 'bcrypt'
import request from 'supertest'
import { Connection } from 'typeorm'
import { v4 as uuid } from 'uuid';

import { app } from '../../../../app'
import createConnection from '../../../../database'

let connection: Connection
describe('Show User Profile Controller', () => {
  beforeAll(async () => {
    connection = await createConnection()
    await connection.runMigrations()

    const id = uuid();
    const password = await hash('admin', 8);

    await connection.query(
      `INSERT INTO USERS(id, name, email, password)
      VALUES('${id}', 'usertest', 'user@test.com.br', '${password}')`
    );
  })

  afterAll(async () => {
    await connection.dropDatabase()
    await connection.close()
  })

  it('should be able to show a user profile', async () => {
    const { body: { token } } = await request(app)
      .post('/api/v1/sessions').send({
        email: 'user@test.com.br',
        password: 'admin',
      })

    const { status } = await request(app)
      .get('/api/v1/profile')
      .set({
        Authorization: `Bearer ${token}`,
      })

    expect(status).toBe(200)
  })

  it('should not be able to show user profile without a valid token', async () => {
    const { status } = await request(app).get('/api/v1/profile').set({
      Authorization: `Bearer invalid_token`,
    })

    expect(status).toBe(401)
  })
})
