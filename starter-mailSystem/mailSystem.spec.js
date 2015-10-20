var chai = require('chai');
var sinon = require('sinon');
chai.use(require('chai-as-promised'));
chai.use(require('sinon-chai'));
var expect = chai.expect;

// subject under test
var sut = require('./mailSystem');

// dependencies
var smtpTransport = require('./smtpTransport');

describe('mailSystem', function() {

    var fromAddress, toAddress, model, sandbox, sandbox;
    beforeEach(function() {
        // create sandbox for spies and stubs
        sandbox = sinon.sandbox.create();

        // test objects to re-use for later
        fromAddress = 'noreply@euri.com';
        toAddress = 'peter.cosemans@euri.com';
        subject = "Welcome to...";
        model = {
            name: 'peter'
        };
    });

    afterEach(function() {
        // make sure all spies and stubs are removed at the end
        sandbox.restore();
    });

    it('should send correct mail with smtp', function() {
        // arrange
        var stub = sandbox.stub(smtpTransport, 'send');

        // act
        sut.sendWelcomeMail(toAddress, subject, model);

        // assert
        expect(stub).to.have.been.calledWith({
            toAddress: toAddress,
            body: `Hello ${model.name}, this mail is concerning...`,
        fromAddress: 'noreply@euri.com',
            subject: subject
    });
});

    it('should send correct mail with smtp', function() {
        // arrange
        var stub = sandbox.stub(smtpTransport, 'send');

    });
});