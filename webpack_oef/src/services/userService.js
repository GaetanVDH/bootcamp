'use strict'

class UserService{
    constructor(){

    }

    getById(){
        return {
            id: 123,
            name: 'Peter'
        }
    }

    getAll() {
        return[
            {id: 123, name: "Peter"},
            {id: 124, name: "Jos"},
            {id: 125, name: "Jan"}
        ]
    }
}

module.exports = new UserService();
