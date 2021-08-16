const router = require("express").Router();

const {
    addUser
} = require('../controller/user');

router.post('/addUser', addUser);
module.exports = router