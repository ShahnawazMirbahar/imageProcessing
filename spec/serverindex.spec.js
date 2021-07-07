const Request = require('request');
require('../server/index');
require('../server/resize');

describe('server', () => {
  describe('GET /', () => {
    const data = {};
    beforeAll((done) => {
      Request.get('http://localhost:200/', (error, response, body) => {
        data.status = response.statusCode;
        data.body = body;
        done();
      });
    });
    it('status 200', () => {
      expect(data.status).toBe(200);
    });
    it('Body', () => {
      expect(data.body).toBe('<h1>Image does not Exist</h1>');
    });
  });
  describe('GET /', () => {
    const data = {};
    beforeAll((done) => {
      Request.get(
        'http://localhost:200/?name=fjord.jpg&format=jpg&width=600&height=300',
        (error, response, body) => {
          data.status = response.statusCode;
          data.body = body;
          done();
        }
      );
    });
    it('status 200', () => {
      expect(data.status).toBe(200);
    });
    it('Body', () => {
      expect(typeof data.body).toEqual('string');
    });
  });
});
