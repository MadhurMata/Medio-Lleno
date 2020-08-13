import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Slides from "../components/Slides"
import Method from "../components/Method"
import Contact from "../components/Contact"

import "../components/slider-component.css"

class IndexPage extends React.Component {
    state = {
      intervalId: 0,
      slideNumber: 0
    }

  componentDidMount(){
    const intervalId = setInterval(this.slidesInterval, 1000000000);
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
    const intervalId = setInterval(this.slidesInterval, 1000000000, slideNumber);
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
        <div className="slider-circles">
          <div className={slideNumber === 0 ? "slider-circle active" : "slider-circle"} onClick={(e)=>{this.handleClick(e,0)}}></div>
          <div className={slideNumber === 1 ? "slider-circle active" : "slider-circle"} onClick={(e)=>{this.handleClick(e,1)}}></div>
          <div className={slideNumber === 2 ? "slider-circle active" : "slider-circle"} onClick={(e)=>{this.handleClick(e,2)}}></div>
        </div>
        <Slides slideNumber={this.state.slideNumber}></Slides>
        <Method></Method>
        <Contact></Contact>
      </Layout>
    )
  }
}

export default IndexPage
