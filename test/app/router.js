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


    describe('POST /validation', function() {
        it('Should response 200', function(done) {
            request(app)
            .post('/validation')
            .attach('htmlFile', './fixtures/template.html')
            .send()
            .expect(200)
            .end(function(err, res) {

                done(err);
            });
        });
    });
    
});
