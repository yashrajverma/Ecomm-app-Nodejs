const chai = require('chai');

const chaihttp = require('chai-http');
const app = require('../server')

chai.should()
chai.use(chaihttp)

describe("Make sure it will return 200", () => {
    it('it will return 200', (done) => {
        chai.request(app)
    })
})