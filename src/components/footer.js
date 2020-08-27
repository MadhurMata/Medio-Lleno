import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import styled from "@emotion/styled"
import Img from "gatsby-image"
import data from "../metadata/contact"

const Desktop = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  margin-top: 2rem;
  justify-content: space-around;
  align-items: flex-end;
  background-color: white;  
  z-index: 100;
    
  @media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 899px) {
  display: none;
}
`

const Devices = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  background-color: white;  
  margin-top: 2rem;
  
    @media only screen 
  and (min-device-width: 900px) {
    display: none;
}
`

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
`

const ContainerTexts = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-item: center;
  font-size: 0.8rem;
  p {
    color: #13c1b5;
    margin-left: 2rem;

  }
`

const ImgContainer = styled.div`
  margin: 1rem;
`

const Footer = () => {
  const media = ["Email", "Instagram", "LinkedIn"]
  const query = useStaticQuery(graphql`
    query {
      footerImg: allFile(
        filter: { relativePath: {} relativeDirectory: { eq: "images/footer" }}
      ) {
        nodes {
          childImageSharp {
            fixed(width: 40, height: 30) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `)
  return (
    <>
      <Devices>
        <Container>
          {query.footerImg.nodes.map((node, key)=>{
            return (
              <ImgContainer>
                <Link key={key} to="/" style={{ textDecoration: `none` }}>
                  <Img
                    fixed={query.footerImg.nodes[key].childImageSharp.fixed}
                    alt={`${media[key]} logo`}/>
                </Link>
              </ImgContainer>
            )
          })}
        </Container>
      </Devices>
      <Desktop>
        <ContainerTexts>
          <p>{data.contact.telephoneNumber}</p>
          <p>{data.contact.email}</p>
        </ContainerTexts>
        <Container>
          {query.footerImg.nodes.map((node, key)=>{
            return (
              <ImgContainer>
                <Link key={key} to="/" style={{ textDecoration: `none` }}>
                  <Img
                    fixed={query.footerImg.nodes[key].childImageSharp.fixed}
                    alt={`${media[key]} logo`}/>
                </Link>
              </ImgContainer>
            )
          })}
          <div id="ttt"></div>
        </Container>
      </Desktop>
    </>
  )
}

export default Footer
