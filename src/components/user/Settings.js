import React, { useState } from "react"
import { useUser } from "../../contexts/UserContext"
import { FieldHint, Wrapper, Button, Em, FlexWrapper } from "./common"
import { ON_ERROR, ERROR_BACKGROUND } from "../../constants/theme"
import Input from "../ui/Input"
import { SETTINGS_FIELDS } from "../../constants/fields"

const Displayfield = ({ section, field }) => (
  <Wrapper>
    <FieldHint>{field.label}</FieldHint>
    <FieldHint>
      <Em>{field.value}</Em>
    </FieldHint>
  </Wrapper>
)

const EditField = ({ section, field, onValue }) => {
  const [showInput, setShowInput] = useState(false)
  const { user, tempUser, setUser } = useUser()

  return (
    <Wrapper>
      <FieldHint>
        {field.label}{" "}
        {!showInput && <Em onClick={() => setShowInput(true)}>&#x270E;</Em>}
        {showInput && (
          <>
            <Em
              onClick={() => {
                setUser({
                  ...user,
                  [field.fieldName]: tempUser[field.fieldName],
                })
                setShowInput(false)
              }}
            >
              &#x2713;
            </Em>{" "}
            <Em onClick={() => setShowInput(false)}>&times;</Em>
          </>
        )}
      </FieldHint>
      {!showInput && (
        <>
          <FieldHint>
            <Em>{field.value}</Em>
          </FieldHint>
        </>
      )}
      {showInput && (
        <Input
          section="settings"
          field={{ ...field, label: "" }}
          onValue={onValue}
        />
      )}
    </Wrapper>
  )
}

const Settings = () => {
  const [showConfirmRemoval, setShowConfirmRemoval] = useState(false)
  const { user, clearUser, setTempUser } = useUser()

  return (
    <Wrapper>
      {user.email && user.password && (
        <>
          <Displayfield
            section="settings"
            field={{ label: "E-mail", value: user.email }}
          />
          {SETTINGS_FIELDS.map(field => (
            <EditField
              section="settings"
              field={{ ...field, value: user[field.fieldName] }}
              onValue={value => setTempUser(field.fieldName, value)}
            />
          ))}
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
                backgroundColor={ERROR_BACKGROUND}
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
