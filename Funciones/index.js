//Declativa

function Mifuncion() {
    return "Mi funcion"
}
console.log(Mifuncion());

//Expresion

var miFuncion = function(a,b) {
    return a+b;
}
console.log(miFuncion(2,4));

//Ejercio

function saludarEstudiantes(estudiante){
    console.log(estudiante);
}
saludarEstudiantes("Guy Sánchez");
console.log(saludarEstudiantes());

function saludarEstudiantes(estudiante){
    console.log(`Hola ${estudiante}`);
}
saludarEstudiantes("Guy Sánchez");

function sumar(a,b){
    var result = a + b;
    return result;
}
console.log(sumar(2,10));

