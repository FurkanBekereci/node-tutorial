const express = require('express');
const router = express.Router();
const {getPeople , createPerson} = require('../controllers/people')

// router.get('/' , getPeople);

// router.post('/' , createPerson);
router.route('/').get(getPeople).post(createPerson);

module.exports = router;