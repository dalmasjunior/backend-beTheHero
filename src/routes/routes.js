const Router = require('express').Router;
const router = Router();

const Ongs = require('./ongs.routes');
const Incidents = require('./incidents.routes');
const Profile = require('./profile.routes');

router.use('/ongs', Ongs);
router.use('/incidents', Incidents);
router.use('/profile', Profile);

module.exports = router;