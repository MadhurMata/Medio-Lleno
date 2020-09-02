import { graphql, Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import React, { useEffect, useRef, useState } from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links";


import Burger from "./burger"
import Menu from "./menu"

const Desktop = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-top: 2rem;
  margin-right: 5rem;
  
      @media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 899px) {
  display: none;
}
`
const Devices = styled.div`
   margin-right: 2rem;
    @media only screen 
  and (min-device-width: 900px) {
    display: none;
}
`
const HeaderContainer = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
position: fixed;
z-index: 112;
width: 100vw;
background-color: #13c1b5;
`

const BurguerMenu = styled.div`
`

const ImageWrapper = styled.div`
    @media only screen 
  and (min-device-width: 900px) {
    margin-left: 5rem;
}
`

const NavBar = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style-type: none;
  width: 25rem;
  
  a {
    color: white;
    text-decoration: none;
      font-size: 0.8rem;
  
   &:hover {
      border-bottom: 3px #fde300 solid;
      font-weight: 700;
    }
  }
`

const Header = () => {
  const node = useRef();
  const [open, setOpen] = useState(false);

  console.log(open)

  const handleClickOutside = e => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const query = useStaticQuery(graphql`
    query {
      headerImg: allFile(
        filter: { relativePath: {}, relativeDirectory: { eq: "images/header" } }
      ) {
        nodes {
          childImageSharp {
            fluid(maxWidth: 200 maxHeight: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)
  return (
      <>
        <HeaderContainer>
          <ImageWrapper>
            <Link to="/" style={{ textDecoration: `none` }}>
              <Img
                style={{   width: "10rem", height: "5rem" }}
                fluid={query.headerImg.nodes[0].childImageSharp.fluid}
                alt="Medio Lleno logo"/>
            </Link>
          </ImageWrapper>
          <Devices>
            <BurguerMenu ref={node}>
              <Burger open={open} setOpen={setOpen} />
              <Menu open={open} setOpen={setOpen} img={query.headerImg.nodes[1].childImageSharp.fluid}/>
            </BurguerMenu>
          </Devices>
          <Desktop>
            <NavBar>
              <li><AnchorLink to="/#hey">Home</AnchorLink></li>
              <li><AnchorLink to="/#queHacemos">¿Que hacemos?</AnchorLink></li>
              <li><AnchorLink to="/#method">Metodología</AnchorLink></li>
              <li><AnchorLink to="/#address">Contacto</AnchorLink></li>
            </NavBar>
          </Desktop>
        </HeaderContainer>
      </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
