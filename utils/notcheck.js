function checkNotAuthenticated(req, res, next){
    if(req.checkNotAuthenticated()){
        return res.redirect('/')
    }
    next()
}
module.exports =  checkNotAuthenticated;