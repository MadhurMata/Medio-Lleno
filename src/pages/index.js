import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Slides from "../components/slides"
import Method from "../components/method"
import Contact from "../components/contact"

import "../components/slider-component.css"
import styled from "@emotion/styled"

import emailImg from '../images/footer/01-Mesa de trabajo 5.png'
import instagramImg from '../images/footer/02-Mesa de trabajo 5 copia.png'
import linkedInImg from '../images/footer/03-Mesa de trabajo 5 copia 2.png'

const SideBar = styled.div`
  height: 100%; 
  width: 5rem;
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  overflow-x: hidden;
        @media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 899px) {
  display: none;
}
`

const Arrow = styled.i`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  color: yellow;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  border-width: 2px 2px 0 0;
  border-style: solid;
  margin: 12px;
  transform: rotate(-45deg);
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
    width: 5rem;
    transform-origin: right top;
  }
  
  &:after {
    content: "";
    box-sizing: border-box;
  }

`

const Content = styled.div`
    @media only screen 
  and (min-device-width: 900px) {
    margin-right: 5rem;
}
  padding: 0px 10px;
`

const ImgContainer = styled.ul`
  margin: 0 0.5rem;
  z-index: 111;
  list-style-type: none;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%
`

const Image = styled.img`
  display: block;
  z-index: 111;
  height: 20px;
  width: auto;
  background-color: white;
  color: yellow;
`

const MainMessage = styled.div`
  margin-top: 8rem;
  margin-left: 4rem;
  color: white;
  
  h1 {
    line-height: 4rem;
    font-size: 3rem;
  }
  
        @media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 899px) {
  margin-left: 2rem;
}
`

class IndexPage extends React.Component {
    state = {
      intervalId: 0,
      slideNumber: 0,
      isMediaShown: true
    }

  componentDidMount(){
    // window.addEventListener('scroll', this.trackScrolling);
    const intervalId = setInterval(this.slidesInterval, 30000);
    this.setState({intervalId: intervalId});
  }

  slidesInterval = () => {
      let slideNumber = this.state.slideNumber;
      slideNumber < 2 ? slideNumber++ : slideNumber = 0;

    this.setState({
        slideNumber: slideNumber
      })
  }
  isBottom(el) {
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  }

  isTop(el) {
    return el.getBoundingClientRect().top <= window.innerHeight;
  }

  trackScrolling = () => {
    const wrappedElement = document.getElementById('ttt');
    console.log("media on scroll function", this.state.isMediaShown);
    console.log("media on scroll function", this.state.isMediaShown);
    if (this.isBottom(wrappedElement)) {
      this.setState({
        isMediaShown: false
      })
      document.removeEventListener('scroll', this.trackScrolling);
    } else if (this.isTop(wrappedElement)) {
      this.setState({
        isMediaShown: true
      })
      document.removeEventListener('scroll', this.trackScrolling);
    }
  };

  handleClick = (e, slideNumber)=> {
    e.nativeEvent.stopImmediatePropagation();
    clearInterval(this.state.intervalId)
    this.setState({slideNumber: slideNumber});
    const intervalId = setInterval(this.slidesInterval, 30000, slideNumber);
    this.setState({
      intervalId: intervalId});
}

  componentWillUnmount = () => {
    // use intervalId from the state to clear the interval
    clearInterval(this.state.intervalId);
    document.removeEventListener('scroll', this.trackScrolling);

  }


  render() {
    console.log("isMediaShown", this.state.isMediaShown);
    const { slideNumber, isMediaShown  } = this.state
    const media = ["Email", "Instagram", "LinkedIn"]

    return (
      <Layout>
        <SEO/>
        <SideBar>
          {isMediaShown ?
            (
              <Container>
                <Arrow></Arrow>
                <ImgContainer>
                  <li><Image src={emailImg} alt="Email logo"/></li>
                  <li><Image src={instagramImg} alt="Instagram logo"/></li>
                  <li style={{marginBottom: "0"}}><Image src={linkedInImg} alt="LinkedIN logo"/></li>
                </ImgContainer>
                <Arrow style={{  transform: "rotate(135deg)"}}></Arrow>
              </Container>
            ) : null }
        </SideBar>
        <Content>
          <MainMessage id={"hey"} name={"hey"}>
              <h1>Bien Hecho<br/>es mejor que<br/>bien dicho.</h1>
          </MainMessage>
          <div className="slider-circles" style={{  marginTop:"2rem", marginLeft: "80%"}}>
            <div className={slideNumber === 0 ? "slider-circle active" : "slider-circle"} onClick={(e)=>{this.handleClick(e,0)}}></div>
            <div className={slideNumber === 1 ? "slider-circle active" : "slider-circle"} onClick={(e)=>{this.handleClick(e,1)}}></div>
            <div className={slideNumber === 2 ? "slider-circle active" : "slider-circle"} onClick={(e)=>{this.handleClick(e,2)}}></div>
          </div>
          <Slides slideNumber={this.state.slideNumber}></Slides>
          <Method></Method>
          <Contact></Contact>
        </Content>
      </Layout>
    )
  }
}

export default IndexPage
