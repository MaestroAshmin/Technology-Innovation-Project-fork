/*Vertical list component
Justin Li 104138316
Last edited 2/10/2023*/
import React from 'react';

//must accept objects
function List({ title, items }) {
  console.log(items);
  return (
    <div className="list">
      <h2>{title}</h2>
      {items.map((item) => (
        //show if exists
        <div key={item.id} className="list-item">
          <strong>Name:</strong> {item.name}<br />
          {item.type && (
            <>
              <strong>Service Type:</strong> {item.type}<br />
            </>
          )}
          {item.phone && (
            <>
              <strong>Phone:</strong> {item.phone}<br />
            </>
          )}
          {item.email && (
            <>
              <strong>Email:</strong> {item.email}<br />
            </>
          )}
          {item.address && (
            <>
              <strong>Address:</strong> {item.address}<br />
            </>
          )}
          {item.distance && (
            <>
          <strong>Distance:</strong> {item.distance} km<br />
          </>
          )}
          {item.url && (
            <>
              <strong>URL:</strong> <a href={item.url} target="_blank">{item.url}</a><br />
            </>
          )}
          <hr />
        </div>
      ))}
    </div>
  );
}

export default List;

