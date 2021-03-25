 const router = require('express').Router();
 //const sequelize = require('../../config/connection');
 const {User, Answer, Comments} = require('../../models');

 router.get('/', (req,res) => {
     User.findAll({
         attributes:[
             'id',
             'username',
             'email',
             'isAdmin',
             'password'
         ],
        //  include:[
        //      {
        //          model:Answer,
        //          attributes:['id','title', 'description'],
        //      },
        //      {
        //          model:Comments,
        //          attributes:['id', 'comment_text', 'steps_id','user_id']
        //      }

        //  ]
     })
     .then(dbUserData => {
         if(!dbUserData){
             res.status(404).json({message:'no data from user'})
             return;
         }
         res.json(dbUserData);
     })
     .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
 });

 router.get('/:id', (req,res) => {
    User.findOne({
        where:{
            id: req.params.id
        },
        attributes:[
            'id',
            'post_url',
            'title',
            'created_at'
        ],
        // include:[
        //     {
        //         model:Answer,
        //         attributes:['id','title', 'description'],
        //     },
        //     {
        //         model:Comments,
        //         attributes:['id', 'comment_text', 'steps_id','user_id']
        //     }

        // ]
    })
    .then(dbUserData => {
        if(!dbUserData){
            res.status(404).json({message:'no data from user'})
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});
 module.exports = router;