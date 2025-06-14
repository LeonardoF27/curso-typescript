// import { areaRetangulo } from './retangulo.js'
import  retangulo from './retangulo.js'
// import { areaCircuferencia } from './circuferencia.js'
import { areaCircuferencia as circ } from './circuferencia.js'

console.log('Módulo carregando...')
console.log(retangulo(7, 8))
console.log(circ(2))

const { digaOi } = require('./novo.js')
console.log(digaOi('Ana'))