import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const Cart = ({ item, handlerAdd }) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const handleAdd = () => {
    setQuantity(1);
    handlerAdd(item);
  };

  const getPrice = () => {
    return quantity > 0 ? item.price * quantity : item.price;
  };

  return (
    <Box sx={{ p: 2 }}>
      <div className="card">
        <div className="details">
          <Typography variant="body1">Name: {item.name}</Typography>
          <Typography variant="body1">Price: {getPrice()}</Typography>
        </div>
        <div className="btn-container">
          {quantity === 0 ? (
            <Button variant="contained" onClick={handleAdd}>
              ADD
            </Button>
          ) : (
            <Box className="quantity" sx={{ mt: 2 }}>
              <Button onClick={handleDecrement}>-</Button>
              <Typography variant="body1">Quantity: {quantity}</Typography>
              <Button onClick={handleIncrement}>+</Button>
            </Box>
          )}
        </div>
      </div>
    </Box>
  );
};

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

  const handleAdd = selectedItem => {
    const index = selected.findIndex(item => item.id === selectedItem.id);

    if (index !== -1) {
      const updatedSelected = [...selected];
      updatedSelected[index].Quantity += selected.length+1;
      setSelected(updatedSelected);
    } else {
      setSelected([...selected, { ...selectedItem, quantity: selected.length+1}]);
    }
  };
  console.log(selected)

  return (
    <div className="card_container">
      {list.map((item, index) => (
        <Cart key={index + 10000} item={item} handlerAdd={handleAdd} />
      ))}
    </div>
  );
}

export default CartContainer;
