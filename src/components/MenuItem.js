import React from 'react';

const MenuItem = ({ item }) => {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>{item.price}</p>
      <p>{item.dietary}</p>
    </div>
  );
};

export default MenuItem;