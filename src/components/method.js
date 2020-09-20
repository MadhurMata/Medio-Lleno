import React from "react"
import styled from "@emotion/styled"
import data from "../metadata/methodology"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"


const Desktop = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5% 6rem 0;
      @media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 899px) {
  display: none;
}
`
const Devices = styled.div`
    @media only screen 
  and (min-device-width: 900px) {
    display: none;
}
`


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
        @media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 899px) {
    margin: 0 2rem;
}
`

const RowFlexContainer = styled.div`
  display: flex;
`
const Stages = styled.div`

@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 899px)
  and (-webkit-min-device-pixel-ratio: 2) {
  max-width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
`
const StageContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const SubStageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 40%;
    align-items: flex-start;
`

const SubStageContainer2 = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
  width: 40%;
`


const Title = styled.h1`
  color: white;
  font-size: 1.7rem;
  font-weight: 550;
  
  @media only screen 
  and (min-device-width: 900px) {
      font-size: 2.5rem;    
  }
`
const Subtitle = styled.h1`
  color: white;
  font-size 0.8rem;
  font-weight: 550;
  margin-bottom: 1rem;
  text-align: left;
  width: 100%;
  @media only screen 
  and (min-device-width: 900px) {
      font-size: 1.2rem;
      margin-top: 1rem;    
  }
`

const Text = styled.p`
  color: white;
  font-size 0.8rem;
  @media only screen 
  and (min-device-width: 900px) {
      font-size: 1rem;    
  }
`

const Arrow = styled.div`
  width: 200px;
`
const ArrowLeft = styled.div`
  width: 200px;
  transform: rotateY(180deg); 
`

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 3rem;
`

const RightArrow = styled.i`
  position: relative;
  display: inline-block;
  margin-top: 3rem;
  vertical-align: middle;
  color: yellow;
  box-sizing: border-box;
  min-width: 10px;
  height: 10px;
  border-width: 2px 2px 0 0;
  border-style: solid;
  transform: rotate(45deg);
  z-index: 111;
  
  &:before {
    content: "";
    box-sizing: border-box;
    right: 0px;
    top: -2px;
    position: absolute;
    height: 2px;
    box-shadow: inset 0 0 0 32px;
    transform: rotate(-45deg);
    width: 1.5rem;
    transform-origin: right top;
  }
  
  &:after {
    content: "";
    box-sizing: border-box;
  }

