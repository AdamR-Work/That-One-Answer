 const router = require('express').Router();
 //const sequelize = require('../../config/connection');
 const {User, Answer, Comments, Category} = require('../../models');

 // Find all users and thier comments and answer/posts
 router.get('/', (req,res) => {
     User.findAll({
        attributes: { exclude: ['password'] },
         attributes:[
             'id',
             'username',
             'email',
             'isAdmin'
    
         ],
         include:[
             {
                 model:Answer,
                 attributes:['id','title', 'description'],
             },
             {
                 model:Comments,
                 attributes:['id', 'comment_text', 'steps_id']
             }

         ]
     })
     .then(dbUserData => {
         if(!dbUserData){
             res.status(404).json({message:'no data from user'})
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
 router.get('/:id', (req,res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
        where:{
            id: req.params.id
        },
        include:[
            {
              model:Answer,
                attributes:['title', 'description']
            },
            {
              model:Comments,
                attributes:['comment_text', 'steps_id']

            }
           
        ]
    })
    .then(dbUserData => {
        if(!dbUserData){
            res.status(404).json({message:'no data from user'})
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
router.post('/', (req, res) => {
    User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
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
router.put('/', (req,res) =>{
    User.update(req.body, {
        individualHooks:true,
        where:{
            id: req.params.id
        }
    })
    .then(dbUserData =>{
        if(!dbUserData){
            res(status(404).json({message:'User not found'}));
            return;
        }
        res.json(dbUserData);
    })
    .catch(err=> {
        console.log(err);
        res.status(500).json(err);
    });
});

// Login route
router.post('/login', (req, res) => {
    User.findOne({
      where: {
        email: req.body.email
      }
    }).then(dbUserData => {
      if (!dbUserData) {
        res.status(400).json({ message: 'Maybe a different Email?' });
        return;
      }
  
      const validPassword = dbUserData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res.status(400).json({ message: 'Not Quite!' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;
    
        res.json({ user: dbUserData, message: 'Welcome to That One Answer You Are Looking For!' });
      });
    });
  });

  router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    }
    else {
      res.status(404).end();
    }
  });


 module.exports = router;