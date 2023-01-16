var variable = 'global'
var otherVariable = 'global'

function myFuction() {
    var variable = 'local'
    return variable
}

function myOtherFuction() {
    otherVariable = 'local'
    return otherVariable
}

console.log(variable, 'variable')
console.log(otherVariable, 'otherVariable')
console.log(myFuction(), 'myFunction')
console.log(myOtherFuction(), 'myOtherFunction')