import React from "react";
import styled from "styled-components";

const MidSection = styled.section`
  min-height: 100vh;
  padding: 20vh 60px 30vh;
  background-color: #fff;
`;

const Container = styled.div`
  max-width: 1160px;
  margin-left: auto;
  margin-right: auto;
  margin-top: -6em;
  @media (max-width: 1200px) {
    // Styles for laptops
  }

  @media (max-width: 992px) {
    // Styles for tablets
    flex-direction: column;
    height: auto;
  }

  @media (max-width: 768px) {
    // Styles for mobile devices
    flex-direction: column;
    height: auto;
  }
`;

const StyledHeader = styled.h1`
  color: #1a1f32;
  letter-spacing: -0.02em;
  margin-top: 0;
  margin-bottom: 30px;
  font-family: "Poppins", sans-serif;
  font-size: 60px;
  line-height: 94px;
`;

const StyledSubHeader = styled.p`
  color: #1a1f32;
  opacity: 0.8;
  margin-bottom: 60px;
  margin-top: -20px;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
`;

const MiddleSection = () => {
  return (
    <MidSection>
      <Container>
        <StyledHeader>Explore our console selection</StyledHeader>
        <StyledSubHeader>
          we have the most understated and drab consoles available.
        </StyledSubHeader>
      </Container>
    </MidSection>
  );
};
export default MiddleSection;
