import React, { useState, useEffect } from 'react';
import Cart from './Cart';

function CartContainer() {
  const [list, setList] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/products');
        const data = await response.json();
        setList(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleAdd = (selectedItem) => {
    const index = selected.findIndex((item) => item.id === selectedItem.id);

    if (index !== -1) {
      const updatedSelected = [...selected];
      updatedSelected[index].Quantity += 1;
      setSelected(updatedSelected);
    } else {
      setSelected([...selected, { ...selectedItem, Quantity: 1 }]);
    }
  };

  console.log(selected);

  return (
    <div className="card_container">
      {list.map((item, index) => (
        <Cart key={index + 10000} items={item} handlerAdd={handleAdd} />
      ))}
    </div>
  );
}

export default CartContainer;
