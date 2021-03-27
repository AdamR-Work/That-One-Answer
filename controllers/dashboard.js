const router = require('express').Router();
const {User, Answer, Comments, Steps} = require("../models")




router.get('/dashboard', (req, res) => {
    Category.findAll({
        where: {
            category_id: req.params.id
        },
        attributes: [
            'id',
           'category_name'
            
        ],
        include: [
            {
                model: Answer,
                attributes: ['title']
            },
           
        ]
    })
    .then(response => {
        let hbsObj = response.dataValues
        console.log(response.dataValues)
        res.render("dashboard", hbsObj)
    })
});


// below i was still figuring out how to go from category to answer page
// or do we go from categories .then click and show all the items in that cat?
router.get('/dashboard', (req, res) => {
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
const router = require('express').Router();
const {User, Answer, Comments, Category} = require("../models")
router.get('/', (req, res) => {
    User.findOne({
        where: {
            id: 1   // this has to change to based off of user log in. its just hard coded atm
        },
        include: [
            {
                model:Answer,
                attributes: ['title', 'description']
            },
            {
                model: Comments,
                attributes: ['comment_text', 'steps_id']
            }
        ]
    }).then(response => {
        let hbsObj = response.get({plain:true});
    
        res.render("homepage",{
           hbsObj, 
           loggedIn:req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

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

module.exports = router;const router = require('express').Router();
const {User, Answer, Comments, Category} = require("../models")
router.get('/', (req, res) => {
    User.findOne({
        where: {
            id: 1   // this has to change to based off of user log in. its just hard coded atm
        },
        include: [
            {
                model:Answer,
                attributes: ['title', 'description']
            },
            {
                model: Comments,
                attributes: ['comment_text', 'steps_id']
            }
        ]
    }).then(response => {
        let hbsObj = response.get({plain:true});
    
        res.render("homepage",{
           hbsObj, 
           loggedIn:req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

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
