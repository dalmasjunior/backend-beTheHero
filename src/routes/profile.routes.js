const Router = require('express').Router;
const router = Router();

const ProfileController = require('../controllers/profile.controller');
const SessionController = require('../controllers/session.controller');

router.get('/', (...params) => ProfileController.list(...params));
router.post('/', (...params) => SessionController.create(...params));


module.exports = router;