

var punto = new Punto();
var btnAgregar = document.getElementById("calcularDistancia");
btnAgregar.addEventListener("click", ()=>{
    var x = document.getElementById("x").value;
    var y = document.getElementById("y").value;

    var distanciaTotal= punto.calcularDistancia(x,y)
    document.getElementById("distancia").innerHTML=distanciaTotal;
});
