import React, { useState } from "react"
import { useUser } from "../../contexts/UserContext"
import Input from "../ui/Input"
import { Button, Wrapper, ErrorMessage } from "./common"

const Login = ({ fields }) => {
  const [invalidEntry, setInvalidEntry] = useState(false)
  const { user, setUser, setPage } = useUser()

  return (
    <Wrapper>
      {fields.map(field => (
        <Input
          section="login"
          field={field}
          onValue={value => setUser(field.fieldName, value)}
        />
      ))}
      <Button
        onClick={() => {
          if (
            user.loginEmail === user.email &&
            user.loginPassword === user.password
          ) {
            setUser("loggedIn", true)
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
    </Wrapper>
  )
}

export default Login
