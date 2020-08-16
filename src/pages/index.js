import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Slides from "../components/slides"
import Method from "../components/method"
import Contact from "../components/contact"

import "../components/slider-component.css"
import styled from "@emotion/styled"

const SideBar = styled.div`
  height: 100%; 
  width: 5rem;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 20px;
`

const Content = styled.div`
  margin-right: 5rem;
  padding: 0px 10px;
`

class IndexPage extends React.Component {
    state = {
      intervalId: 0,
      slideNumber: 0
    }

  componentDidMount(){
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
  }

  render() {
      const slideNumber = this.state.slideNumber
    return (
      <Layout>
        <SEO title="Home"/>
        <SideBar></SideBar>
        <Content>
          <div className="slider-circles" style={{  paddingTop: "70pt", marginLeft: "15rem"}}>
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
