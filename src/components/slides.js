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

const TextWrapper = styled.div`
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
      <div
        style={{ display: "flex", justifyContent: "center", flexDirection:"column", height: "100vh" }}
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
          <Container>
            <Img
              fixed={this.props.query.slidesImg.nodes[slideNumber].childImageSharp.fixed}
              alt="Liberty statue image"
            />
          </Container>
          <TextWrapper>
            <Title>{data.data[slideNumber].title}</Title>
            {data.data[slideNumber].text.map((paragraph, key) => {
              return <Text key={key}>{paragraph}</Text>
            })}
          </TextWrapper>
        </Devices>
        <Desktop>
          <Container style={{ maxWidth: "75%", marginRight: "2rem" }}>
            <Title>{data.data[slideNumber].title}</Title>
            {data.data[slideNumber].text.map((paragraph, key) => {
              return <Text key={key}>{paragraph}</Text>
            })}
          </Container>
          <Container>
            <Img
              fixed={
                this.props.query.slidesImg.nodes[slideNumber].childImageSharp.fixed
              }
              alt="Liberty statue image"
            />
            <div style={{ position: "relative", height: "3rem" }}></div>
          </Container>
        </Desktop>
      </div>
    )
  }
}

export default Slides
