function fullName (firstName,lastName){
    const person = {
        firstName : firstName,
        lastName : lastName
    }
    return person
}

console.log(fullName('artur', 'mamedov'))


module.exports = fullName