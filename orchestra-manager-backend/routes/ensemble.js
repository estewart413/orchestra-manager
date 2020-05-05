const router = require('express').Router();
let Ensemble = require ('../models/ensemble.model');

router.route('/').get((req, res) => {
    Ensemble.find()
        .then(ensemble => res.json(ensemble))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/:id').get((req, res) => {
    Ensemble.findById(req.params.id)
        .then(ensemble => res.json(ensemble))
        .catch(err => res.status(400).json('Error' + err))
});

router.route('/add').post((req, res) => {
    const id = req.body.id;
    const title = req.body.title;
    //const enType = req.body.enType;
    const chairs = req.body.chairs;
    //const accManager = req.body.accManager;
    //const accConduct = req.body.accConduct;
    //const accLibrarian = req.body.accLibrarian;
    //const accMember = req.body.accMember;

    const newEnsemble = new Ensemble({
        id,
        title,
        //enType,
        chairs,
        //accManager,
        //accConduct ,
        //accLibrarian,
        //accMember
    });

    newEnsemble.save()
        .then(() => res.json('Ensemble saved!'))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route("/delete/:id").delete((req, res) => {
    Ensemble.findByIdAndDelete(req.params.id)
        .then(() =>res.json('Ensemble Deleted'))
        .catch(err => res.status(400).json("Error: " + err))
});

<<<<<<< HEAD
router.route('/edit/:id').post((req, res) => {
    Ensemble.findAndModify(req.params._id)
        .then(ensemble => {
            if (ensemble._id != req.body._id)
            ensemble._id = req.body._id;
            if (ensemble.title != req.body.title)
            ensemble.title = req.body.title;
            //if (ensemble.enType != req.body.enType)
            //ensemble.enType = req.body.enType;
            if (ensemble.chairs != req.body.chairs)
            ensemble.chairs = req.body.chairs;
            //if (ensemble.accManager != req.body.accManager)
            //ensemble.accManager = req.body.accManager;
            //if (ensemble.accConduct != req.body.accConduct)
            //ensemble.email = req.body.email;
            //if (ensemble.accLibrarian != req.body.accLibrarian)
            //ensemble.accLibrarian = req.body.accLibrarian;
            //if (ensemble.accMember != req.body.accMember)
            //ensemble.accMember = req.body.accMember;
        });
=======
router.route('/edit/:id').post(async (req, res) => {
    let newenId = req.body.enId;
    let newenName = req.body.enName;
    let newenType = req.body.enType;
    let newchairs = req.body.chairs;
    let newaccMember = req.body.accMember;
    let newaccConductor = req.body.accConductor;
    let newaccManager = req.body.accManager;
    let newaccLibrarian = req.body.accLibrarian;

    let query = await Ensemble.findOne({"_id": req.params.id});
    console.log(query);
    if (query == null || query == undefined){
        res.status(400).json("Ensemble not found!")
    } else {
        if (await query.enId != newenId && newenId != null) {
            query.enId = newenId;
        }
        if (await query.enName != newenName && newenName != null) {
            query.enName = newenName;
        }
        if (await query.enType != newenType && newenType != null) {
            query.enType = newenType;
        }
        if (await query.chairs != newchairs && newchairs != null) {
            query.chairs = newchairs;
        }
        if (await query.accMember != newaccMember && newaccMember != null) {
            query.accMember = newaccMember;
        }
        if (await query.accConductor != newaccConductor && newaccConductor != null) {
            query.accConductor = newaccConductor;
        }
        if (await query.accManager != newaccManager && newaccManager != null) {
            query.accManager= newaccManager;
        }
        if (await query.accLibrarian!= newaccLibrarian && newaccLibrarian != null) {
            query.accLibrarian= newaccLibrarian;
        }
        query.save();
        res.status(200).json("Edit Saved!");
    }
>>>>>>> master
});

router.route('/addMember/:id').post(async (req, res) => {
    let userName = req.body.userName;
<<<<<<< HEAD
    let id = req.body.id;

    try {
        let query = await Ensemble.findOne({"id":id})
=======

    try {
        let query = await Ensemble.findOne({"_id": req.params.id})
>>>>>>> master
        .catch(err => console.log(err).json("Error:" + err));
        console.log(query);
        let memberList = await query.accMember;
        let addedCheck = "";
        await memberList.forEach(element => {
            if (element==userName) {
                addedCheck = true;
                console.log(userName);
            }
        });
        if (addedCheck != true) {
            memberList.push(userName);
            query.accMember = memberList;
            query.save();
            res.status(200).json("Member Added!")
        }
        else {
            res.status(400).json("Username already exists!")
        }
    }
    catch (err) {
        console.log(err).json("Error" + err);
    }
});

router.route('/addLibrarian/:id').post(async (req, res) => {
    let userName = req.body.userName;
<<<<<<< HEAD
    let id = req.body.id;

    try {
        let query = await Ensemble.findOne({"id":id})
=======

    try {
        let query = await Ensemble.findOne({"_id":req.params.id})
>>>>>>> master
        .catch(err => console.log(err).json("Error:" + err));
        let libList = await query.accLibrarian;
        let addedCheck = "";
        await libList.forEach(element => {
            if (element==userName) {
                addedCheck = true;
                console.log(userName);
            }
        });
        if (addedCheck != true) {
            libList.push(userName);
            query.accLibrarian = memberList;
            query.save();
            res.status(200).json("Librarian Added!")
        }
        else {
            res.status(400).json("Username already exists!")
        }
    }
    catch (err) {
        console.log(err).json("Error" + err);
    }
});
router.route('/addConductor/:id').post(async (req, res) => {
    let userName = req.body.userName;
<<<<<<< HEAD
    let id = req.body.id;

    try {
        let query = await Ensemble.findOne({"id":id})
=======

    try {
        let query = await Ensemble.findOne({"_id":req.params.id})
>>>>>>> master
        .catch(err => console.log(err).json("Error:" + err));
        let conList = await query.accConductor;
        let addedCheck = "";
        await conList.forEach(element => {
            if (element==userName) {
                addedCheck = true;
                console.log(userName);
            }
        });
        if (addedCheck != true) {
            conList.push(userName);
            query.accConductor = memberList;
            query.save();
            res.status(200).json("Librarian Added!")
        }
        else {
            res.status(400).json("Username already exists!")
        }
    }
    catch (err) {
        console.log(err).json("Error" + err);
    }
});

<<<<<<< HEAD
router.route('/addChair/').post(async (req, res) => {
    let chairKey = req.body.key;
    let id = req.body.id;

    try {
        let query = await Ensemble.findOne({"id":id})
=======
router.route('/addChair/:id').post(async (req, res) => {
    let chair = req.body.chairs

    try {
        let query = await Ensemble.findOne({"_id":req.params.id})
>>>>>>> master
        .catch(err => console.log(err).json("Error:" + err));
        let chairList = await query.chairs;
        chairList.push(chair);
        query.chairs = chairList;
        query.save();
        res.status(200).json("Chair Added!")
    }
    catch (err) {
        console.log(err).json("Error" + err);
    }
});

module.exports = router;