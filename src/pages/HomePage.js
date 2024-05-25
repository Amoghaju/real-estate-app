import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropertyCard from '../components/PropertyCard';

const HomePage = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const { data } = await axios.get('/api/properties');
        setProperties(data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };
    

    fetchProperties();
  }, []);

  return (
    <div>
      <h1>Properties</h1>
      <div className="property-list">
        {properties.map((property) => (
          <PropertyCard key={property._id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
