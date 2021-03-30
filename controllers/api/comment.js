const router = require('express').Router();
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');
const { User, Answer, Comments, Category, Steps } = require('../../models');

// Comments find all
router.get('/', (req, res) => {
    Comments.findAll({
        attributes: [
            'id',
            'comment_text',
            'steps_id',
            'user_id',
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
                model: Steps,
                attributes:['id', 'step_text','step_number','user_id','answer_id']
            }
        ]
    })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Comment Find One by id
router.get('/:id', (req, res) => {
    Comments.findOne({
        where:{
            id: req.params.id
        },
        attributes: [
            'id',
            'comment_text',
            'steps_id',
            'user_id',
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
                model: Steps,
                attributes:['id', 'step_text','step_number','user_id','answer_id']
            }
        ]
    })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Comment Create a new one
router.post('/', withAuth,(req, res) => {
    Comments.create({
        
      user_id: req.body.user_id,
      steps_id: req.body.steps_id,
      comment_text: req.body.comment_text,
      // answer_id: req.body.comment_text
      
    })
    .then(dbCommentData => res.json(dbCommentData))

    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
  
  // Comment Edit 
  router.put('/:id',withAuth, (req, res) => {
    Comments.update(req.body, {
      individualHooks: true,
      where: {
        id: req.params.id
      }
    })
      .then(dbCommentData => {
        if (!dbCommentData) {
          res(status(404).json({ message: 'Comment not found' }));
          return;
        }
        res.json(dbCommentData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  

module.exports = router;