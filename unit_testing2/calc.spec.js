var chai = require('chai');
var sinon = require('sinon');
chai.use(require('chai-as-promised'));
chai.use(require('sinon-chai'));
var expect = chai.expect;

var calc = require('./calc');

var repository = {
    getUser: function(id){
        //get user from db
    }
}

describe('add', function () {
    it('test', function () {
        var spy = sinon.spy(console, 'log');
        calc.add(1, 2);

        expect(spy).to.have.been.called;
        expect(spy.args[0][0].name).to.equal('aaaaa');

    });

    it('test2', function () {
        var stub = sinon.stub(repository, 'getUser').returns({id: 12, name: 'Gaetan'});

        var result = repository.getUser();

        expect(result).to.deep.equal({id: 12, name: 'Gaetan'});
    })
});