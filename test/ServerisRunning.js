const chai = require('chai');

const chaihttp = require('chai-http');
const app = require('../server')

chai.should()
chai.use(chaihttp)
describe("Make sure to return 200", () => {
    it("its returning 200", (done) => {
        chai.request(app).get('/').end((err, res) => {
            res.should.have.status(200)
            res.body.should.be.a('object')
            done()
        })
    })
})