const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator/check');
const Contact = require('../../models/Contact');

router.post('/', [
    check('name', 'Podaj swoje imie').not().isEmpty(),
    check('email', 'Podany email jest niepoprawny').isEmail(),
    check('message', 'Wiadomość powinna zwierać conajmniej 120 znaków').isLength({min: 10})
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }


    const {name, email, message} = req.body;


    try {

        let contacts = await Contact.findOne({ email });

        if (contacts) {
          return res
            .status(400)
            .json({ errors: [{ msg: 'Email znajduje się w naszej bazie' }] });
        }


        contact =  new Contact({
            name,
            email,
            message
          });     
          
          await contact.save();

          res.json(contact);

    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server error');
    }


})



module.exports = router;


