import React from "react"
import SEO from "./seo"
import { LOGIN_FIELDS, SIGNUP_FIELDS } from "../constants/fields"
import Home from "./home/Home"
import Signup from "./user/Signup"
import Login from "./user/Login"
import { useUser } from "../contexts/UserContext"

const Main = () => {
  const { page } = useUser()
  return (
    <>
      <SEO title="Home" />
      {page === "home" && <Home />}
      {page === "signup" && <Signup fields={SIGNUP_FIELDS} />}
      {page === "login" && <Login fields={LOGIN_FIELDS} />}
    </>
  )
}

export default Main
