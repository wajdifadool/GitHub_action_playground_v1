// __tests__/sampleController.test.js
const request = require('supertest')
const express = require('express')
const sampleController = require('../controllers/sample')

const app = express()

// Setup routes for testing
app.get('/sample', sampleController.getSample)
app.get('/samples', sampleController.getSamples)
app.post('/sample', sampleController.postSample)

describe('Sample Controller', () => {
  // Test getSample method
  it('should return a success message for getSample', async () => {
    const response = await request(app).get('/sample')

    expect(response.status).toBe(200)
    expect(response.body.success).toBe(true)
    expect(response.body.message).toBe('Sample endpoint working!')
  })

  // Test getSamples method
  it('should return a success message and data for getSamples', async () => {
    const response = await request(app).get('/samples')

    expect(response.status).toBe(200)
    expect(response.body.success).toBe(true)
    expect(response.body.message).toBe('Sample endpoint working!')
    expect(response.body.data).toBeInstanceOf(Array)
    expect(response.body.data[0]).toHaveProperty('id')
    expect(response.body.data[0]).toHaveProperty('object')
  })

  // Test postSample method
  it('should return a success message for postSample', async () => {
    const response = await request(app).post('/sample')

    expect(response.status).toBe(200)
    expect(response.body.success).toBe(true)
    expect(response.body.message).toBe('added sample')
    expect(response.body.data).toBeInstanceOf(Array)
    expect(response.body.data[0]).toHaveProperty('key')
  })
})
