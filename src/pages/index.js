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

const MainMessage = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  color: white;
  margin: 0rem 2rem 0rem 2rem;
     h1 {
      line-height: 4rem;
      font-size: 3rem;
      font-weight: 700;
    } 
  
      @media only screen 
  and (min-device-width: 900px) {
  margin: 0 6rem;
    h1 {
      line-height: 4rem;
      font-size: 4rem;
    } 
  }
`

const Wave = styled.div`
  color: #fde300;
  position: absolute;
  margin-top: 21rem;

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

const IndexPage = () => {
  const query = useStaticQuery(graphql`
    query {
      slidesImg: allFile(
        filter: { relativePath: {}, relativeDirectory: { eq: "images/slides" } }
      ) {
        nodes {
          childImageSharp {
            fixed(width: 300, height: 350) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `)
    return (
      <Layout>
        <Content>
          <MainMessage id={"hey"} name={"hey"}>
              <h1>Bien Hecho<br/>es mejor que<br/>bien dicho.</h1>
              <Wave></Wave>
          </MainMessage>
          <Slides query={query}></Slides>
          <Method></Method>
          <Contact></Contact>
        </Content>
      </Layout>
    )

}

export default IndexPage
