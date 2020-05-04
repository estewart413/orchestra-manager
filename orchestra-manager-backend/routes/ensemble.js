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
    const enId = req.body.enId;
    const enName = req.body.enName;
    const enType = req.body.enType;
    const chairs = req.body.chairs;
    const accManager = req.body.accManager;
    const accConduct = req.body.accConduct;
    const accLibrarian = req.body.accLibrarian;
    const accMember = req.body.accMember;

    const newEnsemble = new Ensemble({
        enId,
        enName,
        enType,
        chairs,
        accManager,
        accConduct ,
        accLibrarian,
        accMember
    });

    newEnsemble.save()
        .then(() => res.json('Ensemble saved!'))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/delete/:id').delete((req, res) => {
    Ensemble.findByIdAndDelete(req.params.id)
        .then(() =>res.json('Ensemble Deleted'))
        .catch(err => res.status(400).json("Error: " + err))
});

router.route('/edit/:id').put((req, res) => {
    Ensemble.findAndModify(req.params.id)
        .then(ensemble => {
            if (ensemble.enId != req.body.enId)
            ensemble.enId = req.body.enId;
            if (ensemble.enName != req.body.enName)
            ensemble.enName = req.body.enName;
            if (ensemble.enType != req.body.enType)
            ensemble.enType = req.body.enType;
            if (ensemble.chairs != req.body.chairs)
            ensemble.chairs = req.body.chairs;
            if (ensemble.accManager != req.body.accManager)
            ensemble.accManager = req.body.accManager;
            if (ensemble.accConduct != req.body.accConduct)
            ensemble.email = req.body.email;
            if (ensemble.accLibrarian != req.body.accLibrarian)
            ensemble.accLibrarian = req.body.accLibrarian;
            if (ensemble.accMember != req.body.accMember)
            ensemble.accMember = req.body.accMember;
        });
});

router.route('/addMember/').post(async (req, res) => {
    let userName = req.body.userName;
    let enId = req.body.enId;

    try {
        let query = await Ensemble.findOne({"enId":enId})
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

router.route('/addLibrarian/').post(async (req, res) => {
    let userName = req.body.userName;
    let enId = req.body.enId;

    try {
        let query = await Ensemble.findOne({"enId":enId})
        .catch(err => console.log(err).json("Error:" + err));
        console.log(query);
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
router.route('/addConductor/').post(async (req, res) => {
    let userName = req.body.userName;
    let enId = req.body.enId;

    try {
        let query = await Ensemble.findOne({"enId":enId})
        .catch(err => console.log(err).json("Error:" + err));
        console.log(query);
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
module.exports = router;