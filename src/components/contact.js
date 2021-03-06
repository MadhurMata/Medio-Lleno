import React from "react"
import data from "../metadata/contact"
import styled from "@emotion/styled"
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Wrapper = styled.div`
  height: 100vh; 
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (min-device-width: 320px) and (max-device-width: 999px) {
    display: none;
  }
`

const Desktop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Devices = styled.div`
  margin: 0 2rem;
  @media only screen and (min-device-width: 1000px) {
    display: none;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const DesktopWrapper = styled.div`
  height: 50%;
  max-height: 30rem;  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 5% 15% 0;
  @media only screen and (min-device-width: 320px) and (max-device-width: 999px) {
    display: none;
  }
      @media only screen 
  and (min-device-width: 1800px) {
  max-width: 1800px;
  }
`

const Title = styled.h1`
  color: white;
  font-family: 'Futura-bold', Fallback, sans-serif;
  font-size 1.6rem;
  font-weight: 550;
  text-align: left;
  width: 100%;

@media only screen 
  and (min-device-width: 1000px) {
      font-size: 2.5rem;    
  }

`

const Text = styled.p`
color: white;
font-size 0.8rem;
text-align: left;
width: 100%;

@media only screen 
  and (min-device-width: 1000px) {
      font-size: 1rem;
  }
`
const Subtitle = styled.h1`
  color: white;
  font-family: 'Futura-bold', Fallback, sans-serif;
  font-size 0.7rem;
  font-weight: 550;
  width: 100%;
  text-align: left;
  line-height: 1.3rem;
  margin: 0;
  @media only screen 
  and (min-device-width: 1000px) {
      font-size: 1rem;
  line-height: 1.8rem;
  }
`

const Adress = styled.p`
color: #fde300;
font-size 0.7rem;
text-align: left;
width: 100%;
line-height: 1.3rem;
margin: 0;
@media only screen 
  and (min-device-width: 1000px) {
    line-height: 1.8rem;
      font-size: 1rem;
  }
`

const Contact = () => {
  const query = useStaticQuery(graphql`
    query {
      contactImg: allFile(
        filter: {
          relativePath: {}
          relativeDirectory: { eq: "images/contact" }
        }
      ) {
        nodes {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)
  return (
    <>
      <Devices>
        <Container style={{marginBottom: "2rem"}}>
          <Title id={"contact"} name={"contact"}>{data.contact.title}</Title>
          <Text>{data.contact.text}</Text>
          <Img
            style={{ margin: "2rem 0", width: "100%", height: "auto" }}
            fluid={query.contactImg.nodes[0].childImageSharp.fluid}
            alt="E.T. image"
          />
          <Subtitle>{data.contact.telephoneNumber}</Subtitle>
          <Subtitle>{data.contact.email}</Subtitle>
          <Adress>{data.contact.adressFirstLine}</Adress>
          <Adress>{data.contact.adressSecondLine}</Adress>
        </Container>
      </Devices>
    <Wrapper>
      <DesktopWrapper>
        <Desktop id={"address"} name={"address"}>
          <div>
            <Title>{data.contact.title}</Title>
            <Text>{data.contact.text}</Text>
          </div>
          <div style={{ width: "100%" }}>
            <Link href="mailto:info@mediolleno.es" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}>
              <Subtitle>{data.contact.email}</Subtitle>
            </Link>
            <Link style={{textDecoration:"none"}} to={"https://www.google.es/maps/place/Calle+del+Cerro+Minguete,+112,+28035+Madrid,+Spain/@40.4869974,-3.725528,17z/data=!3m1!4b1!4m5!3m4!1s0xd4229f3348a3bab:0x52ab31dbc691f8ed!8m2!3d40.4869933!4d-3.7233393"}>
              <Adress>{data.contact.adressFirstLine}</Adress>
              <Adress>{data.contact.adressSecondLine}</Adress>
            </Link>
          </div>
        </Desktop>
        <Container style={{width: "100%", maxWidth: "470px"}}>
          <Img
            style={{ marginTop: "4rem", display:"flex", justifyContent: "flex-end", width: "100%", height: "auto" }}
            fluid={query.contactImg.nodes[0].childImageSharp.fluid}
            alt="E.T. image"
          />
        </Container>
      </DesktopWrapper>
    </Wrapper>
      </>
  )
}

export default Contact
