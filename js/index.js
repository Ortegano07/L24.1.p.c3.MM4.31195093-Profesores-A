//PROFESORES-A
//En la Universidad se contratan los profesores por categorías (1=Instructor, 2=Asistente,
//3=Agregado, 4=Asociado, 5=Titular), también se conoce de cada profesor: su cédula, nombre y
//sexo (F - M).
//Considerando que los datos de los profesores se cargan en un array de objetos (Ej.
//estructura de cada objeto: {categoría: 1, nombre: ‘Ana’, sexo: ‘F’}) se requiere una función que
//retorne otro arreglo de objetos con solamente los profesores de una categoría dada.
//Función: profesoresCategoria.
//Parámetros: profesores (array de objetos profesor), categoria (un número).
//Retorno: array de objetos profesor que pertenecen a la categoría indicada. 

let profesores = [
    {categoría: 1, nombre: 'Ana', sexo: 'F'},
    {categoría: 1, nombre: 'Pablo', sexo: 'M'},
    {categoría: 2, nombre: 'Maria', sexo: 'F'},
    {categoría: 2, nombre: 'Pedro', sexo: 'M'},
    {categoría: 3, nombre: 'Luisa', sexo: 'F'},
    {categoría: 3, nombre: 'Juan', sexo: 'M'},
    {categoría: 4, nombre: 'Paola', sexo: 'F'},
    {categoría: 4, nombre: 'Andres', sexo: 'M'},
    {categoría: 5, nombre: 'Carmen', sexo: 'F'},
    {categoría: 5, nombre: 'Luis', sexo: 'M'}
];

let profesoresCategoria = (profesores, categoria) => {
    return profesores.filter(profesor => profesor.categoría == categoria);
}

let salida = document.getElementById('salida');
let profesoresCategoria4 = profesoresCategoria(profesores, 4);
salida.innerHTML = "Profesores de la categoria 4: <br>";
profesoresCategoria4.forEach(profesores => {
    salida.innerHTML += `Nombre del profesor: ${profesores.nombre}  -  Sexo: ${profesores.sexo} <br>`;
});