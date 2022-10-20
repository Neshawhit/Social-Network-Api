const router = require('express').Router();
const {
  getSingleThought,
  getThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require('../../controllers/ThoughtControllers');

router.route('/').get(getThought).post(createThought);

router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);
// router.route('/:reactions').post(createReaction).delete(deleteReaction);
router.route('/:thoughtId/reactions').post(createReaction);
//router.route('thoughts/:thoughtId/reactionId').delete(deleteReaction);
router.route('/:thoughtId/reaction/:reactionId').delete(deleteReaction);
module.exports = router; 

//can't get delete reaction route to work it keeps deleting thoughts instead