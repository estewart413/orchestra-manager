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
    const accManager = req.body.accManager;
    const accConduct = req.body.accConduct;
    const accLibrarian = req.body.accLibrarian;

    const newEnsemble = new Ensemble({
        enId,
        enName,
        enType,
        accManager,
        accConduct ,
        accLibrarian,
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
            if (ensemble.accManager != req.body.accManager)
            ensemble.password = req.body.password;
            if (ensemble.accConduct != req.body.accConduct)
            ensemble.email = req.body.email;
            if (ensemble.accLibrarian != req.body.accLibrarian)
            ensemble.accLibrarian = req.body.accLibrarian;
        });
});

module.exports = router;