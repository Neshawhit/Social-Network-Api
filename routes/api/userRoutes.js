const router = require('express').Router();
const {
  getUser,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  addFriend,
  deleteFriend
} = require('../../Controllers/userControllers');

// /api/users
router.route('/').get(getUser).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser);


router.route('/:userId').delete(deleteUser);

router.route('/:userId/').put(updateUser);

router.route('/:userId/friends/:friendId').delete(deleteFriend);
router.route('/:userId/friends/').post(addFriend);


module.exports = router;
