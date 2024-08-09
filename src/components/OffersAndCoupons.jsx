// OffersAndCoupons.jsx
import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import axios from 'axios';

const OffersAndCoupons = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/v1/offers')
      .then(response => setOffers(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Offers & Coupons</h2>
      <ListGroup>
        {offers.map(offer => (
          <ListGroup.Item key={offer._id}>
            {offer.title}: {offer.description}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default OffersAndCoupons;
