const opts = {
    base: {
        demand: true, //para decir que es obligatorio su entrada
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }

}


//optmizado
const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', opts) //el primer argumento es el comando y elsegundo una ayuda al usario, e; tercer es um pbjetp parametros
    .command('crear', 'crear un nuevo archivo', opts).argv; //al no tener ./ nos referimos a un paquete
//es como otro arreglo

//no optimizado
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


module.exports = {

    argv
}