import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import data from "../metadata/data"
import Img from "gatsby-image"
import "../components/slider-component.css"

const Desktop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 5% 15% 0;
  position: relative;
  overflow: hidden;

  @media only screen and (max-device-width: 999px) {
    display: none;
  }
`
const Devices = styled.div`
  margin: 0 2rem;
    margin-bottom: 2rem;
  @media only screen and (min-device-width: 1000px) {
    display: none;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 60%;
`

const ContainerDesktop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 60%;
  
`
const ContainerFoto = styled.div`
  width: 38%;
  min-width: 500px
  height: auto;
`

const SliderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

const Title = styled.h1`
  color: white;
  padding-top: 1rem;
  font-size: 1.4rem;
  line-height: 1.3;
  font-weight: 550;
  
  @media only screen 
  and (min-device-width: 1000px) {
      font-size: 2.5rem;    
  }
`

const Text = styled.p`
color: white;
font-size 0.8rem;

  @media only screen 
  and (min-device-width: 1000px) {
      font-size: 1rem;    
  }
`

const CirclesSlides = styled.div`
 display: flex;
 justify- content: center;
 flex-direction: column;
`

const ArrowList = styled.ul`
  display: flex;
  margin: 0;
  li {
    i {
      border-color: white;
    }
  }
  
  &:hover {
    li {
      i {
        animation: myfirst 1s 1;
      }
    } 
  }

  @keyframes myfirst {
    0%    {border-color: #fde300;
    100%    {border-color: #fde300;
  }
`

const ArrowLine = styled.li`
  width: 6px;
  text-align: center;
  list-style: none;
  display: inline-block;
`

const ArrowRight = styled.i`
  display: inline-block;
  width: 0.8rem;
  height: 0.8rem;
  border: 3px solid;
  border-bottom: 0;
  border-left: 0;
  border-radius: 10%;
  text-indent: -999rem;
  transform: rotate(45deg);
`
const ArrowLeft = styled.i`
  display: inline-block;
  width: 0.8rem;
  height: 0.8rem;
  border: 3px solid;
  border-bottom: 0;
  border-left: 0;
  border-radius: 10%;
  text-indent: -999rem;
  transform: rotate(225deg);
`

const Slide = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

class Slides extends React.Component {
  state = {
    intervalId: 0,
    slideNumber: 0,
  }

  componentDidMount() {
    const intervalId = setInterval(this.slidesInterval, 30000)
    this.setState({ intervalId: intervalId })
  }

  slidesInterval = () => {
    let slideNumber = this.state.slideNumber
    slideNumber < 2 ? slideNumber++ : (slideNumber = 0)

    this.setState({
      slideNumber: slideNumber,
    })
  }

  handleClick = (e, slideNumber) => {
    e.nativeEvent.stopImmediatePropagation()
    clearInterval(this.state.intervalId)
    this.setState({ slideNumber: slideNumber })
    const intervalId = setInterval(this.slidesInterval, 30000, slideNumber)
    this.setState({
      intervalId: intervalId,
    })
  }

  componentWillUnmount = () => {
    // use intervalId from the state to clear the interval
    clearInterval(this.state.intervalId)
  }

  render() {
    const { slideNumber } = this.state
    return (
      <CirclesSlides id={"queHacemos"} name={"queHacemos"}>
        <Devices>
          <div className="slider-circles" style={{ marginLeft: "80%" }}>
            <div
              className={
                slideNumber === 0 ? "slider-circle active" : "slider-circle"
              }
              onClick={e => {
                this.handleClick(e, 0)
              }}
            ></div>
            <div
              className={
                slideNumber === 1 ? "slider-circle active" : "slider-circle"
              }
              onClick={e => {
                this.handleClick(e, 1)
              }}
            ></div>
            <div
              className={
                slideNumber === 2 ? "slider-circle active" : "slider-circle"
              }
              onClick={e => {
                this.handleClick(e, 2)
              }}
            ></div>
          </div>
          <SliderWrapper>
            {slideNumber > 0 ? (
              <ArrowList
                onClick={e => {
                  this.handleClick(e, slideNumber - 1)
                }}
              >
                <ArrowLine>
                  <ArrowLeft>Left</ArrowLeft>
                </ArrowLine>
              </ArrowList>
            ) : (
              <div></div>
            )}
            <Container>
              <Img
                style={{ width: "100%", height: "auto" }}
                fluid={
                  this.props.query.slidesImg.nodes[slideNumber].childImageSharp
                    .fluid
                }
                alt="Liberty statue image"
              />
            </Container>
            {slideNumber < 2 ? (
              <ArrowList
                onClick={e => {
                  this.handleClick(e, slideNumber + 1)
                }}
              >
                <ArrowLine>
                  <ArrowRight>Right</ArrowRight>
                </ArrowLine>
              </ArrowList>
            ) : (
              <div></div>
            )}
          </SliderWrapper>
          <div>
            <Title>{data.data[slideNumber].title}</Title>
            {data.data[slideNumber].text.map((paragraph, key) => {
              return <Text key={key}>{paragraph}</Text>
            })}
          </div>
        </Devices>
        <Desktop>
          <Slide>
            <ContainerDesktop style={{ maxWidth: "75%", marginRight: "3rem" }}>
              <Title>{data.data[0].title}</Title>
              {data.data[0].text.map((paragraph, key) => {
                return <Text key={key}>{paragraph}</Text>
              })}
            </ContainerDesktop>
            <ContainerFoto>
              <Img
                fluid={
                  this.props.query.slidesImg.nodes[0].childImageSharp.fluid
                }
                alt="Liberty statue image"
              />
            </ContainerFoto>
          </Slide>
          <Slide>
            <ContainerFoto>
              <Img
                fluid={
                  this.props.query.slidesImg.nodes[1].childImageSharp.fluid
                }
                alt="Liberty statue image"
              />
            </ContainerFoto>
            <ContainerDesktop
              style={{
                maxWidth: "75%",
                marginLeft: "3.2rem",
                alignItems: "flex-end",
              }}
            >
              <Title style={{ textAlign: "right" }}>{data.data[1].title}</Title>
              {data.data[1].text.map((paragraph, key) => {
                return (
                  <Text style={{ textAlign: "right" }} key={key}>
                    {paragraph}
                  </Text>
                )
              })}
            </ContainerDesktop>
          </Slide>
          <Slide>
            <ContainerDesktop style={{ maxWidth: "75%", marginRight: "3.2rem" }}>
              <Title>{data.data[2].title}</Title>
              {data.data[2].text.map((paragraph, key) => {
                return <Text key={key}>{paragraph}</Text>
              })}
            </ContainerDesktop>
            <ContainerFoto>
              <Img
                fluid={
                  this.props.query.slidesImg.nodes[2].childImageSharp.fluid
                }
                alt="Liberty statue image"
              />
            </ContainerFoto>
          </Slide>
        </Desktop>
      </CirclesSlides>
    )
  }
}

export default Slides
