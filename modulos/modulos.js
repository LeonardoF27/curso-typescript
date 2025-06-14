"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { areaRetangulo } from './retangulo.js'
const retangulo_js_1 = __importDefault(require("./retangulo.js"));
// import { areaCircuferencia } from './circuferencia.js'
const circuferencia_js_1 = require("./circuferencia.js");
console.log('Módulo carregando...');
console.log((0, retangulo_js_1.default)(7, 8));
console.log((0, circuferencia_js_1.areaCircuferencia)(2));
const { digaOi } = require('./novo.js');
console.log(digaOi('Ana'));
//# sourceMappingURL=modulos.js.map