const router = require('express').Router();
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');
const { Answer, User, Category, Comments } = require('../../models');

//.../api/answers ALL ANSWERs
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
        order: [['created_at', 'DESC']],
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
    .then(dbAnswerData => res.json(dbAnswerData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
// LEAVE THIS BELOW, This works
router.post('/', withAuth, (req, res) => {
    // console.log('---------------start of creating a post')
    // console.log(req.session.id);
    // console.log(req.body);
    Answer.create({

        title: req.body.title,
        description: req.body.description,
        user_id: req.session.user_id, 
        category_id: req.body.category_id
    })
    .then(dbAnswerData => res.json(dbAnswerData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
// LEAVE THIS ABO

//.../api/answers/id ANSWERs BY ID
router.get('/:id', (req, res) => {
    Answer.findOne({
        where: {
            id: req.params.id
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
                attributes: ['username']
            },
            {
                model: Category,
                attributes: ['category_name']
            }
        ]
    })
    .then(dbAnswerData => res.json(dbAnswerData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
router.put('/:id', withAuth, (req, res) => {
    Answer.update(
        {
            title: req.body.title,
            description: req.body.description,
            category_id: req.body.category_id
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbAnswerData => {
        if (!dbAnswerData) {
            res.status(404).json({ message: 'No post answer found with this id' });
            return;
        }
        res.json(dbAnswerData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
router.delete('/:id', withAuth,(req, res) => {
    Answer.destroy(
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbAnswerData => {
        if (!dbAnswerData) {
            res.status(404).json({ message: 'No answer found with this id' });
            return;
        }
        res.json(dbAnswerData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


//.../api/answers/category/id ALL ANSWERs BY CATEGORY
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
        order: [['created_at', 'DESC']],
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
    .then(dbAnswerData => res.json(dbAnswerData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//.../api/answers/user/id ALL ANSWERs BY USER
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
                attributes: ['username']
            },
            {
                model: Category,
                attributes: ['category_name']
            }
        ]
    })
    .then(dbAnswerData => res.json(dbAnswerData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//.../api/answers



module.exports = router;