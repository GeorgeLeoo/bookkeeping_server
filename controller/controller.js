const usersService = require('./../service/users');
const catagoryService = require('./../service/catagorys');
const billService = require('./../service/bills');
const utils = require('../utils/utils');
function userController(method, options, req, res) {
    // console.log(req.headers.authorization)
    utils.check_token(req.headers.authorization, res).then(() => {
        usersService[method](options).then((data) => {
            res.json(data);
        }).catch((err) => {
            res.json(err)
        });
    }).catch((err) => {
        res.json(err)
    })
}


function catagoryController(method, options, req, res) {
    // console.log(req.headers.authorization)
    // utils.check_token(req.headers.authorization, res).then(() => {
    //     catagoryService[method](options).then((data) => {
    //         res.json(data);
    //     }).catch((err) => {
    //         res.json(err)
    //     });
    // }).catch((err) => {
    //     res.json(err)
    // })
    catagoryService[method](options).then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err)
    });
}

function billController(method, options, req, res) {
    // console.log(req.headers.authorization)
    // utils.check_token(req.headers.authorization, res).then(() => {
    //     billService[method](options).then((data) => {
    //         res.json(data);
    //     }).catch((err) => {
    //         res.json(err)
    //     });
    // }).catch((err) => {
    //     res.json(err)
    // })
    billService[method](options).then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err)
    });
}

module.exports = {
    userController,
    catagoryController,
    billController
}