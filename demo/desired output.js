// avocado
const avocado = 'this tastes like avocado' 

module.exports = avocado

//banana
const banana = 'this tastes like banana' 

module.exports = banana

// caramel
const avocado = require('./avocado')
const banana = require('./banana')

console.log(avocado, banana);

const caramel = 'this tastes like caramel';
module.exports = caramel;

//entry
const caramel = require('./caramel')

console.log(caramel)