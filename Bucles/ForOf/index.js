var estudiantes = [
    "Juan",
    "Jose",
    "Pedro",
    "Gabriela"
];
function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}
for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}