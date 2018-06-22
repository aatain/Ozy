const User = require('./models/User');
const userController = {};

// //get all users
// userController.getAllUsers = (next) => {
//     User.find({}, next);
// };

/**
 * createUser - create a new User model and then save the user to the database.
*/
userController.createUser = (req, res, next) => {
    console.log('inside userController - ', req.body);

    if (!(req.body.username && req.body.password && req.body.email)) {
        console.log('Need username, password, and email')
        res.send('Please provide username, password, and email');
    }
    User.create(req.body, (err, user) => {
        if (err) {
            console.log('error')
        } else {
            console.log('User created!')
            res.locals.user = user;
            next();
        }
    });
};

/**
* verifyUser - Obtain username and password from the request body, locate
* the appropriate user in the database, and then authenticate the submitted password
* against the password stored in the database.
*/

userController.verifyUser = (req, res, next) => {
    User.findOne({ 'username': req.body.username }, (err, info) => {
        if (err) throw err;
        else if (info == null || req.body.password !== info.password) {
            res.redirect('/signup');
        } else {
            next();
        }
    });
}

module.exports = userController;