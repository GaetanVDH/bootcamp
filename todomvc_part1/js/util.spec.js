/**
 * Created by Gaetan on 09/10/15.
 */

describe('utilities service', function(){
    describe('pluralize test', function(){
        it('should return testers for 2 + tester', function(){
            var result = util.pluralize(2, 'tester');
            expect(result).toBe('testers');
        }),
        it('should return testers for 1 + tester', function(){
            var result = util.pluralize(1, 'tester');
            expect(result).toBe('tester');
        })
    });

    describe('uuid test', function(){
        it('should return length = to 36', function(){
            var result = util.uuid();
            expect(result.length).toBe(36);
        })
    });
});