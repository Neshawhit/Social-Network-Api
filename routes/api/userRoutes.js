const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  addFriend,
  deleteFriend
} = require('../../Controllers/userControllers');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser);


router.route('/:userId').destroy(deleteUser) ;

router.route('/:userId/').put(updateUser);

router.route('/user_id/:').delete(deleteFriend);
router.route('/user_id/:').create(deleteFriend);


module.exports = router;
