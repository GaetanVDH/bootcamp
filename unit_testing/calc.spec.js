describe('calc service', function(){
    describe('adding', function(){
        beforeEach(function(){
            console.log('before');
        });

        afterEach(function(){
            console.log('after');
        });

        it("should return 2 for 1 + 1", () => {
            var result = calc.add(1, 1);
            expect(result).toBe(2);
        });

        it("should return 400 for 100 + 300", () => {
            var result = calc.add(100, 300);
            expect(result).toBe(400);
        });

        it("should return 10 for -10 + 20", () => {
            var result = calc.add(-10, 20);
            expect(result).toBe(10);
        });

        it("should return 10 for 10", () => {
            var result = calc.add(10);
            expect(result).toBe(10);
        })
    });
    describe('multiply', function(){
        it("should return 1 for 1 * 1", () => {
            var result = calc.multiply(1, 1);
            expect(result).toBe(1);
        });

        it("should return 300 for 100 * 3", () => {
            var result = calc.multiply(100, 3);
            expect(result).toBe(300);
        });

        it("should return 200 for 10 * 20", () => {
            var result = calc.multiply(10, 20);
            expect(result).toBe(200);
        })
    })
});
