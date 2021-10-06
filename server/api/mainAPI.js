const express = require('express');
const mainAPI = express.Router();
const request = require("axios");

const bodyParser = require('body-parser');

mainAPI.use(bodyParser.json());
mainAPI.use(
    bodyParser.urlencoded({
        extended: true,
        limit: '50mb',
        parameterLimit: 50000,
    }),
);

// middleware to use for all requests
mainAPI.use((req, res, next) => {
    next();
});


// GET http://localhost:8080/api
mainAPI.get('/', (req, res) => {
    res.json({ message: 'hooray! welcome to our secure api!' });
});

mainAPI.get('/data', (req, res) => {
    const list = [];

    request.get('https://ftx.com/api/markets')
        .then(a => a.data)
        .then(b => b.result)
        .then(c => c.filter(x => x.change24h > 0.01))
        .then(c1 => c1.filter(x1 => x1.change1h < 0))
        .then(d => d.filter(y => y.volumeUsd24h > 10000000))
        .then(d1 => d1.filter(y1 => y1.type === 'future'))
        .then(e => e.filter(z => z.price > 0.01))
        .then(e1 => e1.filter(z1 => z1.price < 1000))
        .then(final => final.map(f =>
            list.push({
                "t": `${f.name.substring(0, f.name.indexOf('-'))}`,
                "p": f.bid,
                "h": `${100 * Math.floor(f.change1h * 1000)/1000}%`,
                "d": `${100 * Math.floor(f.change24h * 1000)/1000}%`,
                "c": Math.floor(1000 * Math.abs(f.change1h) / (f.change24h)),
            })))
        .then(() => list.sort((a, b) => b.c - a.c))
        .then(() => agg(list))
        .then(() => res.json({ success: true, data: list }))
        .catch(() => res.json({ success: false }))

    const agg = async list => {

        var total = list.reduce((prev, cur) => {
            return prev + cur.c;
        }, 0);

        list.map((a, i) => {
            list[i]["s"] = Math.round((100 * list[i]["c"]/ total));
        });

        return list;
    };


});



module.exports = mainAPI;