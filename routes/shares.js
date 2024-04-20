const express = require('express');
const shareController = require('../controllers/shareController');
const router = express.Router();

router.route('/createShare')
    .post(shareController.createShare);

router.route('/createSharesByTotalPrice')
    .post(shareController.createSharesByTotalPrice);


    module.exports = router;