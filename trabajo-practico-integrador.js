/* TRABAJO PRACTICO INTEGRADOR - BIBLIOTECA VIRTUAL

INTEGRANTES:
Sofia Fischer
Maryerika Rivas
Yanet Montoya

El mismo fue subido al repositorio de GitHub: https://github.com/shofischer/Trabajo_Practico_Integrador
*/

// 1. Estructura de Datos

/*a) Crear un array de objetos llamado libros que contenga al menos 10
libros. Cada libro debe tener las siguientes propiedades:
✓ id (número)
✓ título (string),
✓ autor (string),
✓ año (número),
✓ género (string),
✓ disponible (booleano).

b) Crear un array de objetos llamado usuarios con al menos 5 usuarios.
Cada usuario debe tener:
✓ id (número)
✓ nombre (string)
✓ email (string)
✓ librosPrestados (array de ids de libros)*/

// Creamos los arrays de objetos libros y usuarios con las propiedades solicitadas, hago que todos los libros esten disponibles 
// y que ningun usuario tenga libros prestados al inicio.

let libros = [
    { id: 1, titulo: "Estudio en escarlata", autor: "Arthur Conan Doyle", anio: 1887, genero: "Novela", disponible: true },
    { id: 2, titulo: "1984", autor: "George Orwell", anio: 1949, genero: "Distopía", disponible:true },
    { id: 3, titulo: "Las aventuras de sherlock holmes", autor: "Arthur Conan Doyle", anio: 1892, genero: "Novela", disponible: true },
    { id: 4, titulo: "Rebelion en la granja", autor: "George Orwell", anio: 1945, genero: "Novela", disponible: true },
    { id: 5, titulo: "Moby Dick", autor: "Herman Melville", anio: 1851, genero: "Aventura", disponible: true },
    { id: 6, titulo: "La felicidad", autor: "Gabriel Rolon", anio: 2023, genero: "Autoayuda", disponible: true },
    { id: 7, titulo: "El sabueso de los baskerville", autor: "Arthur Conan Doyle", anio: 1902, genero: "Novela", disponible: true },
    { id: 8, titulo: "El Principito", autor: "Antoine de Saint-Exupéry", anio: 1943, genero: "Fábula", disponible: true },
    { id: 9, titulo: "Crimen y Castigo", autor: "Fiódor Dostoyevski", anio: 1866, genero: "Filosófica", disponible: true },
    { id: 10, titulo: "La Divina Comedia", autor: "Dante Alighieri", anio: 1320, genero: "Épica", disponible: true }
];

let usuarios = [
    { id: 1, nombre: "Sofia Fischer", email: "sofia.fischer@example.com", librosPrestados: [] },
    { id: 2, nombre: "Maryerika Rivas", email: "maryerika.rivas@example.com", librosPrestados: [] },
    { id: 3, nombre: "Yanet Montoya", email: "yanet.montoya@example.com", librosPrestados: [] },
    { id: 4, nombre: "German Rumbo", email: "german.rumbo@example.com", librosPrestados: [] },
    { id: 5, nombre: "Maria del Carmen Cattaneo", email: "maria.cattaneo@example.com", librosPrestados: [] }
];

// Mostramos por consola los arrays iniciales de libros y usuarios:
console.log("Lista de libros:", libros);
console.log("Lista de usuarios:", usuarios);


// 2 . Funciones de Gestión de Libros
/*
a) Implementar una función agregarLibro(id, titulo, autor, anio, genero)
que agregue un nuevo libro al array libros.*/

function agregarLibro(id, titulo, autor, anio, genero) {    
    const libroExistente = libros.find(libro => libro.id === id); 
    if (libroExistente) { // Primero verificamos si el ID del libro ya existe
        console.log(`El libro con ID ${id} ya existe.`);
        return;
    }
    
    const nuevoLibro = { id, titulo, autor, anio, genero, disponible: true };
    libros.push(nuevoLibro); // Para despues poder agregar el nuevo libro, en este caso usamos el metodo push
    console.log(`Libro "${titulo}" agregado exitosamente.`); // Mensaje de confirmacion por consola
}

