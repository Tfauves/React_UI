import React from "react";
import styled from "styled-components";
import heroImg from "../../assets/heroImg.jpg";

const FlexboxContainer = styled.div`
  /* Center items both horizontally and vertically */
  display: flex;
  justify-content: center;
  align-items: center;

  /* Ensure the container takes up at least the full viewport height */
  min-height: 100vh;

  /* Stack items vertically on smaller screens */
  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 3em;
  }
`;

const HeaderContainer = styled.div`
  flex: 1;
  max-width: 50%;
  padding: 10px;
  font-size: x-large;
`;

const HeroImgContainer = styled.div`
  flex: 1;
  padding: 10px;

  /* Media query for screens with a minimum width of 1200px */
  @media (min-width: 1200px) {
    padding: 30px;
    margin-top: 60px;
    margin-right: 60px;
  }
`;

const HeroImg = styled.img`
  /* Make the image responsive to its container */
  max-width: 100%;

  /* Remove extra spacing under the image */
  display: block;
  border: 1px solid #ccc;
  margin: 0 auto; /* Center the image horizontally */

  /* Adjust the top margin on smaller screens */
  @media (max-width: 768px) {
    margin-top: 1em;
  }
`;

const Hero = () => {
  return (
    <div>
      <FlexboxContainer>
        <HeaderContainer>
          <h1>This will be a heading</h1>
        </HeaderContainer>
        <HeroImgContainer>
          <HeroImg src={heroImg} />
        </HeroImgContainer>
      </FlexboxContainer>
    </div>
  );
};
export default Hero;
