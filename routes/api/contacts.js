const express = require('express');
const router = express.Router();

const contactCtrl = require('../../controllers/contacts')

router.get('/', contactCtrl.index);
router.post('/', contactCtrl.create);
router.put ('/:id', contactCtrl.update);
router.delete('/:id', contactCtrl.delete);

module.exports = router
