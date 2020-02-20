const router = require('express').Router();
let User = require ('./users.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(excercise))
        .catch(err => res.status(400).json('Error' + err))
});

router.route('/add').post((req, res) => {
    const userType = req.body.userType;
    const fName = req.body.fName;
    const lName = req.body.lName;
    const password = req.body.password;
    const email = req.body.email;
    const userName = req.body.username;

    const newUser = new User({
        userType,
        fName,
        lName,
        password,
        email,
        userName,
    });

    newUser.save()
        .then(() => res.json('User saved!'))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/delete/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() =>res.json('User Deleted'))
        .catch(err => res.status(400).json("Error: " + err))
});

router.route('/edit/:id').put((req, res) => {
    User.findbyID(req.params.id)
        .then(user => {
            if (user.username != req.body.username)
                user.username = req.body.username;
            if (user.fName != req.body.fName)
                user.fName = req.body.fName;
            if (user.lName != req.body.lName)
                user.lName = req.body.lName;
            if (user.password != req.body.password)
                user.password = req.body.password;
            if (user.email != req.body.email)
                user.email = req.body.email;
            if (user.userType != req.body.userType)
                user.userType = req.body.userType;
        });
});



module.exports = router;