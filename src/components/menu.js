import React, { useState } from "react"
import styled from "@emotion/styled"
import { bool } from "prop-types"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { Link, animateScroll as scroll } from "react-scroll";
import { AnchorLink } from "gatsby-plugin-anchor-links";


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
  a {
    color: #13c1b5;
      display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 1rem;
    font-weight: bold;
    text-decoration-color: transparent;
    transition: color 0.3s linear;
    
    div {
      margin-left: 1rem
    }

    @media  {
      font-size: 1rem;
    }

    &:hover {
      text-decoration: underline;
      text-decoration-color: #fde300;
    }
  }
`

const Menu = ({ open, setOpen, img }) => {
  const query = useStaticQuery(graphql`
    query {
      navImg: allFile(
        filter: { relativePath: {} relativeDirectory: { eq: "images/header/navbar" }}
      ) {
        nodes {
          childImageSharp {
            fixed(width: 20 height: 20) {
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
        style={{width: "8rem", height: "4rem", margin: "1rem" }}
        alt="Medio Lleno logo"
      />
      <Nav>
        <Link to="hey" offset={-100} onClick={() => setOpen(!open)}>Home
          <Img
            fixed={query.navImg.nodes[1].childImageSharp.fixed}
            alt="Home logo"
          />
        </Link>
        <Link to="method" offset={-100} onClick={() => setOpen(!open)}>Metodología
          <Img
            fixed={query.navImg.nodes[0].childImageSharp.fixed}
            alt="Metodología logo"
          />
        </Link>
        <Link to="contact" offset={-100} onClick={() => setOpen(!open)}>Contacto
          <Img
            fixed={query.navImg.nodes[2].childImageSharp.fixed}
            alt="Contacto logo"
          />
        </Link>
      </Nav>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu
