const fullName = require('./names.js')
const hobbies = require('./hobbies.js')


function people(){
    return fullName + hobbies
}

console.log(people)