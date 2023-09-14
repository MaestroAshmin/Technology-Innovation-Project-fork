/*Vertical list component
Justin Li 104138316
Last edited 14/09/2023*/
import React from 'react';

function List({ title, items }) {
  return (
    <div className="list">
      <h2>{title}</h2>
      {items.map((item, index) => (
        <div key={index} className="list-item">
          {item}
        </div>
      ))}
    </div>
  );
}

export default List;
