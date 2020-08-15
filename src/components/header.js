import { graphql, Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import React, { useEffect, useRef, useState } from "react"

import Burger from "./burger"
import Menu from "./menu"

const HeaderContainer = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem;
position: fixed;
z-index: 99;
width: 100vw;
background-color: #13c1b5;
`

const BurguerMenu = styled.div`
  padding-right: 2rem;
`

const Header = () => {
  const node = useRef();
  const [open, setOpen] = useState(false);

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
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)
  return (
      <HeaderContainer id={"#"}>
            <Link to="/" style={{ textDecoration: `none` }}>
              <Img
                style={{ width: "9rem" }}
                fluid={query.headerImg.nodes[0].childImageSharp.fluid}
                alt="Medio Lleno logo"/>
            </Link>
          <BurguerMenu ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} img={query.headerImg.nodes[0].childImageSharp.fluid}/>
          </BurguerMenu>
      </HeaderContainer>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
