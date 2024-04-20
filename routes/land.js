const express = require('express');
const landSeller = require('../controllers/landSeller');
const router = express.Router();


router.route('/createLand')
    .post(landSeller.createLand);

// Get all lands
router.route('/getLands')
    .get(landSeller.getLands);

    router.route('/getLandbyid/:id')
    .get(landSeller.getLandbyid);

router.route('/updateLandApproved/:id')
    .put(landSeller.updateLandApproved);

module.exports = router;