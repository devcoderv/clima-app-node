const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion para obtener clima',
        demand: true
    }
}).argv

const getInfo = async direccion => {

    try {
        const datos = await lugar.getObtenerLogAlt( direccion );
        const temperatura = await clima.getClima( datos.lat,datos.lng );
        return `El clima de ${direccion} es de ${temperatura}`
        
    } catch (error) {
        return `No se pudo enviar encontrar tempetatura para ${direccion}`
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)