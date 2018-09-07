const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

//se movera yargs.js
// const argv = require('yargs')
//     .command('listar', 'imprime en consola la tabla de multiplicar', {
//         base: {
//             demand: true, //para decir que es obligatorio su entrada
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     }) //el primer argumento es el comando y elsegundo una ayuda al usario, e; tercer es um pbjetp parametros
//     .command('crear', 'crear un nuevo archivo', {
//         base: {
//             demand: true, //para decir que es obligatorio su entrada
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     }).argv; //al no tener ./ nos referimos a un paquete
// //es como otro arreglo 
console.log(argv);
// console.log(argv.base);
// console.log(argv.limite);
//requierds const fs = require('fs'); se movio a multiplicar.js
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');
let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => console.log('Archivo creado:', colors.green(archivo)))
            .catch(e => console.log(e));
        break;
    default:
        console.log('comando no reconocido');
        break;
}
//let base = 7; sin introduccion




// console.log(process.argv);
// let argv = process.argv; //solo para hacer menos complicado recordando que process.argv es un arreglo
// let parametro = argv[2]; //posicion donde estara la palabra a introducir
// let base = parametro.split('=')[1]; //el split convierte el string a un arreglo


// crearArchivo(base).then(archivo => console.log(`Archivo creado:${archivo}`))
//     .catch(e => console.log(e));