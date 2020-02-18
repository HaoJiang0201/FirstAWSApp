var express = require('express');
var router = express.Router();
const ENV = process.env.ENV || "development";
const knexConfig = require("../knexfile");
const knex = require("knex")(knexConfig[ENV]);
const knexLogger = require("knex-logger");

router.get('/GetUserName', function (req, res) {
    console.log("get user name");
    res.json("test");
    // knex.select().from("users").where('uid', '=', '1')
    //     .then((results) => {
    //         console.log(results[0]);
    //         res.json(results[0]);
    //     }).catch(err => console.error(err));
});

module.exports = router;