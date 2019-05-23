const app = require('../server/serverapp');
const request = require('supertest');

describe('Test GET methods', () => {
  test('Root path should respond with status code 200', (done) => {
    request(app).get('/').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
  test('/api/stocks endpoint should respond with an array', (done) => {
    request(app).get('/api/stocks').then((response) => {
      expect(response.statusCode).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      done();
    });
  });
  test('/api/stocks response should have necessary properties', (done) => {
    request(app).get('/api/stocks').then((response) => {
      expect(typeof response.body[0].id).toBe('number');
      expect(typeof response.body[0].ticker).toBe('string');
      expect(typeof response.body[0].current_price).toBe('number');
      expect(typeof response.body[0].average_price).toBe('number');
      expect(typeof response.body[0].week52high).toBe('number');
      expect(typeof response.body[0].week52low).toBe('number');
      done();
    });
  });
  
});