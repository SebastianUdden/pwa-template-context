import React, { useEffect } from "react"
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

const getValue = key => localStorage.getItem(key)

const checkBoolean = string => {
  if (string === "true" || string === "false") return true
}

const Main = () => {
  const { page, setPage, user, setUser } = useUser()

  useEffect(() => {
    Object.keys(user)
      .filter(getValue)
      .map(key => {
        const value = localStorage.getItem(key)
        setUser({
          ...user,
          [key]: checkBoolean(value) ? value === "true" : value,
        })
      })
  }, [])

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