//Solo para divertirnos con nuestro codigo, agregamos dos libros mas

agregarLibro(11, "Plantar un libro, escribir un codigo y mirar al vacio (en la parrilla)", "Sofia Fischer", 2025, "introspectivo");
agregarLibro(12, "JavaScript: undefined is not a function", "MaryeriKa Rivas", 2025, "introspectivo");

// Para probar que no se puede agregar un libro con ID repetido
agregarLibro(1, "Libro repetido", "Autor repetido", 2025, "introspectivo");
console.log("Lista de libros actualizada:", libros); // Mostramos la lista actualizada de libros por consola

/*
b) Crear una función buscarLibro(criterio, valor) que permita buscar
libros por título, autor o género utilizando el algoritmo de búsqueda
lineal.*/

function buscarLibro(criterio, valor) {
    const libro = libros.find(libro => libro[criterio] === valor);
    if (libro) { // Si encontramos el libro, lo mostramos por consola
        console.log(`Libro ${libro.titulo} encontrado:`, libro);
    } else {
        console.log(`Libro ${criterio}, ${valor} no encontrado.`);
    }
}
// En este caso probamos la funcion buscarLibro con diferentes valores como se muestra en las siguientes lineas:
buscarLibro("titulo", "1984");
buscarLibro("autor", "Arthur Conan Doyle");
buscarLibro("genero", "introspectivo");
buscarLibro("titulo", "Libro que no existe"); // para probar que no se encuentra un libro que no existe

/*
c) Desarrollar una función ordenarLibros(criterio) que ordene los libros
por título o año utilizando el algoritmo de ordenamiento burbuja
(bubble sort) y luego muestre los libros ordenados en la consola.*/

function ordenarLibros(criterio) {
    libros.sort((a, b) => { // Usamos el metodo sort para ordenar los libros
        if (criterio === "titulo") { // Si el criterio es titulo, usamos localeCompare para comparar los titulos
            return a.titulo.localeCompare(b.titulo);
        } else if (criterio === "anio") {
            return a.año - b.año;
        }
    });
    console.log("Libros ordenados por", criterio + ":", libros); // Mostramos los libros ordenados por consola
}

// Probamos la funcion ordenarLibros con los dos criterios posibles:
ordenarLibros("titulo");
ordenarLibros("anio");

/*
d) Desarrollar una función borrarLibro(id) que elimine el libro que se le
pase por parámetro.*/

function borrarLibro(id) {
    const indice = libros.findIndex(libro => libro.id === id);
    if (indice !== -1) {
        const libro = libros[indice];
        libros.splice(indice, 1);
        console.log(`El libro con ID ${id} , ${libro.titulo} ha sido eliminado exitosamente.`);
    } else {
        console.log(`El libro con ID ${id} no ha sido encontrado.`);
    }
}
 // Probamos la funcion borrarLibro con un ID que existe y otro que no existe, pero lo comentamos para no borrar los libros del array
//borrarLibro(3); // para probar que se puede borrar un libro que existe
//borrarLibro(99); // para probar que no se puede borrar un libro que no existe

//3. Gestión de Usuarios

/*a) Implementar una función registrarUsuario(nombre, email) que
agregue un nuevo usuario al array usuarios.*/

function registrarUsuario(nombre, email) {
    // Primero verificamos si el email del usuario ya existe
    const usuarioExistente = usuarios.find(usuario => usuario.email === email);
    if (usuarioExistente) { // Si el usuario ya existe, mostramos un mensaje de error por consola
        console.log(`El usuario con email ${email} ya existe.`); // Mensaje de error por consola
        return;
    }
    // Para despues poder agregar el nuevo usuario
    const nuevoUsuario = { id: usuarios.length + 1, nombre, email, librosPrestados: [] };
    usuarios.push(nuevoUsuario);
    console.log(`Usuario "${nombre}" registrado exitosamente con el mail ${email} y ID ${nuevoUsuario.id}.`); // Mensaje de confirmacion por consola
}

