import React, { useRef, useState } from "react"
import { useUser } from "../../contexts/UserContext"
import Input from "../ui/Input"
import { Wrapper, ErrorMessage, Button } from "./common"

const validateForm = inputRefs => {
  const results = inputRefs.map(ref => ref.current.validate())
  return !results.filter(result => !result).length
}

const Signup = ({ fields }) => {
  const [showMatchingPasswordError, setShowMatchingPasswordError] = useState(
    false
  )
  const { user, setUser, setPage } = useUser()
  const inputRefs = fields.map(useRef)

  return (
    <Wrapper>
      {fields.map((field, index) => (
        <Input
          ref={inputRefs[index]}
          section="signup"
          field={field}
          onValue={value => setUser(field.fieldName, value)}
        />
      ))}
      {showMatchingPasswordError && (
        <ErrorMessage>Passwords are invalid or do not match...</ErrorMessage>
      )}
      <Button
        type="submit"
        onClick={() => {
          setShowMatchingPasswordError(user.password !== user.repeatPassword)
          const signedUp = validateForm(inputRefs)
          if (signedUp && user.password === user.repeatPassword) {
            setUser("signedUp", true)
            setPage("login")
          } else if (user.password === user.repeatPassword) {
            return
          }
        }}
      >
        Sign up
      </Button>
    </Wrapper>
  )
}

export default Signup
