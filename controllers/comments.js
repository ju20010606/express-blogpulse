let express = require('express')
let db = require('../models')
let router = express.Router()

router.post('/',(req,res)=>{
db.comment.findOrCreate({
    where:{ 
        articleId:req.body.articleId,
        content:req.body.content,
        name:req.body.name,
    }
   })
   .then(([newComment, created])=>{
      
       
      res.redirect(`/article/${req.body.articleId}`)
   })
})

module.exports = router