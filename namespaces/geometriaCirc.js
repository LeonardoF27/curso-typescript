"use strict";
var Geometria;
(function (Geometria) {
    let Area;
    (function (Area) {
        const PI = 3.14;
        function areaCircuferencia(raio) {
            return PI * Math.pow(raio, 2);
        }
        Area.areaCircuferencia = areaCircuferencia;
    })(Area = Geometria.Area || (Geometria.Area = {}));
})(Geometria || (Geometria = {}));
//# sourceMappingURL=geometriaCirc.js.map