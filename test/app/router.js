process.env.NODE_ENV = 'local';
var request = require('supertest');
var app = require('./../../app/express');

describe('Testing for Router', function() {
    
    describe('GET /', function() {
        it('Should response text', function(done) {
            request(app)
                .get('/')
                .send()
                .expect(200)
                .end(function(err, res) {
                    expect(res).to.have.property('text');
                    expect(res.text).equal('hello world in port 3000');
                    done(err);
                });
        });
    });
    
});
