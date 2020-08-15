import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import data from "../metadata/data"

import Img from "gatsby-image"

const Container = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
padding: 0 1rem;
`

const Title = styled.h1`
color: white;
font-size 1.9rem;
font-weight: 700;
`

const Text = styled.p`
color: white;
font-size 1rem;
`

const Wave = styled.div`
  color: #fde300;
  position: absolute;
  left: 1rem;
  
  &:before{
    content: '';
    position: absolute;
    left: 0;
    top: 0;
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
  
  &:after{
    content: '';
    position: absolute;
    top: -81px;
    left: 74px;
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





const Slides = (props) => {
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
`
)
  return (
    <Container>
      <Img
           fixed={query.slidesImg.nodes[props.slideNumber].childImageSharp.fixed}
           alt="Liberty statue image"/>
      <div style={{position: "relative", height: "3rem"}}>
      <Wave></Wave>
      </div>
      <Title>{data.data[props.slideNumber].title}</Title>
      {data.data[props.slideNumber].text.map( (paragraph, key) =>{
        return <Text key={key}>{paragraph}</Text>
      })}
    </Container>
  )
}

export default Slides;