const router = require('express').Router();
const {User, Answer, Comments, Category} = require("../models")
const withAuth = require('../utils/auth');
const fetch = require('node-fetch');

// const {getQuote} = require('../utils/quote');


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
        ],
        order: [
            ['created_at', 'DESC']
        ],
        limit: 6
    }).then(async response => {

        const resQuote = await fetch("http://ron-swanson-quotes.herokuapp.com/v2/quotes");
        const myQuote = await resQuote.json();

        let hbsObj = {answers: response};
    
        // res.render("homepage",{ hbsObj, loggedIn:req.session.loggedIn});
        myObject = {hbsObj, loggedIn: req.session.loggedIn, quote: myQuote};
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



// -------Category Page Route   this needs to be changed to category. its half and half of two
router.get('/category', (req,res)=> {
    Category.findAll({
        attributes:[
            'id',
            'category_name'
        ]
    }).then(async response => {

        const resQuote = await fetch("http://ron-swanson-quotes.herokuapp.com/v2/quotes");
        const myQuote = await resQuote.json();

        let hbsObj = {
            categories: response,
            quote: myQuote, 
            loggedIn: req.session.loggedIn
        };

        res.render("categories", hbsObj);

    });
})


router.get('/category/:id', (req,res)=> {
    Category.findOne({
        where:{
            id: req.params.id
        },
        attributes:[
            'id',
            'category_name'
        ],
        include:[
            {
                model: Answer,
                attributes:['title','id','description']
            }
        ]
    }).then(async response => {

        const resQuote = await fetch("http://ron-swanson-quotes.herokuapp.com/v2/quotes");
        const myQuote = await resQuote.json();

        let hbsObj = {
            categories: response,
            quote: myQuote, 
            loggedIn: req.session.loggedIn
        };
        console.log(hbsObj)
        res.render("catnext", hbsObj);
    });
})


router.get('/create', withAuth, (req,res)=> {
    //get categories to fill the drop down
    Category.findAll({attributes:['id','category_name']})
    .then(async response => {
        const resQuote = await fetch("http://ron-swanson-quotes.herokuapp.com/v2/quotes");
        const myQuote = await resQuote.json();

        // console.log({categories: response});
        
        if (req.session.loggedIn){
            res.render("create",{
                categories: response,
                loggedIn: req.session.loggedIn,
                quote: myQuote
            });
        }
    });
})

module.exports = router;