import React, { useState, useRef } from "react"
import { useUser } from "../../contexts/UserContext"
import { Em, Button, Wrapper, ErrorMessage, FieldHint } from "./common"
import Form from "../ui/Form"

const checkValidValue = (user, tempUser, value) =>
  tempUser[value] === user[value] ||
  (!tempUser[value] && localStorage.getItem(value) === user[value])

const Login = ({ fields }) => {
  const [invalidEntry, setInvalidEntry] = useState(false)
  const {
    user,
    tempUser,
    setUser,
    setTempUser,
    clearTempUser,
    setPage,
  } = useUser()
  const loginForm = useRef(null)

  return (
    <Wrapper>
      {user.loggedIn && (
        <>
          <FieldHint>
            You are already logged in as <Em>{user.username || user.email}</Em>,
            would you like log out?
          </FieldHint>
          <Button
            onClick={() => {
              Object.keys(user).forEach(key => {
                key !== "repeatPassword" && localStorage.setItem(key, user[key])
              })
              localStorage.setItem("loggedIn", false)
              setUser({ ...user, loggedIn: false })
              clearTempUser()
            }}
          >
            Log out
          </Button>
        </>
      )}
      {!user.loggedIn && (
        <>
          <Form
            ref={loginForm}
            section="Login"
            formFields={fields.map(field => ({
              ...field,
              value:
                field.fieldName !== "password" ||
                localStorage.getItem("auto-password") === "true"
                  ? localStorage.getItem(field.fieldName)
                  : "",
            }))}
            setFieldValue={setTempUser}
          />
          <Button
            onClick={() => {
              const validForm = loginForm.current.validate()

              if (!validForm) return
              if (
                checkValidValue(user, tempUser, "email") &&
                checkValidValue(user, tempUser, "password")
              ) {
                Object.keys(user).forEach(key => {
                  key !== "repeatPassword" &&
                    localStorage.setItem(key, user[key])
                })
                localStorage.setItem("loggedIn", true)
                setUser({ ...user, loggedIn: true })
                setPage("home")
                return
              }
              setInvalidEntry(true)
            }}
          >
            Log in
          </Button>
          {invalidEntry && (
            <ErrorMessage>Invalid email or password...</ErrorMessage>
          )}
        </>
      )}
    </Wrapper>
  )
}

export default Login
