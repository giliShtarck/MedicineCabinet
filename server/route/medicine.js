const router = require("express").Router();

const {
    addUMedicine
} = require('../controller/medicine');

router.post('/addUMedicine', addUMedicine);
module.exports = router