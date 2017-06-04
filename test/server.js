'use strict';

//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

//Our parent block
describe('Email Service API', () => {

  // Test the /GET route
  describe('/GET', () => {

    it('Home - it should return status code 200', (done) => {
      chai.request(server)
          .get('/')
          .end((err, res) => {
              res.should.have.status(200);
              done();
          });
    });

    it('Send Email - it should return status code 200', (done) => {
      chai.request(server)
          .get('/send-email')
          .end((err, res) => {
              res.should.have.status(200);
              done();
          });
    });

  });

  // Test the /GET route
  describe('/POST', () => {

    it('Send Email - it should return status code 200', (done) => {
      chai.request(server)
          .post('/send-email')
          .end((err, res) => {
              res.should.have.status(200);
              done();
          });
    });

  });

});
