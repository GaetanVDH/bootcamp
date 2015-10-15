var chai = require('chai');
var sinon = require('sinon');
var expect = chai.expect;
chai.use(require('sinon-chai'));
var mailSystem = require('./mailSystem');
var smtpTransport = require('./smtpTransport');

describe('module', function() {

    var sandbox;

    beforeEach(function() {
        sandbox = sinon.sandbox.create();
    });

    afterEach(function () {
        sandbox.restore();
    });

    it('send should have been called', function() {
        var stub = sandbox.stub(smtpTransport, 'send');
        mailSystem.sendWelcomeMail('peter.cosemans@gmail.com', 'Welcome to...', { name: 'peter'});
        expect(stub).to.have.been.called;
    });

    it('args should be set for send', function () {
        var spy = sandbox.stub(smtpTransport, 'send');
        mailSystem.sendWelcomeMail('peter.cosemans@gmail.com', 'Welcome to...', { name: 'peter'});
        var mail = spy.args[0][0];
        expect(mail).to.exist;
        expect(mail.toAddress).to.equal('peter.cosemans@gmail.com');
        expect(mail.fromAddress).to.be.a('string');
        expect(mail.subject).to.equal('Welcome to...');
        expect(mail.body).to.be.equal('Hello peter, this mail is concerning...');
    });

    it('should throw error when to is undefined', function(){
        var fn = mailSystem.sendWelcomeMail;
        fn(undefined, 'Welcome to...', { name: 'peter'});;
        expect(fn).to.throw(Error);
    })
});

