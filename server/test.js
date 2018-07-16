const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./server');
const should = chai.should();

chai.use(chaiHttp);

describe('GET /', function() {

	it('Hello world is displayed', function(done) {
		chai.request(app).get('/api/hello').end((err, res) => {
			res.should.have.status(200);
			res.body.should.be.equal('Hello World');
			done();
		});
	});

});
