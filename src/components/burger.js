import React from 'react';
import styled from "@emotion/styled"
import { bool, func } from 'prop-types'


const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2.5rem;
  height: 3rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 112;
   padding-top: 1rem;

  
  &:focus {
    outline: none;
  }
  
  div {
    width: 2.5rem;
    height: 0.20rem;
    background: white;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
`

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;