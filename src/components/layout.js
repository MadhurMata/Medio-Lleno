/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import styled from "@emotion/styled"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Main = styled.main`
  padding: 95pt 2rem 0;
  
  @media only screen and (min-device-width: 320px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 2) {
  width: 450px;
  }
`

const Layout = ({closeHeader, children }) => {

  return (
    <Wrapper>
      <Header closeHeader={closeHeader}/>
      <Main>{children}</Main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
