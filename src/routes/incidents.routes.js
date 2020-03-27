const Router = require('express').Router;
const router = Router();

const Controller = require('../controllers/incidents.controller');

router.post('/', (...params) => Controller.create(...params));
router.get('/', (...params) => Controller.list(...params));
router.delete('/:id', (...params) => Controller.delete(...params));

module.exports = router;