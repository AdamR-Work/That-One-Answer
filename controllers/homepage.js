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

module.exports = router;