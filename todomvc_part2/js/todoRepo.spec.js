/**
 * Created by Gaetan on 09/10/15.
 */



describe('todoRepo service', function(){

    var todoRepo;

    beforeEach(function(){
        todoRepo = new Todo();
        todoRepo.add('testitem');
    });

    describe('add test', function() {

        it('when adding item should add to the list with correct properties', function () {
            todoRepo.add('test');
            var list = todoRepo.getList();
            expect(list.length).toBe(2);
            expect(list[1].title).toBe('test');
            expect(list[1].completed).toBe(false);
        });
        it('when removing, list should be shorter', function () {
            todoRepo.remove(0);
            expect(todoRepo.getList().length).toBe(0);
        });
    });
    describe('toggle all completed status', function() {

        it('completed should return true after toggle', function () {
            todoRepo.toggleAll();
            console.log(todoRepo.get(0));
            expect(todoRepo.get(0).completed).toBe(true);
        });
    });
});