// Probamos la funcion registrarUsuario con un usuario nuevo y otro con email repetido

/*
b) Implementar una función mostrarTodosLosUsuarios() que me
devuelva el array completo de usuarios.*/

function mostrarTodosLosUsuarios() {
    console.log("Lista de todos los usuarios:", usuarios);
    return usuarios;
}
mostrarTodosLosUsuarios();

/*
c) Crear una función buscarUsuario(email) que devuelva la información
de un usuario dado su email.*/

function buscarUsuario(email) {
    const usuario = usuarios.find(usuario => usuario.email === email);
    if (usuario) {
        console.log("Usuario encontrado:", usuario);
    } else {
        console.log("Usuario no encontrado.");
    }
}

buscarUsuario("francoguevara93@gmail.com"); // a ver si encuentra al profe
buscarUsuario("franco.guevara@example.com"); // que pasa si no existe el mail

/*
d) Implementar una función borrarUsuario(nombre, email) que elimine el
usuario seleccionado.*/

function borrarUsuario(nombre, email) {
    const indice = usuarios.findIndex(usuario => usuario.nombre === nombre && usuario.email === email);
    if (indice !== -1) {
        usuarios.splice(indice, 1);
        console.log(`Usuario "${nombre}" eliminado exitosamente.`);
    } else {
        console.log(`Usuario "${nombre}" no encontrado.`);
    }
}

borrarUsuario("Maria del Carmen Cattaneo", "maria.cattaneo@example.com"); // Elimino a mi mama, porque no quiere estar en mi codigo
borrarUsuario("Usuario Inexistente", "usuario.inexistente@example.com"); // Intento eliminar un usuario que no existe
mostrarTodosLosUsuarios(); // muestro la lista actualizada de usuarios

//4. Sistema de Préstamos

/*a) Desarrollar una función prestarLibro(idLibro, idUsuario) que marque
un libro como no disponible y lo agregue a la lista de libros prestados
del usuario.*/

function prestarLibro(idLibro, idUsuario) {
    const libro = libros.find(libro => libro.id === idLibro);
    const usuario = usuarios.find(usuario => usuario.id === idUsuario);

    if (!libro) { // Verificamos si el libro y el usuario existen
        console.log(`El libro con ID ${idLibro} no existe.`); // Si no existe, mostramos un mensaje de error por consola
        return;
    }
    if (!usuario) { // Si no existen, mostramos un mensaje de error por consola
        console.log(`El usuario con ID ${idUsuario} no existe.`); // Mensaje de error por consola
        return;
    }
    if (!libro.disponible) { // Verificamos si el libro esta disponible
        console.log(`El libro "${libro.titulo}" no está disponible para préstamo.`); // Si no esta disponible, mostramos un mensaje de error por consola
        return;
    }

    libro.disponible = false; // Marcamos el libro como no disponible
    usuario.librosPrestados.push(idLibro); // Agregamos el ID del libro a la lista de libros prestados del usuario
    console.log(`El libro "${libro.titulo}" ha sido prestado a ${usuario.nombre}.`);
}

// Probamos la funcion prestarLibro con diferentes casos:

prestarLibro(2, 1); // Prestamos el libro 1984 a Sofia Fischer
prestarLibro(3, 2); // Prestamos el libro Las aventuras de sherlock holmes a Maryerika Rivas
prestarLibro(11, 5); // Prestamos el libro Plantar un libro, escribir un codigo y mirar al vacio (en la parrilla) a Franco Guevara
prestarLibro(2, 3); // intento prestar el libro 1984 que ya esta prestado
prestarLibro(99, 1); // intento prestar un libro que no existe
prestarLibro(1, 99); // intento prestar un libro a un usuario que no existe
mostrarTodosLosUsuarios();

