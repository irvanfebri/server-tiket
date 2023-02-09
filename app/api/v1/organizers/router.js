// const express = require('express');
// const router = express();
// const {
//   createCMSOrganizer,
//   createCMSUser,
//   getCMSUsers,
// } = require('./controller');

// const {
//   authenticateUser,
//   authorizeRoles,
// } = require('../../../middlewares/auth');

// router.post('/', createCMSOrganizer);
// router.post(
//   '/users',
//   authenticateUser,
//   authorizeRoles('organizer'),
//   createCMSUser
// );
// router.get('/users', getCMSUsers);
// module.exports = router;

const express = require('express');
const router = express();
const {
  createCMSOrganizer,} = require('./controller');


router.post('/organizers', createCMSOrganizer);
module.exports = router;