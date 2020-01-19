const axios = require('axios');

const  getClima = async ( lat, lng ) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=6a22a539ed38032f7f44b05d42a5b903&units=metric`)
    return resp.data.main.temp
}

module.exports = {
    getClima
}