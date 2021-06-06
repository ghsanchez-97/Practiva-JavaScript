var estudiantes = [
    "María",
    "Josselyng",
    "Gabriela",
    "Hinata"
];
function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
};
while(estudiantes.length > 0){
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}