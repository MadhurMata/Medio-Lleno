import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import styled from "@emotion/styled"
import Img from "gatsby-image"

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
   flex-direction: row-reverse;
  justify-content: center;
  background-color: white;
  margin-top: 2rem;
  z-index: 100;
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
  )
}

export default Footer