console.log("Lista de libros actualizada:", libros); // Mostramos la lista actualizada de libros por consola
mostrarTodosLosUsuarios(); // Mostramos la lista actualizada de usuarios por consola

/*
b) Implementar una función devolverLibro(idLibro, idUsuario) que
marque un libro como disponible y lo elimine de la lista de libros
prestados del usuario.*/

function devolverLibro(idLibro, idUsuario) {
    const libro = libros.find(libro => libro.id === idLibro);
    const usuario = usuarios.find(usuario => usuario.id === idUsuario);
    if (!libro) {
        console.log(`Libro con ID ${idLibro} no encontrado.`);
        return;
    }
    if (!usuario) {
        console.log(`Usuario con ID ${idUsuario} no encontrado.`);
        return;
    }
    if (libro.disponible) {
        console.log(`El libro "${libro.titulo}" no está prestado.`);
        return;
    }
    libro.disponible = true;
    usuario.librosPrestados = usuario.librosPrestados.filter(libro => libro.id !== idLibro);
    console.log(`Libro "${libro.titulo}" devuelto por ${usuario.nombre} exitosamente.`);
}   

// Probamos la funcion devolverLibro con diferentes casos:

devolverLibro(2, 1); // Devuelvo el libro 1984 de Sofia Fischer porque ya lo lei y me siento observada
devolverLibro(2, 1); // intento devolver el libro 1984 que ya fue devuelto
devolverLibro(99, 1); // intento devolver un libro que no existe
devolverLibro(1, 99); // intento devolver un libro de un usuario que no existe
mostrarTodosLosUsuarios();

console.log("Lista de libros actualizada:", libros); // Mostramos la lista actualizada de libros por consola
mostrarTodosLosUsuarios(); // Mostramos la lista actualizada de usuarios por consola        

//5. Reportes
/*  a) Crear una función generarReporteLibros() que utilice métodos
avanzados de arrays (.map(), .filter(), .reduce()) para generar un
reporte con la siguiente información:
✓ Cantidad total de libros.
✓ Cantidad de libros prestados.
✓ Cantidad de libros por género.
✓ Libro más antiguo y más nuevo*/

function generarReporteLibros() { // Usamos metodos avanzados de arrays para generar el reporte solicitado

    const totalLibros = libros.length;
    const librosPrestados = libros.filter(libro => !libro.disponible).length; // Usamos filter para contar los libros que no estan disponibles
    const cantidadPorGenero = libros.reduce((acc, libro) => { // Usamos reduce para contar la cantidad de libros por genero
        acc[libro.genero] = (acc[libro.genero] || 0) + 1;
        return acc;
    }, {});
    const libroMasAntiguo = libros.reduce((antiguo, libro) => { // Usamos reduce para encontrar el libro mas antiguo y el mas nuevo
        return (antiguo.anio < libro.anio) ? antiguo : libro;
    });
    const libroMasNuevo = libros.reduce((nuevo, libro) => { // Usamos reduce para encontrar el libro mas nuevo
        return (nuevo.anio > libro.anio) ? nuevo : libro;
    });

    // Mostramos el reporte por consola de la siguiente manera:
    console.log("Reporte de Libros:");
    console.log(`Cantidad total de libros: ${totalLibros}`); // Mostramos la cantidad total de libros por consola
    console.log(`Cantidad de libros prestados: ${librosPrestados}`); // Mostramos la cantidad de libros prestados por consola
    console.log("Cantidad de libros por género:", cantidadPorGenero); // Mostramos la cantidad de libros por genero por consola
    console.log(`Libro más antiguo: ${libroMasAntiguo.titulo} (${libroMasAntiguo.anio})`); // Mostramos el libro mas antiguo por consola
    console.log(`Libro más nuevo: ${libroMasNuevo.titulo} (${libroMasNuevo.anio})`); // Mostramos el libro mas nuevo por consola
}

generarReporteLibros(); // Llamamos a la funcion para generar el reporte de libros en consola

//6. Identificación Avanzada de libros

