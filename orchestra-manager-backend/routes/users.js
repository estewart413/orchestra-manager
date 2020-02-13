const router = require('express').Router();
let User = require ('./users.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post((req, res) => {
    const username = req.body.username;

    const newUser = new User({
        username,
        fullName,
        passHash,
    });

    newUser.save()
        .then(() => res.json('User saved!'))
        .catch(err => res.status(400).json('Error: ' + err))
});



module.exports = router;