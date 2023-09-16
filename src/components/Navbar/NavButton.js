import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
  background: transparent;
  text-decoration: none;
  font-family: "Exo 2", sans-serif;
  font-size: 1.35em;
  color: #f1f1f1;
  font-weight: 600;
  text-shadow: 1px 1px black;
  text-align: center;
  border-radius: 20px;
  white-space: nowrap;
  transition: all ease-in-out 0.5s;
  &:hover {
    opacity: 0.6;
  }
  margin: 0px 10px;
`;

const NavButton = ({ to, label, style }) => {
  return (
    <StyledNavLink to={to} style={style}>
      {label}
    </StyledNavLink>
  );
};

export default NavButton;
