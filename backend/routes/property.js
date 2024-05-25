const express = require('express');
const { createProperty, getProperties, getPropertyById, updateProperty, deleteProperty } = require('../controllers/propertyController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/')
  .post(protect, createProperty)
  .get(getProperties);

router.route('/:id')
  .get(getPropertyById)
  .put(protect, updateProperty)
  .delete(protect, deleteProperty);

module.exports = router;
