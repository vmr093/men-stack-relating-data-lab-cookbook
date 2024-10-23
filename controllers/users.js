const express = require('express')
const router = express.Router()
const User = require('../models/user.js')





// router.get('/', async (req, res) => {
//     const allUsers = await User.find()
//     console.log(allUsers)
//     res.render('users/index.ejs', {
//         allUsers
//     })
// })


router.get('/', async (req, res) => {
    try {
      const users = await User.find();
      res.render('users/index.ejs', { users });
    } catch (error) {
      console.error(error);
      res.redirect('/');
    }
  });






router.get('/:userId/', async (req, res) => {
    const usersPage = await User.findById(req.params.userId)
    res.render('users/show.ejs'), {usersPage}
    
})



module.exports = router;