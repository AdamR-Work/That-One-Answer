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
        res.render("homepage",hbsObj);
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
})

module.exports = router;