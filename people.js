const fullName = require('./names.js')
const hobbies = require('./hobbies.js')


function people(){
    const person = {
        fullName :('simone' + ' ' + 'poli'),
        hobbies : hobbies ('bere','mangiare','dormire')
    }
    return person
}

console.log(people())