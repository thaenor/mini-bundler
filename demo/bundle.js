
(function() { const banana = 'this tastes like banana' 

module.exports = banana }());
(function() { const avocado = 'this tastes like avocado' 

module.exports = avocado }());
(function() { const avocado = require('./avocado')
const banana = require('./banana')

console.log(avocado, banana);

const caramel = 'this tastes like caramel';
module.exports = caramel; }());
const caramel = require('./caramel')

console.log(caramel)