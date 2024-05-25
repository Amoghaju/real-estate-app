import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PropertyPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      const { data } = await axios.get(`/api/properties/${id}`);
      setProperty(data);
    };

    fetchProperty();
  }, [id]);

  return (
    <div>
      {property ? (
        <div>
          <h1>{property.title}</h1>
          <p>{property.description}</p>
          <p>{property.price}</p>
          <p>{property.location.city}, {property.location.state}, {property.location.country}</p>
          <p>{property.area} sq. ft.</p>
          <p>{property.bedrooms} Bedrooms, {property.bathrooms} Bathrooms</p>
          <button onClick={() => alert('Express interest functionality to be implemented')}>I'm Interested</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PropertyPage;

