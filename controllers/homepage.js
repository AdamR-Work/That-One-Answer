const router = require('express').Router();
const {User, Answer, Comments} = require("../models")
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
        let hbsObj = response.dataValues
        console.log(response.dataValues)
        res.render("homepage", hbsObj)
    })
})


module.exports = router;