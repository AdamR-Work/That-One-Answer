const router = require('express').Router();
const {User, Answer, Comments, Category} = require("../models")
const withAuth = require('../utils/auth');
const checkNotAuthenticated = require('../utils/notcheck');
const checkAuthenticated = require('../utils/check');
//-------Home Page - Shows All Answers
router.get('/', (req, res) => {
    Answer.findAll({
        attributes: [
            'id',
            'title',
            'description',
            'user_id',
            'category_id',
            'created_at'
        ],
        include: [
            {
                model:User,
                attributes: ['username']
            },
            {
                model: Comments,
                attributes: ['comment_text', 'steps_id']
            }
        ]
    }).then(response => {

        let tempResponse = [];
        for (let i = 0; i < 5; i++) {
            const element = response[i];
            tempResponse.push(element);
        }             
    
        let hbsObj = {answers: tempResponse};
    
        // res.render("homepage",{ hbsObj, loggedIn:req.session.loggedIn});
        myObject = {hbsObj, loggedIn: req.session.loggedIn};
        console.log(myObject);
        res.render("homepage",myObject);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

//-------Log In Route
router.get('/login', checkNotAuthenticated,(req, res) => {
    try {
        res.render('dashboard')
    }catch(err){
     console.log(err)
    }

      res.render('login');  
    
  });



// -------Category Page Route   this needs to be changed to category. its half and half of two
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
// router.get('/create', withAuth, (req,res)=> {
//     if (req.session.loggedIn){
//         res.render("create",{
//             loggedIn: req.session.loggedIn
//         } );
//     }})

module.exports = router;