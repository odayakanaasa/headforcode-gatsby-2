import React, { Component } from 'react';
import styled from 'styled-components';

// import logo from '../../assets/logo.svg';
import landscape from '../../assets/iStock-599137326.jpg';
import landscapeMobile from '../../assets/iStock-599137326.jpg';
import media from '../../css/media';



const Wrapper = styled.section`
  display: flex;
  height: 20vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // background-image: url(${landscape});
  background-color: #345678;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  @media (${media.tablet}) {
    height: 68vw;
    
  }
`;

const Title = styled.h1`
  margin: 0;
  color: #000;
  font-family: BebasNeue;
  font-size: 81px;
  text-align: center;
  letter-spacing: 8.2px;

  @media (${media.giant}) {
    font-size: ${81 * 0.8}px;
  }

  @media (${media.desktop}) {
    font-size: ${81 * 0.6}px;
  }

  @media (${media.tablet}) {
    font-size: 12vw;
  
  }
`;

const Slogan = styled.h2`
  margin: 0 1vw 4vw;
  color: #fff;
  font-family: SFUIDisplay;
  font-size: 22px;
  text-align: center;
  font-weight: 300;
  letter-spacing: 3.5px;

  @media (${media.giant}) {
    font-size: ${22 * 0.8}px;
  }

  @media (${media.desktop}) {
    font-size: ${22 * 0.6}px;
  }

  @media (${media.tablet}) {
    font-size: 3vw;
    background: black;
  }
`;

class LandscapeSection extends Component {
  render() {
    return (
      <Wrapper>
        <Title>Contact Us...</Title>
      </Wrapper>
    );
  }
}

export default LandscapeSection;
