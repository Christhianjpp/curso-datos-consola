const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .check((argv, option) => {
        console.log('yargs!!', argv)
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un numero'
        } return true
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla de multplicar'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Indica hasta que numero multiplicar'
    })
    .argv;

console.clear()

// recibir datos de la consola
// console.log(process.argv)
// console.log(argv)
// console.log(argv.l)

// console.log('base yargs', argv.base)

// const [, , arg3 = 0] = process.argv
// const [, base = 0] = arg3.split('=')


// const base = 5
crearArchivo(argv.b, argv.l, argv.h)
    .then(nombre => console.log(nombre))
    .catch(err => console.log(err))

