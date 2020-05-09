import React from 'react'
import './index.css'
import styled from 'styled-components'

const defaultImg = "https://i.imgur.com/jYD9RbZ.jpg";

const Container = styled.div`
  background-color: #231e39;
  border-radius: 5px;
  box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
  color: #b3b8cd;
  padding: 30px 0 30px 0;
  position: relative;
  width: 350px;
  max-width: 100%;
  text-align: center;
`;

const Image = styled.img`
  border: 1px solid #03bfcb;
  border-radius: 50%;
  padding: 7px;
`;
const Title = styled.h3`
  margin: 10px 0;
`;
const SubTitle = styled.h6`
  margin: 5px 0;
  text-transform: uppercase;
`;
const Description = styled.p`
  font-size: 14px;
  line-height: 21px;
`; 

export default function index({imgSrc=defaultImg}) {
  return (
    <Container>
      <Image src={defaultImg}/>
      <Title>Sastra Nababan</Title>
      <SubTitle>Medan, Indonesia</SubTitle>
      <Description>Software Engineer <br/> Penggemar Kopi Native</Description>
    </Container>
  );
}