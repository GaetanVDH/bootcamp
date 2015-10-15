var chai = require('chai');
chai.use(require('chai-as-promised'));
var expect = chai.expect;

var myService = require('./myService');

xdescribe('myService', function () {
    it('test', function (done) {
        var promise = myService.find('query');
        expect(promise)
            .to.eventually.equal('abc')
            .notify(done);

        //myService.find('query')
        //    .then(function (data) {
        //        expect(data).to.equal('abc');
        //        done();
        //    })
        //    .catch(function(err){
        //        done(err);
        //    });
    });

    xit('should fail when q empty', function (done) {
        var promise = myService.find('query');
        expect(promise)
            .to.be.rejectedWith('bad value')
            .notify(done);
    });
});