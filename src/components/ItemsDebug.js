import React, { useContext } from 'react';
import { ItemsContext } from '../contexts/ItemsContext';

function ItemsDebug() {
  const { items } = useContext(ItemsContext);

  return (
    <div style={{ padding: '1rem', backgroundColor: '#f8f8f8', margin: '1rem 0' }}>
      <h3>Items in Context Debug</h3>
      {items.length === 0 ? (
        <p>No items in context.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ItemsDebug;
