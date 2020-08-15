import React from "react"
import data from "../metadata/contact"
import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 3rem;
`

const Title = styled.h1`
color: white;
font-size 1.9rem;
font-weight: 700;
text-align: left;
`

const Text = styled.p`
color: white;
font-size 1rem;
text-align: left;
width: 100%;
`
const Subtitle = styled.h1`
  color: white;
  font-size 1rem;
  font-weight: 700;
  width: 100%;
  text-align: left;
  margin: 0;
`

const Adress = styled.p`
color: #fde300;
font-size 1rem;
text-align: left;
width: 100%;
margin: 0;
`

const Contact = () => {
  const query = useStaticQuery(graphql`
    query {
    contactImg: allFile(
      filter: { relativePath: {}, relativeDirectory: { eq: "images/contact" } }
    ) {
      nodes {
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`
  )
  return (
    <Container id={"contact"} style={{  paddingTop: "108pt", marginTop: "-90pt"}}>
      <Title>{data.contact.title}</Title>
      <Text>{data.contact.text}</Text>
      <Img
        fixed={query.contactImg.nodes[0].childImageSharp.fixed}
        alt="E.T. image"/>
        <Subtitle>{data.contact.telephoneNumber}</Subtitle>
        <Subtitle>{data.contact.email}</Subtitle>
        <Adress>{data.contact.adressFirstLine}</Adress>
        <Adress>{data.contact.adressSecondLine}</Adress>
    </Container>
  )
}

export default Contact;