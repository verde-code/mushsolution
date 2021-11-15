const express = require('express');
const { ArduinoData } = require('./serial')
const router = express.Router();

router.get('/temperature', (request, response, next) => {

    let sum = ArduinoData.ListTemp.reduce((a, b) => a + b, 0);
    let average = (sum / ArduinoData.ListTemp.length).toFixed(2);

    response.json({
        data: ArduinoData.ListTemp,
        total: ArduinoData.ListTemp.length,
        average: isNaN(average) ? 0 : average,
    });

});

router.get('/humidity', (request, response, next) => {

    let sum = ArduinoData.List.reduce((a, b) => a + b, 0);
    let media_umidade = (sum / ArduinoData.List.length).toFixed(2);

    response.json({
        data: ArduinoData.List,
        total: ArduinoData.List.length,
        media_umidade: isNaN(media_umidade) ? 0 : media_umidade,
    });

});

module.exports = router;