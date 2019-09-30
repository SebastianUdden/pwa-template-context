import React, { useState } from "react"
import { useUser } from "../../contexts/UserContext"
import { FieldHint, Wrapper, Button, Em, FlexWrapper } from "./common"
import { ERROR, ON_ERROR } from "../../constants/theme"
import Input from "../ui/Input"

const Settings = () => {
  const [showConfirmRemoval, setShowConfirmRemoval] = useState(false)
  const { user, clearUser, setTempUser } = useUser()

  return (
    <Wrapper>
      {user.email && user.password && (
        <>
          <FieldHint>
            Username:<Em>{user.username}</Em>
          </FieldHint>
          {/* <Input
            section="settings"
            field={{
              fieldName: "username",
              type: "text",
              label: "Username",
              placeholder: "Enter optional username...",
              required: false,
            }}
            onValue={value => setTempUser("username", value)}
          /> */}
          <FieldHint>
            Email:<Em>{user.email}</Em>
          </FieldHint>
          {/* <Input
            section="settings"
            field={{
              fieldName: "email",
              type: "text",
              label: "E-mail",
              placeholder: "Enter email...",
              required: false,
            }}
            onValue={value => setTempUser("email", value)}
          /> */}
          <FieldHint>
            Password:<Em>{user.password}</Em>
          </FieldHint>
          {/* <Input
            section="settings"
            field={{
              fieldName: "password",
              type: "password",
              label: "Password",
              placeholder: "Enter strong password...",
              required: true,
              validationErrorMessage:
                "Weak password, should be at least 8 letters and consist of alphabetical, numeric and special characters",
              validationRegex: /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            }}
            onValue={value => setTempUser("password", value)}
          /> */}
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
    </Wrapper>
  )
}

export default Settings
