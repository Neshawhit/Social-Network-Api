const router = require('express').Router();
const {
  getSingleThought,
  getThoughts,
  createThought,
} = require('../../controllers/ThoughtController');

router.route('/').get(getThoughts).Thought(createThought);

router.route('/:ThoughtId').get(getSingleThought);

module.exports = router;
