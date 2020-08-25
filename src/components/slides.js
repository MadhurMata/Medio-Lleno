import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import data from "../metadata/data"

import Img from "gatsby-image"

const Desktop = styled.div`
  display: flex;
  justify-content: space-evenly;;
  margin: 0 1rem 0 4rem;
  max-width: 650px;
      @media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 899px) {
  display: none;
}
`
const Devices = styled.div`
  margin: 0 2rem;
 
    @media only screen 
  and (min-device-width: 900px) {
    display: none;
}
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const TextWrapper = styled.div`
`

const Title = styled.h1`
  color: white;
  padding-top: 1rem;
  font-size 1.6rem;
  font-weight: 550;
`

const Text = styled.p`
color: white;
font-size 0.8rem;
`

const Wave = styled.div`
  color: #fde300;
  position: absolute;

  &:before {
    content: "";
    position: absolute;
    top: -48px;
    left: -16px;
    width: 118px;
    height: 119px;
    border-radius: 87%;
    border-left: solid 9px transparent;
    border-top: solid 9px transparent;
    border-right: solid 9px currentColor;
    border-bottom: solid 9px transparent;
    -webkit-transform: rotate(45deg);
    transform: rotate(-90deg);
  }

  &:after {
    content: "";
    position: absolute;
    top: -129px;
    left: 58px;
    width: 118px;
    height: 119px;
    border-radius: 87%;
    border-left: solid 9px transparent;
    border-top: solid 9px transparent;
    border-right: solid 9px currentColor;
    border-bottom: solid 9px transparent;
    -webkit-transform: rotate(45deg);
    transform: rotate(90deg);
  }
`

const Slides = props => {
  const query = useStaticQuery(graphql`
    query {
      slidesImg: allFile(
        filter: { relativePath: {}, relativeDirectory: { eq: "images/slides" } }
      ) {
        nodes {
          childImageSharp {
            fixed(width: 200, height: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `)
  return (
    <div style={{display: "flex", justifyContent: "center"}}>
      <Devices>
        <Container>
          <Img
            fixed={
              query.slidesImg.nodes[props.slideNumber].childImageSharp.fixed
            }
            alt="Liberty statue image"
          />
        </Container>
        <TextWrapper>
          <Title>{data.data[props.slideNumber].title}</Title>
          {data.data[props.slideNumber].text.map((paragraph, key) => {
            return <Text key={key}>{paragraph}</Text>
          })}
        </TextWrapper>
      </Devices>
      <Desktop>
        <Container style={{  maxWidth: "80%" }}>
          <Title>{data.data[props.slideNumber].title}</Title>
          {data.data[props.slideNumber].text.map((paragraph, key) => {
            return <Text key={key}>{paragraph}</Text>
          })}
        </Container>
        <Container>
          <Img
            fixed={
              query.slidesImg.nodes[props.slideNumber].childImageSharp.fixed
            }
            alt="Liberty statue image"
          />
          <div style={{ position: "relative", height: "3rem" }}></div>
        </Container>
      </Desktop>
    </div>
  )
}

export default Slides
