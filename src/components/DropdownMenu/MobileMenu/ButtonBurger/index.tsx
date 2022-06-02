import React, { useCallback } from 'react';
import { bool, func } from 'prop-types';
import { StyledBurger } from './Burger.styled';

const Burger = ({ open } : { open: boolean }) => {  
  
  return (
    <StyledBurger aria-label="Toggle menu" aria-expanded={open} open={open}>
      <span />
      <span />
      <span />
    </StyledBurger>
  )
}

export default Burger;
