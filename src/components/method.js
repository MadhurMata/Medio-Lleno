import React from "react"
import styled from "@emotion/styled"
import data from "../metadata/methodology"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
`

const Stages = styled.div`
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 812px)
  and (-webkit-min-device-pixel-ratio: 2) {
  width: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
`
const SubStageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 32vw;
`

const StageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Title = styled.h1`
  color: white;
  font-size 1.9rem;
  font-weight: 700;
`
const Subtitle = styled.h1`
  color: white;
  font-size 1rem;
  font-weight: 700;
`

const Text = styled.p`
  color: white;
  font-size 0.8rem;
`

const Arrow = styled.div`
  margin-left: 4rem;
  width: 300px;
`
const ArrowLeft = styled.div`
  margin-right: 4rem;
  width: 300px;
  transform: rotateY(180deg);

`

const Method = () => {
  const arrowRight = <svg viewBox="-10 0 500 110">
    <path
      d="M 0 0, Q 0 50 50 50, H300,M 300   50, Q 350 50 350 100,M 351 100,L 330 85,M 349 100, L 370 85" fill="transparent" stroke="#fde300"   strokeWidth="3"/>
  </svg>
  const arrowLeft = <svg viewBox="-10 0 500 110">
    <path
      d="M 0 0, Q 0 50 50 50, H300,M 300   50, Q 350 50 350 100,M 351 100,L 330 85,M 349 100, L 370 85" fill="transparent" stroke="#fde300"   strokeWidth="3"/>
  </svg>

  const query = useStaticQuery(graphql`
    query {
    methodImg: allFile(
      filter: { relativePath: {}, relativeDirectory: { eq: "images/method" } }
    ) {
      nodes {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`)

  return (
    <Wrapper id={"method"} style={{ paddingTop: "108pt", marginTop: "-90pt"}}>
      <Container>
        <Title>{data.methodology.title}</Title>
        <Text>{data.methodology.text}</Text>
        <Subtitle>{data.methodology.subtitle}</Subtitle>
      </Container>
      <Stages>
        <StageContainer>
          <Img
            fixed={query.methodImg.nodes[0].childImageSharp.fixed}
            alt="Icono de una pantalla ordenador con graficos"
          />
          <div style={{width:"3rem"}}></div>
          <SubStageContainer>
            <Subtitle>{data.methodology.stages[0].title}</Subtitle>
            <Text>{data.methodology.stages[0].text}</Text>
          </SubStageContainer>
        </StageContainer>
        <Arrow>{arrowRight}</Arrow>
        <StageContainer>
          <SubStageContainer>
            <Subtitle>{data.methodology.stages[1].title}</Subtitle>
            <Text style={{textAlign:"right"}}>{data.methodology.stages[1].text}</Text>
          </SubStageContainer>
          <div style={{width:"3rem"}}></div>
          <Img
            fixed={query.methodImg.nodes[1].childImageSharp.fixed}
            alt="Icono de una pantalla ordenador con graficos"
          />
        </StageContainer>
        <ArrowLeft>{arrowLeft}</ArrowLeft>
        <StageContainer>
          <Img
            fixed={query.methodImg.nodes[2].childImageSharp.fixed}
            alt="Icono de una pantalla ordenador con graficos"
          />
          <div style={{width:"3rem"}}></div>
          <SubStageContainer>
            <Subtitle>{data.methodology.stages[2].title}</Subtitle>
            <Text>{data.methodology.stages[2].text}</Text>
          </SubStageContainer>
        </StageContainer><Arrow>{arrowRight}</Arrow><StageContainer>
          <SubStageContainer>
            <Subtitle>{data.methodology.stages[3].title}</Subtitle>
            <Text style={{textAlign:"right"}}>{data.methodology.stages[3].text}</Text>
          </SubStageContainer>
          <div style={{width:"3rem"}}></div>
          <Img
            fixed={query.methodImg.nodes[3].childImageSharp.fixed}
            alt="Icono de una pantalla ordenador con graficos"
          />
        </StageContainer>
        <ArrowLeft>{arrowLeft}</ArrowLeft>
        <StageContainer>
          <Img
            fixed={query.methodImg.nodes[4].childImageSharp.fixed}
            alt="Icono de una pantalla ordenador con graficos"
          />
          <div style={{width:"3rem"}}></div>
          <SubStageContainer>
            <Subtitle>{data.methodology.stages[4].title}</Subtitle>
            <Text>{data.methodology.stages[4].text}</Text>
          </SubStageContainer>
        </StageContainer>
        <Arrow>{arrowRight}</Arrow>
        <StageContainer>
          <SubStageContainer>
            <Subtitle>{data.methodology.stages[5].title}</Subtitle>
            <Text style={{textAlign:"right"}}>{data.methodology.stages[5].text}</Text>
          </SubStageContainer>
          <div style={{width:"3rem"}}></div>
          <Img
            fixed={query.methodImg.nodes[5].childImageSharp.fixed}
            alt="Icono de una pantalla ordenador con graficos"
          />
        </StageContainer>
      </Stages>
    </Wrapper>
  )
}

export default Method
