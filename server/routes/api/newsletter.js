const express = require('express');
const router = express.Router();

const mailchimp = require('../../services/mailchimp');
const mailgun = require('../../services/mailgun');

router.post('/subscribe', async (req, res) => {
  const email = req.body.email;

  if (!email) {
    return res.status(400).json({ error: 'Debes ingresar una direccion de email' });
  }

  const result = await mailchimp.subscribeToNewsletter(email);

  if (result.status === 400) {
    return res.status(400).json({ error: result.title });
  }

  await mailgun.sendEmail(email, 'newsletter-subscription');

  res.status(200).json({
    success: true,
    message: 'Se ha suscrito correctamente'
  });
});

module.exports = router;
