import React from 'react';
import { Link } from 'react-router-dom';

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <h2>{property.title}</h2>
      <p>{property.location.city}, {property.location.state}, {property.location.country}</p>
      <p>{property.price}</p>
      <Link to={`/properties/${property._id}`}>View Details</Link>
    </div>
  );
};

export default PropertyCard;
