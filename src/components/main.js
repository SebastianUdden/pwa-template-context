import React from "react"
import styled from "styled-components"
import { useUser } from "../contexts/UserContext"
import SEO from "./seo"
import Home from "./home/Home"
import Signup from "./user/Signup"
import Login from "./user/Login"
import Settings from "./user/Settings"
import Footer from "./footer/footer"

import { LOGIN_FIELDS, SIGNUP_FIELDS } from "../constants/fields"
import { FOOTER_MENU } from "../constants/menus"

const Body = styled.div`
  margin-bottom: 10vh;
`

const Main = () => {
  const { page, setPage } = useUser()
  return (
    <>
      <SEO title="Home" />
      <Body>
        {page === "home" && <Home />}
        {page === "signup" && <Signup fields={SIGNUP_FIELDS} />}
        {page === "login" && <Login fields={LOGIN_FIELDS} />}
        {page === "settings" && <Settings />}
      </Body>
      <Footer
        items={FOOTER_MENU.map(item => ({
          ...item,
          onClick: () => setPage(item.page),
        }))}
      />
    </>
  )
}

export default Main
