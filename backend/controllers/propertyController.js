const Property = require('../models/Property');

const createProperty = async (req, res) => {
  const { title, description, price, location, area, bedrooms, bathrooms, amenities, images } = req.body;

  const property = new Property({
    title,
    description,
    price,
    location,
    area,
    bedrooms,
    bathrooms,
    amenities,
    images,
    seller: req.user._id
  });

  const createdProperty = await property.save();
  res.status(201).json(createdProperty);
};

const getProperties = async (req, res) => {
  const properties = await Property.find({});
  res.json(properties);
};

const getPropertyById = async (req, res) => {
  const property = await Property.findById(req.params.id);

  if (property) {
    res.json(property);
  } else {
    res.status(404).json({ message: 'Property not found' });
  }
};

const updateProperty = async (req, res) => {
  const { title, description, price, location, area, bedrooms, bathrooms, amenities, images } = req.body;

  const property = await Property.findById(req.params.id);

  if (property) {
    property.title = title;
    property.description = description;
    property.price = price;
    property.location = location;
    property.area = area;
    property.bedrooms = bedrooms;
    property.bathrooms = bathrooms;
    property.amenities = amenities;
    property.images = images;

    const updatedProperty = await property.save();
    res.json(updatedProperty);
  } else {
    res.status(404).json({ message: 'Property not found' });
  }
};

const deleteProperty = async (req, res) => {
  const property = await Property.findById(req.params.id);

  if (property) {
    await property.remove();
    res.json({ message: 'Property removed' });
  } else {
    res.status(404).json({ message: 'Property not found' });
  }
};

module.exports = { createProperty, getProperties, getPropertyById, updateProperty, deleteProperty };
