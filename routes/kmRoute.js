const router = require('express').Router();
const kmController = require('../controller/kmController');

router.get('/', kmController.getAllUnit);
router.post('/', kmController.createUnit);

router.patch('/:id', kmController.updateUnit);
router.delete('/:id', kmController.deleteUnit);

module.exports = router;
