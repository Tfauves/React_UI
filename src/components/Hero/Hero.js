import React from "react";
import styled from "styled-components";
import heroImg from "../../assets/heroImg.png";
import heroBg from "../../assets/drab-space-bg.jpg";

const HeroSection = styled.section`
  min-height: 70vh;
  padding: 20vh 60px;
  background-image: url(${heroBg});
  background-size: cover;
`;

const StyledHeader = styled.h1`
  color: #fff;
  letter-spacing: -0.02em;
  margin-top: 0;
  margin-bottom: 20px;
  font-family: "Poppins", sans-serif;
  font-size: 75px;
  line-height: 94px;
`;

const StyledSubHeader = styled.p`
  color: #fff;
  margin-bottom: 60px;
  font-family: "Poppins", sans-serif;
  font-size: 21px;
  font-weight: 400;
  line-height: 25px;
`;

const Container = styled.div`
  max-width: 1160px;
  margin-left: auto;
  margin-right: auto;
`;

const FlexboxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const LeftBlock = styled.div`
  min-width: 400px;
  margin-bottom: 60px;
`;

const RightBlock = styled.div`
  min-width: 400px;
  margin-right: 60px;
`;

const HeroImg = styled.img`
  max-width: 80%;
`;

const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <FlexboxContainer>
          <LeftBlock>
            <StyledHeader>Drab Space Consoles</StyledHeader>
            <StyledSubHeader>
              Space is complex. Your console shouldn't be.
            </StyledSubHeader>
          </LeftBlock>
          <RightBlock>
            <HeroImg src={heroImg} />
          </RightBlock>
        </FlexboxContainer>
      </Container>
    </HeroSection>
  );
};
export default Hero;
