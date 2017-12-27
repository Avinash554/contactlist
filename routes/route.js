const express = require('express'); //we are using const because the express value doesn't change further
const router = express.Router();

//getting contact file in models to use here
const Contact = require('../models/contact');


//retrieving contacts
router.get('/contacts', (req, res, next)=>{
    Contact.find(function(err, contacts){
        res.json(contacts);
    })
});

//add comtacts
router.post('/contact', (req, res, next)=>{
    //logic to add contact
    //adding new contact which will be adding or hitting to our database
    let newContact = new Contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone     
    })
// Insert new contact into database
   newContact.save((err, contact)=>{
       if(err){
           res.json({msg: 'Failed to add contact'});
       }
       else{
           res.json({msg: 'Contact Added Successfully'});
       }
   });
});

//delete contact
router.delete('/contact/:id', (req, res, next)=>{
    //logic to delete contact
    Contact.remove({_id: req.params.id}, function(err, result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});


module.exports = router;