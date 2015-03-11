process.env.NODE_ENV = 'local';
var request = require('supertest');
var app = require('./../../app/express');

describe('Testing for Router', function() {
    
    describe('GET /', function() {
        it('Should response Forbidden', function(done) {
            request(app)
                .get('/')
                .send()
                .expect(403)
                .end(function(err, res) {
                    expect(res).to.have.property('text');
                    expect(res.text).equal('Forbidden');
                    done(err);
                });
        });
    });
    
});
