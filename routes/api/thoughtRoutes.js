const router = require('express').Router();
const {
  getSingleThought,
  getThoughts,
  createThought,
} = require('../../controllers/ThoughtControllers');

router.route('/').get(getThoughts).post(createThought);

router.route('/:ThoughtId').get(getSingleThought);

module.exports = router;
