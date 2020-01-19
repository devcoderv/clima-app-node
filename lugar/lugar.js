const axios = require('axios');

const getObtenerLogAlt = async dir => {
    const encodeUrl = encodeURI(dir)
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: {'x-rapidapi-key': 'e628149c55msh4d011b2bd004560p18c213jsna8f3ce755510'}
    });
    
    const resp = await instance.get();
    if( resp.data.Results.legth === 0 ) {
        throw new Error(`No hay resultado para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;
    
    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getObtenerLogAlt
}