`

const Method = () => {
  const arrowRight = <svg viewBox="-10 0 385 210">
    <path
      d="M 0 0, Q 0 50 50 50, H300,M 300   50, Q 350 50 350 100,M 351 102,L 330 85,M 349 102, L 369 85" fill="transparent" stroke="#fde300"   strokeWidth="3"/>
  </svg>

  const query = useStaticQuery(graphql`
    query {
    methodImg: allFile(
      filter: { relativePath: {}, relativeDirectory: { eq: "images/method" } }
    ) {
      nodes {
        childImageSharp {
          fixed(width: 120, height: 120) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`)

  return (
    <div id={"method"} name={"method"} style={{  display: "flex", justifyContent: "center"}}>
      <Devices>
        <Wrapper>
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
              <SubStageContainer>
                <Subtitle>{data.methodology.stages[0].title}</Subtitle>
                <Text>{data.methodology.stages[0].text}</Text>
              </SubStageContainer>
            </StageContainer>
            <Arrow>{arrowRight}</Arrow>
            <StageContainer>
              <SubStageContainer2>
                <Subtitle>{data.methodology.stages[1].title}</Subtitle>
                <Text>{data.methodology.stages[1].text}</Text>
              </SubStageContainer2>
              <Img
                fixed={query.methodImg.nodes[1].childImageSharp.fixed}
                alt="Icono de una pantalla ordenador con graficos"
              />
            </StageContainer>
            <ArrowLeft>{arrowRight}</ArrowLeft>
            <StageContainer>
              <Img
                fixed={query.methodImg.nodes[2].childImageSharp.fixed}
                alt="Icono de una pantalla ordenador con graficos"
              />
              <SubStageContainer>
                <Subtitle>{data.methodology.stages[2].title}</Subtitle>
                <Text>{data.methodology.stages[2].text}</Text>
              </SubStageContainer>
            </StageContainer>
            <Arrow>{arrowRight}</Arrow>
            <StageContainer>

              <SubStageContainer>
                <Subtitle>{data.methodology.stages[3].title}</Subtitle>
                <Text>{data.methodology.stages[3].text}</Text>
              </SubStageContainer>
              <Img
                fixed={query.methodImg.nodes[3].childImageSharp.fixed}
                alt="Icono de una pantalla ordenador con graficos"
              />
            </StageContainer>
            <ArrowLeft>{arrowRight}</ArrowLeft>
            <StageContainer>
              <Img
                fixed={query.methodImg.nodes[4].childImageSharp.fixed}
                alt="Icono de una pantalla ordenador con graficos"
              />
              <SubStageContainer>
                <Subtitle>{data.methodology.stages[4].title}</Subtitle>
                <Text>{data.methodology.stages[4].text}</Text>
              </SubStageContainer>
            </StageContainer>
            <Arrow>{arrowRight}</Arrow>
            <StageContainer>
              <SubStageContainer>
                <Subtitle>{data.methodology.stages[5].title}</Subtitle>
                <Text>{data.methodology.stages[5].text}</Text>
              </SubStageContainer>
              <Img
                fixed={query.methodImg.nodes[5].childImageSharp.fixed}
                alt="Icono de una pantalla ordenador con graficos"
              />
            </StageContainer>
          </Stages>
        </Wrapper>
      </Devices>
      <Desktop>
        <Container>
          <Title>{data.methodology.title}</Title>
          <Text>{data.methodology.text}</Text>
          <Subtitle>{data.methodology.subtitle}</Subtitle>
        </Container>
        <RowFlexContainer>
          <CardContainer>
            <Img
              fixed={query.methodImg.nodes[0].childImageSharp.fixed}
              alt="Icono de una pantalla ordenador con graficos"
            />
            <Subtitle>{data.methodology.stages[0].title}</Subtitle>
            <Text>{data.methodology.stages[0].text}</Text>
          </CardContainer>
          <RightArrow></RightArrow>
          <CardContainer>
            <Img
              fixed={query.methodImg.nodes[1].childImageSharp.fixed}
              alt="Icono de una pantalla ordenador con graficos"
            />
            <Subtitle>{data.methodology.stages[1].title}</Subtitle>
            <Text>{data.methodology.stages[1].text}</Text>
          </CardContainer>
            <RightArrow></RightArrow>
          <CardContainer>
            <Img
              fixed={query.methodImg.nodes[2].childImageSharp.fixed}
              alt="Icono de una pantalla ordenador con graficos"
            />
            <Subtitle>{data.methodology.stages[2].title}</Subtitle>
            <Text>{data.methodology.stages[2].text}</Text>
          </CardContainer>
        </RowFlexContainer>
        <RowFlexContainer>
          <CardContainer>
            <Img
              fixed={query.methodImg.nodes[3].childImageSharp.fixed}
              alt="Icono de una pantalla ordenador con graficos"
            />
            <Subtitle>{data.methodology.stages[3].title}</Subtitle>
            <Text>{data.methodology.stages[3].text}</Text>
          </CardContainer>
            <RightArrow></RightArrow>
          <CardContainer>
            <Img
              fixed={query.methodImg.nodes[4].childImageSharp.fixed}
              alt="Icono de una pantalla ordenador con graficos"
            />
            <Subtitle>{data.methodology.stages[4].title}</Subtitle>
            <Text>{data.methodology.stages[4].text}</Text>
          </CardContainer>
            <RightArrow></RightArrow>
          <CardContainer>
            <Img
              fixed={query.methodImg.nodes[5].childImageSharp.fixed}
              alt="Icono de una pantalla ordenador con graficos"
            />
            <Subtitle>{data.methodology.stages[5].title}</Subtitle>
            <Text>{data.methodology.stages[5].text}</Text>
          </CardContainer>
        </RowFlexContainer>
      </Desktop>
    </div>

  )
}

export default Method
