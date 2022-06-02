import React from 'react';
import { bool, func } from 'prop-types';
import { StyledBurger } from './Burger.styled';

const Burger = ({ open } : { open: boolean }) => {
  
  const isExpanded = open ? true : false;
  
  return (
    <StyledBurger aria-label="Toggle menu" aria-expanded={isExpanded} open={open}>
      <span />
      <span />
      <span />
    </StyledBurger>
  )
}

export default Burger;
