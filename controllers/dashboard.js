const router = require('express').Router();
const withAuth = require('../utils/auth');
const sequelize = require('../config/connection');
const {User, Answer, Comments, Steps, Category} = require("../models");
const fetch = require('node-fetch');




router.get('/', withAuth, (req, res) => {
    console.log(req.session);

    User.findOne({
        where: {
            username: req.session.username
        },
        attributes: [
            'username',
            'id'
        ],
        include: [
            {
              model: Answer,
              attributes: ['created_at','id','title', 'description']
            },
            {
              model: Comments,
              attributes: ['comment_text', 'steps_id',"created_at"]
      
            }
      
        ],
        order: [
            [Answer, 'created_at', 'DESC'],
            [Comments, 'created_at', 'DESC']
        ]
    })
    .then(async dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'no data' });
            return;
          }

        const resQuote = await fetch("http://ron-swanson-quotes.herokuapp.com/v2/quotes");
        const myQuote = await resQuote.json();

        const userPage = dbUserData.get({ plain: true });

        res.render('dashboard',{
            userPage,
            quote: myQuote,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err + "shit");
      });
});


router.get('/:id', withAuth, (req, res) => {
    Answer.findOne({
        where: {
            id: req.session.id   // this has to change to based off of user log in. its just hard coded atm
        },
        attributes:[
            'id',
            'title',
            'description'

        ],
        include: [
            {
                model:User,
                attributes: ['username']
            },
            {
                model: Comments,
                attributes: ['comment_text', 'steps_id']
            },
            {
                model: Steps,
                attributes:['step_text', 'step_number']
            }
        ]
    }).then(response => {
        let hbsObj = response.dataValues
        console.log(response.dataValues)
        res.render("answer", hbsObj)
    })
})


// below this  

//////WLR -- DELETING THIS IS DUPLICATE OF MAIN ROUTE ABOVE, NEVER WILL WORK
// router.get('/', withAuth, (req, res) => {
//     User.findOne({
//         where: {
//             id: req.session.id   // this has to change to based off of user log in. its just hard coded atm
//         },
//         include: [
//             {
//                 model:Answer,
//                 attributes: ['title', 'description']
//             },
//             {
//                 model: Comments,
//                 attributes: ['comment_text', 'steps_id']
//             }
//         ]
//     }).then(response => {
//         let hbsObj = response.get({plain:true});
    
//         res.render("homepage",{
//            hbsObj, 
//            loggedIn:req.session.loggedIn
//         });
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   });

// router.get('/login', (req, res) => {
//     if (req.session.loggedIn) {
//       res.render('/dashboard');
//       return;
//     }
  
//     res.render('login');
//   });

// router.get('/create', (req,res)=> {
//     Category.findAll({
//         attributes:[
//             'id',
//             'category_name'
//         ]
//     }).then(response => {
//         let hbsObj = response.dataValues
//         console.log(response.dataValues)
//         res.render("create", hbsObj)
//     })
// })


// router.get('/', (req, res) => {
//     User.findOne({
//         where: {
//             id: 1   // this has to change to based off of user log in. its just hard coded atm
//         },
//         include: [
//             {
//                 model:Answer,
//                 attributes: ['title', 'description']
//             },
//             {
//                 model: Comments,
//                 attributes: ['comment_text', 'steps_id']
//             }
//         ]
//     }).then(response => {
//         let hbsObj = response.get({plain:true});
    
//         res.render("homepage",{
//            hbsObj, 
//            loggedIn:req.session.loggedIn
//         });
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   });

// router.get('/login', (req, res) => {
//     if (req.session.loggedIn) {
//       res.redirect('/');
//       return;
//     }
  
//     res.render('login');
//   });

// router.get('/create',withAuth, (req,res)=> {
//     if (req.session.loggedIn){
//     res.redirect('/create');
// }
//   res.redirect('/login')

// })

module.exports = router;
