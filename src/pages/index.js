import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Slides from "../components/slides"
import Method from "../components/method"
import Contact from "../components/contact"
import { useStaticQuery, graphql } from "gatsby"


import "../components/slider-component.css"
import styled from "@emotion/styled"

const Content = styled.div`
    @media only screen 
  and (min-device-width: 900px) {
}
`

const Desktop = styled.div`
  @media only screen and (min-device-width: 320px) and (max-device-width: 899px) {
    display: none;
  }
`
const Devices = styled.div`
  margin: 0 2rem;
  @media only screen and (min-device-width: 900px) {
    display: none;
  }
`

const MainMessage = styled.div`
  display: flex;
  align-items: start-end;
  flex-direction: column;
  height: 100vh;
  color: white;
  margin: 0;
     h1 {
        line-height: 3.5rem;
        font-size: 3.2rem;
        font-weight: 700;
        margin: 0;
    } 
  
      @media only screen 
  and (min-device-width: 900px) {
  margin: 0 10rem;
    h1 {
      line-height: 4.8rem;
      font-size: 4.6rem;
      margin: 0;

    } 
  }
`

const Wave = styled.div`
  color: #fde300;
  position: absolute;
  margin-top: 33rem;

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
  
    @media only screen 
  and (min-device-width: 900px) {
    margin-top: 33rem;
      &:before {
    content: "";
    position: absolute;
    top: -48px;
    left: -16px;
    width: 200px;
    height: 200px;
    border-radius: 87%;
    border-left: solid 18px transparent;
    border-top: solid 18px transparent;
    border-right: solid 18px currentColor;
    border-bottom: solid 18px transparent;
    -webkit-transform: rotate(45deg);
    transform: rotate(-90deg);
  }

  &:after {
    content: "";
    position: absolute;
      top: -178px;
    left: 111px;
    width: 200px;
    height: 200px;
    border-radius: 87%;
    border-left: solid 18px transparent;
    border-top: solid 18px transparent;
    border-right: solid 18px currentColor;
    border-bottom: solid 18px transparent;
    -webkit-transform: rotate(45deg);
    transform: rotate(90deg);
  }

`

const IndexPage = () => {
  const query = useStaticQuery(graphql`
    query {
      slidesImg: allFile(
        filter: { relativePath: {}, relativeDirectory: { eq: "images/slides" } }
      ) {
        nodes {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)
      console.log(query);
    return (
      <Layout>
        <Devices>
          <MainMessage id={"hey"} name={"hey"}>
            <h1 style={{    marginTop: "56%"
            }}>Bien</h1>
            <h1>hecho</h1>
            <h1>es mejor</h1>
            <h1 style={{  lineHeight: "4.3rem;"}}>que bien</h1>
            <h1 style={{  lineHeight: "5.3rem"}}>dicho.</h1>
            <Wave></Wave>
          </MainMessage>
        </Devices>
        <Desktop>
          <MainMessage id={"hey"} name={"hey"}>
              <h1 style={{  lineHeight: "5.2rem",   marginTop: "20%"
              }}>Bien hecho</h1>
              <h1 style={{  lineHeight: "4.3rem"}}>es mejor que</h1>
              <h1 style={{  lineHeight: "7.8rem"}}>bien dicho.</h1>
              <Wave></Wave>
          </MainMessage>
        </Desktop>
        <Content>
          <Slides query={query}></Slides>
          <Method></Method>
          <Contact></Contact>
        </Content>
      </Layout>
    )

}

export default IndexPage
