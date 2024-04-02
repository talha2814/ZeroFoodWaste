const express = require('express');
const Item = require('../models/Item');
const router = express.Router();

// Middleware to authenticate and set user
const authenticateUser = (req, res, next) => {
  // Your authentication logic here...
  // It should set req.user based on the provided token
  next();
};

router.use(authenticateUser);

// Post an item
router.post('/items', async (req, res) => {
  try {
    const { userName, productName, description, quantity, unit, category } = req.body;
    // Assume imageUrl comes from the request after you handle file upload
    const item = new Item({ userName, productName, description, quantity, unit, category, userId: req.user._id });
    await item.save();
    res.status(201).json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all items
router.get('/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete an item
router.delete('/items/:id', async (req, res) => {
  try {
    const item = await Item.findOneAndDelete({ _id: req.params.id, userId: req.user._id });
    if (!item) {
      return res.status(404).json({ error: 'Item not found or user not authorized to delete this item' });
    }
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
