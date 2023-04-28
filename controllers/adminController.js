const admin = (req, res) => {
    // if get request
    if (req.method === 'GET') {
        res.render('admin', {
            title: 'Admin Page',
            user: req.oidc.user,
            isAuthenticated: req.oidc.isAuthenticated(),
            isAdmin: req.oidc.user.email === ' admin@localhost' ? true : false 
        });

}
// if post request
else if (req.method === 'POST') { 
    // if user is admin
    if (req.oidc.user.email === ' admin@localhost') {
        // if user is admin, then redirect to admin page
        res.redirect('/admin');
    } else {
        // if user is not admin, then redirect to home page
        res.redirect('/');
    }
}
}


// exporting admin
module.exports = {admin}

