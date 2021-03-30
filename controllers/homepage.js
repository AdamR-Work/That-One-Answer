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
        ]
    }).then(async response => {

        let tempResponse = [];
        for (let i = 0; i < 5; i++) {
            const element = response[i];
            tempResponse.push(element);
        }     

        const resQuote = await fetch("http://ron-swanson-quotes.herokuapp.com/v2/quotes");
        const myQuote = await resQuote.json();

        let hbsObj = {answers: tempResponse};
    
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
        console.log(hbsObj)
        res.render("categories", hbsObj);
    });
})



// router.get('/create', withAuth, async (req,res)=> {
//     const resQuote = await fetch("http://ron-swanson-quotes.herokuapp.com/v2/quotes");
//     const myQuote = await resQuote.json();

//     if (req.session.loggedIn){
//         res.render("create",{
//             loggedIn: req.session.loggedIn,
//             quote: myQuote
//         } );
//     }})

    router.get('/create', withAuth, (req,res)=> {
        {
            res.render("create", {loggedIn:true}  );
           
        }})
module.exports = router;