/* a) Implementar una función librosConPalabrasEnTitulo() que identifique
y muestre todos los libros cuyo título contiene más de una palabra
(no títulos que contengan números ni otros caracteres).
b) La función debe devolver un array con los títulos de esos libros y
mostrarlo en la consola.*/

function librosConPalabrasEnTitulo() {
    const librosConVariasPalabras = libros.filter(libro => /\b\w+\b \b\w+\b/.test(libro.titulo));
    const titulos = librosConVariasPalabras.map(libro => libro.titulo);
    console.log("Los libros con más de una palabra en el título son:", titulos); // Mostramos los titulos por consola
    return titulos;
}
// Llamamos a la funcion para mostrar en consola los libros con mas de una palabra en el titulo
librosConPalabrasEnTitulo();


//7. Cálculos Estadísticos

/* a) Desarrollar una función calcularEstadisticas() que utilice el objeto
Math para calcular y mostrar:
✓ Promedio de años de publicación de los libros.
✓ Año de publicación más frecuente.
✓ Diferencia en años entre el libro más antiguo y el más nuevo.*/

function calcularEstadisticas() {
    const totalAnios = libros.reduce((acc, libro) => acc + libro.anio, 0);
    const promedioAnios = (totalAnios / libros.length).toFixed(2);
    const aniosPublicacion = libros.map(libro => libro.anio);
    const añoMasFrecuente = aniosPublicacion.sort((a, b) =>
        aniosPublicacion.filter(v => v === a).length - aniosPublicacion.filter(v => v === b).length
    ).pop();
    const libroMasAntiguo = libros.reduce((antiguo, libro) => {
        return (antiguo.anio < libro.anio) ? antiguo : libro;
    });
    const libroMasNuevo = libros.reduce((nuevo, libro) => {
        return (nuevo.anio > libro.anio) ? nuevo : libro;
    });
    const diferenciaAnios = libroMasNuevo.anio - libroMasAntiguo.anio;

    console.log("Estadísticas de Publicación:");
    console.log(`Promedio de años de publicación de los libros: ${promedioAnios}`); // Mostramos el promedio de años de publicacion por consola
    console.log(`Año de publicación más frecuente: ${añoMasFrecuente}`); // Mostramos el año de publicacion mas frecuente por consola
    console.log(`Diferencia en años entre el libro más antiguo y el más nuevo: ${diferenciaAnios}`); // Mostramos la diferencia en años entre el libro mas antiguo y el mas nuevo por consola
}

calcularEstadisticas();

//8. Manejo de Cadenas

/* a) Crear una función normalizarDatos() que utilice métodos de strings
para:
✓ Convertir todos los títulos a mayúsculas.
✓ Eliminar espacios en blanco al inicio y final de los nombres de
autores.
✓ Formatear los emails de los usuarios a minúsculas.*/

function normalizarDatos() {
    libros = libros.map(libro => ({
        ...libro,
        titulo: libro.titulo.toUpperCase(), //Con toUpperCase convertimos los titulos a mayusculas
        autor: libro.autor.trim(), // Con trim eliminamos los espacios en blanco al inicio y final de los nombres de autores
    }));
    usuarios = usuarios.map(usuario => ({
        ...usuario,
        email: usuario.email.toLowerCase()
    }));
    console.log("Datos normalizados:", { libros, usuarios }); // Mostramos los datos normalizados por consola
}

normalizarDatos(); // Llamamos a la funcion para normalizar los datos y mostrar en consola los datos normalizados

//9. Interfaz de Usuario por Consola
/* a) Implementar una función menuPrincipal() que muestre un menú de
opciones al usuario y permita interactuar con el sistema utilizando
prompt().
b) El menú debe incluir opciones para todas las funcionalidades
anteriores y utilizar estructuras de control (if, switch, ciclos) para
manejar la lógica.*/

