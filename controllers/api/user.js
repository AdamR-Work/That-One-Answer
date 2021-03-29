const router = require('express').Router();
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');
const bcrypt = require('bcrypt');
const flash = require('express-flash');
const passport = require('../../validation');
const checkNotAuthenticated = require('../../utils/notcheck');
const checkAuthenticated = require('../../utils/check');

const { User, Answer, Comments, Category, Steps } = require('../../models');

// Find all users and their comments and answer/posts







router.get('/', (req, res) => {
  User.findAll({
    attributes: { exclude: ['password'] },
    attributes: [
      'id',
      'username',
      'email',
      'isAdmin'

    ],
    include: [
      {
        model: Answer,
        attributes: ['id', 'title', 'description'],
      },
      {
        model: Comments,
        attributes: ['id', 'comment_text', 'steps_id']
      }

    ]
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'no data from user' })
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


//Find one user and display thier answers and comments
router.get('/:id', (req, res) => {
  User.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Answer,
        attributes: ['title', 'description']
      },
      {
        model: Comments,
        attributes: ['comment_text', 'steps_id']

      }

    ]
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'no data from user' })
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Create a User
router.post('/', async(req, res) => {

  const hashedPassword = await bcrypt.hash(req.body.password, 10)
  
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword
  })
    .then(dbUserData => {
      req.session.save(() => {
        req.session.id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.email = dbUserData.email;


        res.json(dbUserData);
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});

//Edit user
router.put('/', checkAuthenticated, (req, res) => {
  User.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id
    }
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res(status(404).json({ message: 'User not found' }));
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
//OG
// router.post('/login', (req, res) => {

//   User.findOne({
//     where: {
//       email: req.body.email
//     }
//   }).then(dbUserData => {
//     if (!dbUserData) {
//       res.status(400).json({ message: 'No user with that email address!' });
//       return;
//     }

//     const validPassword = dbUserData.checkPassword(req.body.password);

//     if (!validPassword) {
//       res.status(400).json({ message: 'Incorrect password!' });
//       return;
//     }

//     req.session.save(() => {
//       req.session.user_id = dbUserData.id;
//       req.session.username = dbUserData.username;
//       req.session.loggedIn = true;

//       res.json({ user: dbUserData, message: 'You are now logged in!' });
//     });
//   });
// });

// Old log out below

// router.post('/logout', (req, res) => {
//   if (req.session.loggedIn) {
//     req.session.destroy(() => {
//       res.status(204).end();
//     });
//   }
//   else {
//     res.status(404).end();
//     console.log('not working---------------------');
//   }
// });

//NEW login with passport

router.post('/login', passport.authenticate('local'), (req, res) => {
  console.log('logged in', req.body.email);
  let userInfo = {
    email: req.body.email
  }
  res.send(userInfo)
}
);

// router.delete('/logout', checkAuthenticated, (req, res)=>{
//   req.logOut()
//   req.redirect('/login')
// })



module.exports = router;