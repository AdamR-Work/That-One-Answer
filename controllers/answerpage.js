const router = require('express').Router();
const {User, Answer, Comments,Steps, Category} = require("../models")
const fetch = require('node-fetch');

// Find one Answer and all its data to push to HB
router.get('/:id', (req, res) => {//change this to id
    Answer.findOne({
        where: {
            id: req.params.id   // this has to change to based off of user log in. its just hard coded atm
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
            },
            {
                model: Category,
                attributes: ['category_name']
            }
        ]
    }).then(async response => {
        const resQuote = await fetch("http://ron-swanson-quotes.herokuapp.com/v2/quotes");
        const myQuote = await resQuote.json();

        
        let hbsObj = {
            answer: response.dataValues,
            loggedIn: req.session.loggedIn,
            quote: myQuote
        };
        
       console.log(hbsObj)

        res.render("answer", hbsObj);

    })
})



//...category/id find ALL ANSWERs by CATEGORY
router.get('/category/:id', (req, res) => {
    Answer.findAll({
        where: {
            category_id: req.params.id
        },
        attributes: [
            'id',
            'title',
            'description',
            'user_id',
            'category_id',
            'created_at'
        ],
        // order: [['created_at', 'DESC']],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Category,
                attributes: ['category_name']
            }
        ]
    })
    .then(async response => {
        const resQuote = await fetch("http://ron-swanson-quotes.herokuapp.com/v2/quotes");
        const myQuote = await resQuote.json();

        let hbsObj = {
            answers: response,
            quote: myQuote,
            loggedIn: req.session.loggedIn
        };
        res.render('answer-by-category', hbsObj);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


//.../answers/user/id ALL ANSWERs BY USER
router.get('/user/:id', (req, res) => {
    Answer.findAll({
        where: {
            user_id: req.params.id
        },
        attributes: [
            'id',
            'title',
            'description',
            'user_id',
            'category_id',
            'created_at'
        ],
        order: [['created_at', 'DESC']],
        include: [
            {
                model: User,
                attributes: ['username'],
                limit: 5
            },
            {
                model: Category,
                attributes: ['category_name']
            }
        ]
    })
    .then(response => {
        console.log(response);
        let hbsObj = {answers: response};
        res.render('answer-by-user', hbsObj);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});





module.exports = router;