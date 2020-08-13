import React from "react"
import styled from "@emotion/styled"
import data from "../metadata/methodology"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"


const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
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
  margin: auto;
  max-width: 50vw;
`

const Method = () => {
  const query = useStaticQuery(graphql`
    query {
    methodImg: allFile(
      filter: { relativePath: {}, relativeDirectory: { eq: "images/method" } }
    ) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`)

  return (
    <div>
      <Container>
        <Title>{data.methodology.title}</Title>
        <Text>{data.methodology.text}</Text>
        <Subtitle>{data.methodology.subtitle}</Subtitle>
      </Container>
      <StageContainer>
        <Img
          style={{height:"auto", width:"31vw"}}
          fluid={query.methodImg.nodes[0].childImageSharp.fluid}
          alt="Icono de una pantalla ordenador con graficos"
        />
        <SubStageContainer>
          <Subtitle>{data.methodology.stages[0].title}</Subtitle>
          <Text>{data.methodology.stages[0].text}</Text>
        </SubStageContainer>
      </StageContainer>
      <Arrow>
        <svg viewBox="-10 0 500 110" padding={"0"} margin={"auto"} display={"block"} position={"relative"}>
          <path
            d="M 0 0, Q 0 50 50 50, H400,M 400   50, Q 450 50 450 100,M 451 100,L 430 85,M 449 100, L 470 85" fill="transparent" stroke="#fde300"   strokeWidth="3"/>
        </svg>
      </Arrow>
      <StageContainer>
        <SubStageContainer>
          <Subtitle>{data.methodology.stages[1].title}</Subtitle>
          <Text style={{textAlign:"right"}}>{data.methodology.stages[1].text}</Text>
        </SubStageContainer>
        <Img
          style={{height:"auto", width:"31vw"}}
          fluid={query.methodImg.nodes[1].childImageSharp.fluid}
          alt="Icono de una pantalla ordenador con graficos"
        />
      </StageContainer>
      <StageContainer>
        <Img
          style={{height:"auto", width:"31vw"}}
          fluid={query.methodImg.nodes[2].childImageSharp.fluid}
          alt="Icono de una pantalla ordenador con graficos"
        />
        <SubStageContainer>
          <Subtitle>{data.methodology.stages[2].title}</Subtitle>
          <Text>{data.methodology.stages[2].text}</Text>
        </SubStageContainer>
      </StageContainer>
      <Arrow>
        <svg viewBox="-10 0 500 110" padding={"0"} margin={"auto"} display={"block"} position={"relative"}>
          <path
            d="M 0 0, Q 0 50 50 50, H400,M 400   50, Q 450 50 450 100,M 451 100,L 430 85,M 449 100, L 470 85" fill="transparent" stroke="#fde300"   strokeWidth="3"/>
        </svg>
      </Arrow>
      <StageContainer>
        <SubStageContainer>
          <Subtitle>{data.methodology.stages[3].title}</Subtitle>
          <Text style={{textAlign:"right"}}>{data.methodology.stages[3].text}</Text>
        </SubStageContainer>
        <Img
          style={{height:"auto", width:"31vw"}}
          fluid={query.methodImg.nodes[3].childImageSharp.fluid}
          alt="Icono de una pantalla ordenador con graficos"
        />
      </StageContainer>
      <StageContainer>
        <Img
          style={{height:"auto", width:"31vw"}}
          fluid={query.methodImg.nodes[4].childImageSharp.fluid}
          alt="Icono de una pantalla ordenador con graficos"
        />
        <SubStageContainer>
          <Subtitle>{data.methodology.stages[4].title}</Subtitle>
          <Text>{data.methodology.stages[4].text}</Text>
        </SubStageContainer>
      </StageContainer>
      <Arrow>
        <svg viewBox="-10 0 500 110" padding={"0"} margin={"auto"} display={"block"} position={"relative"}>
          <path
            d="M 0 0, Q 0 50 50 50, H400,M 400   50, Q 450 50 450 100,M 451 100,L 430 85,M 449 100, L 470 85" fill="transparent" stroke="#fde300"   strokeWidth="3"/>
        </svg>
      </Arrow>
      <StageContainer>
        <SubStageContainer>
          <Subtitle>{data.methodology.stages[5].title}</Subtitle>
          <Text style={{textAlign:"right"}}>{data.methodology.stages[5].text}</Text>
        </SubStageContainer>
        <Img
          style={{height:"auto", width:"31vw"}}
          fluid={query.methodImg.nodes[5].childImageSharp.fluid}
          alt="Icono de una pantalla ordenador con graficos"
        />
      </StageContainer>
    </div>
  )
}

export default Method
