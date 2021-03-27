const router = require('express').Router();
const {User, Answer, Comments, Category} = require("../models")


//-------Home Page - Shows All Answers
router.get('/', (req, res) => {
    Answer.findAll({
        attributes: [
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
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        console.log(req.session);
        res.render('homepage', { loggedIn: req.session.loggedIn });
        return;
    }

    res.render('login');
  });


//-------Category Page Route
router.get('/create', (req,res)=> {
    Category.findAll({
        attributes:[
            'id',
            'category_name'
        ]
    }).then(response => {
        let hbsObj = response.dataValues
        console.log(response.dataValues)
        res.render("create", hbsObj)
    })
});

//-------Dashboard Route - Show Logged in Users Data
router.get('/dashboard', (req, res) => {
    Answer.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
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
        console.log(req.session);
        console.log(response);
    
        let hbsObj = {answers: response};

        console.log(hbsObj);

        res.render("dashboard",{hbsObj, loggedIn: req.session.loggedIn});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

module.exports = router;