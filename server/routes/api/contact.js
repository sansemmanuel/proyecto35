const express = require('express');
const router = express.Router();

// Bring in Models & Helpers
const Contact = require('../../models/contact');
const mailgun = require('../../services/mailgun');

router.post('/add', async (req, res) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    if (!email) {
      return res
        .status(400)
        .json({ error: 'Debes ingresar una direccion de email' });
    }

    if (!name) {
      return res
        .status(400)
        .json({ error: 'Debes ingresar una descripcion y nombre' });
    }

    if (!message) {
      return res.status(400).json({ error: 'Debes ingresar un mensaje' });
    }

    const existingContact = await Contact.findOne({ email });

    if (existingContact) {
      return res
        .status(400)
        .json({ error: 'Ya existe un reclamo con esa direccion de email' });
    }

    const contact = new Contact({
      name,
      email,
      message
    });

    const contactDoc = await contact.save();

    await mailgun.sendEmail(email, 'contact');

    res.status(200).json({
      success: true,
      message: `Recibimos tu mensaje correctamente en breves te contactaremos a: ${email}!`,
      contact: contactDoc
    });
  } catch (error) {
    return res.status(400).json({
      error: 'Su solicitud no pudo ser procesada correctamente!'
    });
  }
});

module.exports = router;
