import React from "react"
import styled from "@emotion/styled"
import { bool } from "prop-types"
import Img from "gatsby-image"
import { graphql, Link, useStaticQuery } from "gatsby"

const StyledMenu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  background: white;
  width: 100vw;
  height: 7rem;
  transition: transform 0.3s ease-in-out;
  padding: 0 1rem;

  @media  {
    width: 100%;
  }
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: right;
  a {
    font-size: 1rem;
    font-weight: bold;
    color: #13c1b5;
    text-decoration: none;
    transition: color 0.3s linear;

    @media  {
      font-size: 1.5rem;
    }

    &:hover {
      color: yellow;
    }
  }
`

const Menu = ({ open, img }) => {
  const query = useStaticQuery(graphql`
    query {
      navImg: allFile(
        filter: { relativePath: {} relativeDirectory: { eq: "images/header/navbar" }}
      ) {
        nodes {
          childImageSharp {
            fixed(width: 30, height: 30) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `)
  return (
    <StyledMenu
      style={{ transform: `${open ? "translateY(0)" : "translateY(-100%)"}` }}
    >
      <Img
        fixed={img}
        style={{ backgroundColor: "green" }}
        alt="Medio Lleno logo"
      />
      <Nav>
        <a href="/">Home
          <Img
            fixed={query.navImg.nodes[1].childImageSharp.fixed}
            alt="Home logo"
          />
        </a>
        <a href="/">Metodología
          <Img
            fixed={query.navImg.nodes[0].childImageSharp.fixed}
            alt="Metodología logo"
          />
        </a>
        <a href="/">Contacto
          <Img
            fixed={query.navImg.nodes[2].childImageSharp.fixed}
            alt="Contacto logo"
          />
        </a>
      </Nav>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu
