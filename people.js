const fullName = require('./names.js')
const hobbies = require('./hobbies.js')


function people(){
    const full_Name = fullName('simone','poli')
    const person = {
        fullName : full_Name.firstName + ' ' + full_Name.lastName,
        hobbies : hobbies ('bere','mangiare','dormire')
    }
    return person
}

console.log(people())