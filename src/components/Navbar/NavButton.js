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
  opacity: ${(props) => (props.hover ? "60%" : "100%")};
  margin: 0px 10px;
`;

const NavButton = ({ to, label, style }) => {
  const [hover, setHover] = useState(false);

  return (
    <StyledNavLink
      to={to}
      style={style}
      hover={hover}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {label}
    </StyledNavLink>
  );
};

export default NavButton;
