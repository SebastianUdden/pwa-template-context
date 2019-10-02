import React, { useState } from "react"
import { useUser } from "../../contexts/UserContext"
import Input from "../ui/Input"
import { Em, Button, Wrapper, ErrorMessage, FieldHint } from "./common"

const Login = ({ fields }) => {
  const [invalidEntry, setInvalidEntry] = useState(false)
  const { user, tempUser, setUser, setTempUser, setPage } = useUser()

  return (
    <Wrapper>
      {user.loggedIn && (
        <>
          <FieldHint>
            You are already logged in as <Em>{user.username || user.email}</Em>,
            would you like log out?
          </FieldHint>
          <Button onClick={() => setUser({ ...user, loggedIn: false })}>
            Log out
          </Button>
        </>
      )}
      {!user.loggedIn && (
        <>
          {fields.map(field => (
            <Input
              section="login"
              field={{ ...field, value: localStorage.getItem(field.fieldName) }}
              onValue={value => setTempUser(field.fieldName, value)}
            />
          ))}
          <Button
            onClick={() => {
              if (
                (tempUser.email === user.email &&
                  tempUser.password === user.password) ||
                (localStorage.getItem("email") === user.email &&
                  localStorage.getItem("password"))
              ) {
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
