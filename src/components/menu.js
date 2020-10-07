import React from "react"
import styled from "@emotion/styled"
import { bool } from "prop-types"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "react-scroll";


const StyledMenu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  background: white;
  width: 100vw;
  height: 6rem;
  transition: transform 0.3s ease-in-out;
  padding: 1rem;

  @media  {
    width: 100%;
  }
  
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  a {
    align-items: center;
    color: #13c1b5;
    display: flex;
    justify-content: flex-end;
    text-decoration-color: transparent;
    transition: color 0.3s linear;
    
    div {
      margin-left: 1rem
    }
    
    p {
      font-size: 0.6rem;
      margin: 0;
      &:hover {
        border-bottom: 3px #fde300 solid;
        font-weight: 700;
    }
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
            fixed(width: 15 height: 15) {
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
        style={{width: "6rem", height: "3rem"}}
        alt="Medio Lleno logo"
      />
      <Nav>
        <Link to="hey" offset={-100} onClick={() => setOpen(!open)}><p>Home</p>
          <Img
            fixed={query.navImg.nodes[0].childImageSharp.fixed}
            alt="Home logo"
          />
        </Link>
        <Link to="queHacemos" offset={-100} onClick={() => setOpen(!open)}><p>¿Qué hacemos?</p>
          <Img
            fixed={query.navImg.nodes[1].childImageSharp.fixed}
            alt="Que hacemos logo"
          />
        </Link>

        <Link to="method" offset={-100} onClick={() => setOpen(!open)}><p>Metodología</p>
          <Img
            fixed={query.navImg.nodes[2].childImageSharp.fixed}
            alt="Metodología logo"
          />
        </Link>
        <Link to="contact" offset={-100} onClick={() => setOpen(!open)}><p>Contacto</p>
          <Img
            fixed={query.navImg.nodes[3].childImageSharp.fixed}
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