function menuPrincipal() {
  let opcion;
  do {
    opcion = prompt( // Usamos prompt para mostrar el menu y pedir una opcion al usuario
      "📚 Menú Principal - Sistema de Biblioteca\n" + 
      "1. Agregar Libro\n" +
      "2. Buscar Libro\n" +
      "3. Ordenar Libros\n" +
      "4. Borrar Libro\n" +
      "5. Registrar Usuario\n" +
      "6. Mostrar Todos los Usuarios\n" +
      "7. Buscar Usuario\n" +
      "8. Borrar Usuario\n" +
      "9. Prestar Libro\n" +
      "10. Devolver Libro\n" +
      "11. Reporte de Libros\n" +
      "12. Normalizar Datos\n" +
      "13. Salir\n\n" +
      "👉 Seleccione una opción (1-13):"
    );

    console.log("\n=============================="); 

    switch (opcion) { // Cada case corresponde a una opción del menú
      case "1": { 
        const id = Number(prompt("Ingrese ID del libro:"));
        if (isNaN(id)) { console.log("ID inválido."); break; }
        const titulo = prompt("Ingrese título del libro:");
        const autor = prompt("Ingrese autor del libro:");
        const anio = Number(prompt("Ingrese año de publicación:"));
        if (isNaN(anio)) { console.log("Año inválido."); break; }
        const genero = prompt("Ingrese género del libro:");
        agregarLibro(id, titulo, autor, anio, genero);
        break;
      }
      case "2": {
        const criterio = prompt("Buscar por (titulo/autor/genero):").trim().toLowerCase();
        const valor = prompt(`Ingrese el valor para ${criterio}:`);
        buscarLibro(criterio, valor);
        break;
      }
      case "3": {
        const criterioOrden = prompt("Ordenar por (titulo/anio):").trim().toLowerCase();
        ordenarLibros(criterioOrden);
        break;
      }
      case "4": {
        const id = Number(prompt("Ingrese ID del libro a borrar:"));
        if (isNaN(id)) { console.log("ID inválido."); break; }
        borrarLibro(id);
        break;
      }
      case "5": {
        const nombre = prompt("Ingrese nombre del usuario:");
        const email = prompt("Ingrese email del usuario:");
        registrarUsuario(nombre, email);
        break;   
      }
      case "6": {
        mostrarTodosLosUsuarios();
        break;
      }
      case "7": {
        const criterio = prompt("Buscar usuario por (nombre/email):").trim().toLowerCase();
        const valor = prompt(`Ingrese el valor para ${criterio}:`);
        buscarUsuario(criterio, valor);
        break;
      }
      case "8": {
        const nombre = prompt("Ingrese nombre del usuario a borrar:");
        const email = prompt("Ingrese email del usuario a borrar:");
        borrarUsuario(nombre, email);
        break;
      }
      case "9": {
        const idLibro = Number(prompt("Ingrese ID del libro a prestar:"));
        const idUsuario = Number(prompt("Ingrese ID del usuario:"));
        if (isNaN(idLibro) || isNaN(idUsuario)) { console.log("Datos inválidos."); break; }
        prestarLibro(idLibro, idUsuario);
        break;
      }
      case "10": {
        const idLibro = Number(prompt("Ingrese ID del libro a devolver:"));
        const idUsuario = Number(prompt("Ingrese ID del usuario:"));
        if (isNaN(idLibro) || isNaN(idUsuario)) { console.log("Datos inválidos."); break; }
        devolverLibro(idLibro, idUsuario);
        break;
      }
      case "11": {
        generarReporteLibros();
        break;
      }
      case "12": {
        normalizarDatos();
        break;
      }
      case "13": {
        alert("Si llegaste hasta acá, es porque estas saliendo de nuestro sistema. ¡Agradecemos usar nuestro gestor de bibliotecas, nos vemos pronto!");
        break;
      }
      default: {
        console.log("Opción no válida. Intente nuevamente.");
        break;
      }
    }

    console.log("==============================\n");

  } while (opcion !== "13");
}

// Iniciar menú
menuPrincipal();