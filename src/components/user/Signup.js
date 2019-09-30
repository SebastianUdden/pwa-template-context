import React, { useRef, useState } from "react"
import { useUser } from "../../contexts/UserContext"
import Input from "../ui/Input"
import {
  FieldHint,
  Wrapper,
  ErrorMessage,
  Button,
  Em,
  FlexWrapper,
} from "./common"
import { ERROR, ON_ERROR } from "../../constants/theme"

const validateForm = inputRefs => {
  const results = inputRefs.map(ref => ref.current.validate())
  return !results.filter(result => !result).length
}

const Signup = ({ fields }) => {
  const [showConfirmRemoval, setShowConfirmRemoval] = useState(false)
  const [showMatchingPasswordError, setShowMatchingPasswordError] = useState(
    false
  )
  const {
    user,
    setUser,
    tempUser,
    setTempUser,
    setPage,
    clearUser,
    clearTempUser,
  } = useUser()
  const inputRefs = fields.map(useRef)

  return (
    <Wrapper>
      {user.email && user.password && (
        <>
          <FieldHint>
            You are already signed up as <Em>{user.username || user.email}</Em>,
            would you like remove the user?
          </FieldHint>{" "}
          {!showConfirmRemoval && (
            <Button onClick={() => setShowConfirmRemoval(true)}>
              Remove account
            </Button>
          )}
          {showConfirmRemoval && (
            <FlexWrapper>
              <Button onClick={() => setShowConfirmRemoval(false)}>
                Cancel
              </Button>
              <Button
                backgroundColor={ERROR}
                color={ON_ERROR}
                onClick={() => clearUser()}
              >
                Confirm
              </Button>
            </FlexWrapper>
          )}
        </>
      )}
      {!(user.email && user.password) && (
        <>
          {fields.map((field, index) => (
            <Input
              ref={inputRefs[index]}
              section="signup"
              field={field}
              onValue={value => setTempUser(field.fieldName, value)}
            />
          ))}
          {showMatchingPasswordError && (
            <ErrorMessage>
              Passwords are invalid or do not match...
            </ErrorMessage>
          )}
          <Button
            type="submit"
            onClick={() => {
              setShowMatchingPasswordError(
                user.password !== user.repeatPassword
              )
              const signedUp = validateForm(inputRefs)
              if (signedUp && user.password === user.repeatPassword) {
                setPage("login")
                setUser(tempUser)
                clearTempUser()
              } else if (user.password === user.repeatPassword) {
                return
              }
            }}
          >
            Sign up
          </Button>
        </>
      )}
    </Wrapper>
  )
}

export default Signup
