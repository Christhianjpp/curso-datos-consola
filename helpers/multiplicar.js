const fs = require('fs')
const colors = require('colors')

const crearArchivo = async (base = 0, l, h) => {

    try {
        console.log('==========='.red)
        console.log('Tabla del'.green, colors.blue(base))
        console.log('==========='.red)

        let salida = ''
        let consola = ''

        for (let i = 0; i <= h; i++) {
            consola += (`${base} ${'X'.green} ${i} ${'='.green} ${base * i}\n`)
            salida += (`${base} X ${i} = ${base * i}\n`)
        }

        if (l) {
            console.log(consola)
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)

        return (`tablada del ${base}`)
    } catch (err) {
        throw err
    }

}

module.exports = {
    crearArchivo
}