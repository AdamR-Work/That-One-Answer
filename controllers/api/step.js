const router = require('express').Router();
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');
const { User, Answer, Comments, Category, Steps } = require('../../models');

//.../api/answers ALL ANSWERs
router.get('/', (req, res) => {
    Steps.findAll({
        attributes: [
            'id',
            'step_text',
            'step_number',
            'user_id',
            'answer_id',
            'created_at'
        ],
       
        include: [
            // {
            //     model: User,
            //     attributes: ['username', 'email', 'id']
            // },
            {
                model: Answer,
                attributes: ['title','description','user_id']
            },
            {
                model: Comments,
                attributes:['id', 'comment_text','steps_id','user_id']
            }
        ]
    })
    .then(dbStepData => res.json(dbStepData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
// Steps find one by id
router.get('/:id', (req, res) => {

    Steps.findOne({
        where:{
            id: req.params.id
        },
        attributes: [
            'id',
            'step_text',
            'step_number',
            'user_id',
            'answer_id',
            'created_at'
        ],
       
        include: [
            {
                model: User,
                attributes: ['username', 'email', 'id']
            },
            {
                model: Answer,
                attributes: ['title','description','user_id']
            },
            {
                model: Comments,
                attributes:['id', 'comment_text','steps_id','user_id']
            }
        ]
    })
    .then(dbStepData => res.json(dbStepData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
// Steps create a new one
router.post('/', withAuth, (req, res) => {
    // console.log("wlr ---" + req.body);
    Steps.create(
        {
            answer_id: req.body.answer_id,
            step_text: req.body.step_text,
            // for future feature
            step_number: req.body.step_number,
            user_id: req.session.user_id
            
        }
        )
    .then(dbStepData => res.json(dbStepData))

    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
    // console.log("wlr ---" + req.body);
});


//   Steps update by id
router.put('/:id',withAuth, (req, res) => {
   Steps.update({
        individualHooks:true,
        where: {
            id: req.params.id
        }
            })
    .then(dbStepData => res.json(dbStepData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Steps destroy by id
router.delete('/:id',withAuth, (req, res) => {
    Steps.destroy(
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbStepData => {
        if (!dbStepData) {
            res.status(404).json({ message: 'Sorry something went wrong' });
            return;
        }
        res.json(dbStepData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;