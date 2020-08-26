import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Slides from "../components/slides"
import Method from "../components/method"
import Contact from "../components/contact"

import "../components/slider-component.css"
import styled from "@emotion/styled"

import emailImg from '../images/sidebar/02_lateral_mail.png'
import instagramImg from '../images/sidebar/03_lateral_link.png'
import linkedInImg from '../images/sidebar/04_lateral_ig.png'

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
  color: white;
  box-sizing: border-box;
  width: 10px;
  height: 10px;
  border-width: 1px 1px 0 0;
  border-style: solid;
  margin: 12px;
  transform: rotate(-45deg);
  z-index: 111;
  
  &:before {
    content: "";
    box-sizing: border-box;
    right: 0.4px;
    top: -0.6px;
    position: absolute;
    height: 1px;
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
`

const ImgContainer = styled.ul`
  margin: -4rem 0.5rem;
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
  height: 15px;
  width: auto;
`

const MainMessage = styled.div`

  color: white;
  line-height: 3rem;
  font-size: 2rem;
  margin: 8rem 2rem 5rem 2rem;
  
      @media only screen 
  and (min-device-width: 900px) {
    margin-left: 4rem;
    h1 {
      line-height: 4rem;
      font-size: 3rem;
    } 
  }
`

const Wave = styled.div`
  color: #fde300;
  position: absolute;
  margin-top: 3rem;

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

class IndexPage extends React.Component {
    state = {
      intervalId: 0,
      slideNumber: 0,
      isMediaShown: true
    }

  componentDidMount(){window.addEventListener('scroll', this.trackScrolling);
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
              <Wave></Wave>
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
