const express = require('express');
const router = express.Router();

// Bring in Models & Helpers
const Address = require('../../models/address');
const auth = require('../../middleware/auth');

// add address api
router.post('/add', auth, async (req, res) => {
  try {
    const user = req.user;

    const address = new Address({
      ...req.body,
      user: user._id
    });
    const addressDoc = await address.save();

    res.status(200).json({
      success: true,
      message: `Direccion agregada correctamente!`,
      address: addressDoc
    });
  } catch (error) {
    res.status(400).json({
      error: 'Su solicitud no pudo ser procesada correctamente!'
    });
  }
});

// fetch all addresses api
router.get('/', auth, async (req, res) => {
  try {
    const addresses = await Address.find({ user: req.user._id });

    res.status(200).json({
      addresses
    });
  } catch (error) {
    res.status(400).json({
      error: 'Su solicitud no pudo ser procesada correctamente!'
    });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const addressId = req.params.id;

    const addressDoc = await Address.findOne({ _id: addressId });

    if (!addressDoc) {
      res.status(404).json({
        message: `No se puede encontrar direccion con id: ${addressId}.`
      });
    }

    res.status(200).json({
      address: addressDoc
    });
  } catch (error) {
    res.status(400).json({
      error: 'Su solicitud no pudo ser procesada correctamente!'
    });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const addressId = req.params.id;
    const update = req.body;
    const query = { _id: addressId };

    await Address.findOneAndUpdate(query, update, {
      new: true
    });

    res.status(200).json({
      success: true,
      message: 'Direccion actualizada correctamente!'
    });
  } catch (error) {
    res.status(400).json({
      error: 'Su solicitud no pudo ser procesada correctamente!'
    });
  }
});

router.delete('/delete/:id', async (req, res) => {
  try {
    const address = await Address.deleteOne({ _id: req.params.id });

    res.status(200).json({
      success: true,
      message: `Direccion ha sido borrada correctamente!`,
      address
    });
  } catch (error) {
    res.status(400).json({
      error: 'Su solicitud no pudo ser procesada correctamente!'
    });
  }
});

module.exports = router;
