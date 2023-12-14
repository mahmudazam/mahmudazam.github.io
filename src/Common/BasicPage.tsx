
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const BasicPage = styled.div`
  @media only screen and (min-width: 768px) {
    padding-left: 30%;
    padding-right: 30%;
    padding-top: 11%;
    padding-bottom: 7.5%;
  }
  @media only screen and (max-width: 768px) {
    padding-left: 7.5%;
    padding-right: 7.5%;
    padding-top: 35%;
    padding-bottom: 11%;
  }
  margin: '0%';
  animation: ${fadeIn} 0.5s ease-in-out;
  text-align: justify;
`;

export default BasicPage
