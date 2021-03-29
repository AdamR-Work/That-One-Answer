function checkNotAuthenticated(req, res, next){
    console.log(req)
    // if(req){
    //     return res.redirect('/login')
    // }
    next()
}

module.exports =  checkNotAuthenticated;