import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import data from "../metadata/data"
import Img from "gatsby-image"
import "../components/slider-component.css"

const Desktop = styled.div`
  display: flex;
  justify-content: space-evenly;;
  margin: 0 6rem;
  position: relative;
  overflow: hidden;
  
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
  align-items: flex-start;
`
const ContainerFoto = styled.div`
  margin: 2rem;
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
  font-size 1.6rem;
  font-weight: 550;
  
  @media only screen 
  and (min-device-width: 900px) {
      font-size: 2.5rem;    
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

const CirclesSlides = styled.div`
 display: flex;
 justify- content: center;
 flex-direction: column;

  @media only screen 
  and (min-device-width: 900px) {
    height: 100vh;
  }
`

const ArrowList = styled.ul`
  display: flex;
  margin: 0;
  li {
    i{
      border-color: white;
    } 
  }
  
  &:hover {
    li {
      i{
        border-color: #fde300;
      } 
    }
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


class Slides extends React.Component {
  state = {
    intervalId: 0,
    slideNumber: 0,
  }

  componentDidMount() {
    const intervalId = setInterval(this.slidesInterval, 3000000)
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
    const intervalId = setInterval(this.slidesInterval, 3000000, slideNumber)
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
    console.log(slideNumber)
    return (
      <CirclesSlides
        id={"queHacemos"}
        name={"queHacemos"}
      >
        <div className="slider-circles" style={{ marginLeft: "80%"}}>
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
        <Devices>
          <SliderWrapper>
            { slideNumber > 0 ?
              <ArrowList onClick={e => { this.handleClick(e, slideNumber - 1) }}>
                <ArrowLine><ArrowLeft>Left</ArrowLeft></ArrowLine>
                <ArrowLine><ArrowLeft>Left</ArrowLeft></ArrowLine>
              </ArrowList>
              : <div></div> }
            <Container>
              <Img
                fixed={this.props.query.slidesImg.nodes[slideNumber].childImageSharp.fixed}
                alt="Liberty statue image"
              />
            </Container>
            { slideNumber < 2 ?
              <ArrowList onClick={e => { this.handleClick(e, slideNumber + 1) }}>
                <ArrowLine><ArrowRight>Right</ArrowRight></ArrowLine>
                <ArrowLine><ArrowRight>Right</ArrowRight></ArrowLine>
              </ArrowList>
              : <div></div> }
          </SliderWrapper>
          <div>
            <Title>{data.data[slideNumber].title}</Title>
            {data.data[slideNumber].text.map((paragraph, key) => {
              return <Text key={key}>{paragraph}</Text>
            })}
          </div>
        </Devices>
          { slideNumber === 1 ?
            <Desktop>
              <SliderWrapper>
                <ContainerFoto>
                  <Img
                    fixed={
                      this.props.query.slidesImg.nodes[slideNumber].childImageSharp.fixed
                    }
                    alt="Liberty statue image"
                  />
                </ContainerFoto>
              </SliderWrapper>
              <Container style={{ maxWidth: "75%", marginLeft: "2rem", alignItems: "flex-end" }}>
                <Title style={{ textAlign: "right" }}>{data.data[slideNumber].title}</Title>
                {data.data[slideNumber].text.map((paragraph, key) => {
                  return <Text style={{ textAlign: "right" }} key={key}>{paragraph}</Text>
                })}
              </Container>
          </Desktop>
          :
          <Desktop>
          <Container style={{ maxWidth: "75%", marginRight: "2rem" }}>
            <Title>{data.data[slideNumber].title}</Title>
            {data.data[slideNumber].text.map((paragraph, key) => {
              return <Text key={key}>{paragraph}</Text>
            })}
          </Container>
          <SliderWrapper>
            <ContainerFoto>
              <Img
                fixed={
                  this.props.query.slidesImg.nodes[slideNumber].childImageSharp.fixed
                }
                alt="Liberty statue image"
              />
              <div style={{ position: "relative", width: "100%", height: "3rem", display: "flex", justifyContent: "space-between", padding: "0 1rem" }}>

              </div>
            </ContainerFoto>
          </SliderWrapper>

          </Desktop>
          }


      </CirclesSlides>
    )
  }
}

export default Slides
