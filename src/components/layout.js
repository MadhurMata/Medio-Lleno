/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.css"
import styled from "@emotion/styled"
import Footer from "./footer"

const Wrapper = styled.div`
    @media only screen
  and (min-device-width: 1800px) {
    max-width: 1800px;
  }
`


const Layout = ({closeHeader, children }) => {

  return (
    <Wrapper>
      <Header closeHeader={closeHeader}/>
      <main>{children}</main>
      <Footer/>
    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
