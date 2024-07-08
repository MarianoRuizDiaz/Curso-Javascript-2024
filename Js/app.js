function calcularNotaFinal() {
    function obtenerCantidadAlumnos() {
        let cantidadAlumnos = parseInt(prompt("Ingrese la cantidad de alumnos a evaluar:"));
        if (isNaN(cantidadAlumnos) || cantidadAlumnos <= 0) {
            alert("Por favor, ingrese un número válido y mayor que cero.");
            console.log(cantidadAlumnos);
            return obtenerCantidadAlumnos(); 
        }
        return cantidadAlumnos;
    }
    let cantidadAlumnos = obtenerCantidadAlumnos();
    let sumaNotas = 0;

    function evaluarAlumno(contador, aprobados = 0, reprobados = 0) {
        if (contador <= cantidadAlumnos) {
            let nombreAlumno = prompt(`Ingrese el nombre del alumno ${contador}:`);
            console.log(nombreAlumno); 
            let nota = solicitarNotaAlumno(nombreAlumno);
            if (nota >= 5) {
                aprobados++;
            } else {
                reprobados++;
            }
            sumaNotas = sumaNotas + nota;
            evaluarAlumno(contador + 1, aprobados, reprobados); 
        } else {
            let notaFinal = sumaNotas / cantidadAlumnos; 
            notaFinal = parseFloat(notaFinal.toFixed(2)); 
            let situacion = (notaFinal >= 5) ? "Aprobados" : "Reprobados";
            let mensaje = `La nota final promedio del grupo es: ${notaFinal.toFixed(2)} (${situacion})`;
            console.log(mensaje); 
            console.log(`Cantidad de alumnos aprobados: ${aprobados}`);
            console.log(`Cantidad de alumnos reprobados: ${reprobados}`);
        }
    }
    evaluarAlumno(1);
}
function solicitarNotaAlumno(nombre) {
    let nota = parseFloat(prompt(`Ingrese la nota del alumno ${nombre}:`));
    if (isNaN(nota) || nota < 1 || nota > 10) {
        alert("Por favor, ingrese una nota válida entre 1 y 10.");
        console.log(nota);
        return solicitarNotaAlumno(nombre); 
    }
    return nota;
}
calcularNotaFinal();



       

    





