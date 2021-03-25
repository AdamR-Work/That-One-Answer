const router = require('express').Router();
const {User, Answer, Comments,Steps} = require("../models")
router.get('/', (req, res) => {//change this to id
    Answer.findOne({
        where: {
            id: 1   // this has to change to based off of user log in. its just hard coded atm
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


module.exports = router;