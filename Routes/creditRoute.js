module.exports = app => {

const credit = require('../Controllers/creditController.js');
var router = require("express").Router();
const verifyToken = require('../Middlewares/middlewares.js'); 


// Create a new Credit
router.post('/', credit.create);



router.use(verifyToken); // Protected routes - Require authentication

// Retrieve all published Credit
router.get('/published', credit.findAllPublished);

// Retrieve a single Credit with id
router.get('/:id', credit.findOne);

// Update a Credit with id
router.put('/:id', credit.update);

// Delete a Credit with id
router.delete('/:id', credit.delete);

// Delete all Credit
router.delete('/', credit.deleteAll);

app.use('/api/credit', router);

};
