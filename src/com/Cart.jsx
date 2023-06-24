import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const Cart = ({ items, handlerAdd }) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + 1;
      if (newQuantity > 0) {
        handlerAdd({ ...items, Quantity: newQuantity }); 
      }
      return newQuantity;
    });
  };


  
  

  const handleDecrement = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity - 1;
      if (newQuantity > 0) {
        handlerAdd({ ...items, Quantity: newQuantity-1 }); 
      }
      
    });
  };

 
  
 
  

  // const handleDecrement = () => {
  //   if (quantity > 0) {
  //     setQuantity((prevQuantity) => prevQuantity - 1);
  //   }
  // };

  
  


  const handleAdd = () => {
    setQuantity(1);
    handlerAdd(items);
  };

  const getPrice = () => {
    return quantity > 0 ? items?.prize * quantity : items?.prize;
  };

  return (
    <Box sx={{ p: 2 }}>
      <div className="card">
        <div className="details">
          <Typography variant="body1">Name: {items?.name}</Typography>
          <Typography variant="body1">Price: {getPrice()}</Typography>
        </div>
        <div className="btn-container">
          {quantity >1 
            ? (
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

export default Cart;
