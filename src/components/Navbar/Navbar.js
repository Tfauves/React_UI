import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import NavButton from "./NavButton";
// import { AuthContext } from "../Providers/AuthProvider";

const NavBarContainer = styled.nav`
  display: flex;
  background-color: #3a1447;
  position: fixed;
  width: 100%;
  z-index: 9999;
  top: 0;
  left: 0;
  flex-direction: row;
  height: 60px;
`;

const NavSectionLogo = styled.div`
  display: flex;
  align-items: center;
  padding: 0em 1.2em;
  margin-left: 60px;
`;

const NavSection = styled.div`
  display: flex;
  align-items: center;
  padding: 0em 1.2em;
`;

const NavBar = (props) => {
  //   const [auth] = useContext(AuthContext);
  const location = useLocation();
  //   const currentPath = location.pathname;

  return (
    <NavBarContainer>
      <NavSectionLogo>
        <NavButton to="/" label="Home" />
      </NavSectionLogo>
      {/* <NavSection style={{ flex: 1, justifyContent: "flex-end" }}>
        {auth.token ? (
          <div>
            <NavButton
              to={currentPath === "/adminlogin" ? "/admindash" : "/profile"}
              label="dashboard"
            />
            <NavButton to="/logout" label="logout" />
          </div>
        ) : (
          <div>
            <NavButton to="/login" label="login" />
            <NavButton to="/about" label="about" />
          </div>
        )}
      </NavSection> */}
    </NavBarContainer>
  );
};

export default NavBar;
