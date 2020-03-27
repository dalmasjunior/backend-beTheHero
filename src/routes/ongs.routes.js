const Router = require('express').Router;
const router = Router();

const Controller = require('../controllers/ongs.controller');

router.get('/', (...params) => Controller.list(...params))

router.post('/', (...params) => Controller.create(...params))

module.exports = router;