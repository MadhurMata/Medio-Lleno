/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import styled from "@emotion/styled"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`


const Layout = ({closeHeader, children }) => {

  return (
    <Wrapper>
      <Header closeHeader={closeHeader}/>
      <main>{children}</main>
      <Footer id={"footer"} name={"footer"}/>
    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
