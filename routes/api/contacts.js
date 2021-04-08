const express = require('express');
const router = express.Router();

const contactCtrl = require('../../controllers/contacts')

router.get('/', contactCtrl.index);
router.post('/', contactCtrl.create);

module.exports = router
