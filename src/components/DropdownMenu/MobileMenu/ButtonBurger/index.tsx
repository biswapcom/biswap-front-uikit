import React, { useEffect, useState } from 'react';
import { StyledBurger } from './Burger.styled';

const Burger = ({ open } : { open: boolean }) => {  
  
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  useEffect(() => {
    open && setIsLoaded(true)
  }, [open])
  
  return (
    <StyledBurger 
      aria-label="Toggle menu" 
      isLoaded={isLoaded} 
      aria-expanded={open} 
      open={open}
    >
      <span />
      <span />
      <span />
    </StyledBurger>
  )
}

export default Burger;
