import React, { Component } from "react"
import styled from "styled-components"
import {
  SUCCESS_TEXT_COLOR,
  FADED_TEXT_COLOR,
  ERROR,
  ON_SURFACE,
  HIGH_EMPHASIS,
  DP6,
  SURFACE_ACTIVE,
} from "../../constants/theme"
import { MEDIA_MIN_MEDIUM } from "../../constants/sizes"

const Label = styled.label`
  opacity: ${HIGH_EMPHASIS};
`

const StyledInput = styled.input`
  -webkit-appearance: none;
  border-radius: 0;
  outline: none;
  background: ${SURFACE_ACTIVE};
  color: ${ON_SURFACE};
  border: none;
  border-bottom: 2px solid
    ${p =>
      p.status === "error"
        ? ERROR
        : p.status === "success"
        ? SUCCESS_TEXT_COLOR
        : FADED_TEXT_COLOR};
  margin: 0.5rem 0rem;
  width: 100%;
  padding: 0.5rem;
  box-shadow: ${DP6};
`

const Field = styled.div`
  padding: 0 0rem 0.5rem;
  width: ${p => p.mobileWidth || 100}%;

  ${MEDIA_MIN_MEDIUM} {
    width: ${p => p.desktopWidth || 100}%;
  }

  label {
    margin-top: 2rem;
  }
`

const FieldHint = styled.p`
  margin: 0;
  color: ${FADED_TEXT_COLOR};
`
const ErrorMessage = styled(FieldHint)`
  color: ${ERROR};
`

const isFieldValid = ({ field, value }) => {
  if (!field.required) return true
  if (!value) return false
  if (!field.validationRegex) return true

  const re = new RegExp(field.validationRegex)
  return re.test(String(value).toLowerCase())
}

class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: props.field.value || "",
      status: "default",
    }
  }

  validate = () => {
    const { field } = this.props
    const { value } = this.state

    if (
      isFieldValid({
        field,
        value,
      })
    ) {
      this.setState({ status: "success" })
      return true
    }

    this.setState({ status: "error" })
    return false
  }

  handleInputChange = event => {
    const { onValue, field } = this.props
    const { value: inputValue } = event.target
    this.setState({ value: inputValue })

    if (inputValue.length === 0) {
      this.setState({ status: "default" })
    }

    if (
      isFieldValid({
        field,
        value: inputValue,
      })
    ) {
      onValue(inputValue)
      this.setState({ status: "success" })
    } else {
      onValue("")
      this.setState({ status: "default" })
    }
  }

  handleInputBlur = event => {
    const { field } = this.props
    const { value: inputValue } = event.target

    if (
      !isFieldValid({
        field,
        value: inputValue,
      })
    ) {
      this.setState({ status: "error" })
    }
  }

  componentDidMount() {
    this.setState({
      value: this.props.field.value,
    })
  }

  render() {
    const { section, field } = this.props
    const { status, value } = this.state
    const inputId = `${section}_${field.fieldName}`

    return (
      <Field mobileWidth={field.mobileWidth} desktopWidth={field.desktopWidth}>
        {field.label && (
          <Label htmlFor={inputId}>
            {field.label} {field.required && `*`}
          </Label>
        )}
        <StyledInput
          id={inputId}
          type={field.type}
          maxlength={field.maxLength}
          required={field.required}
          placeholder={field.placeholder}
          onChange={this.handleInputChange}
          onBlur={this.handleInputBlur}
          value={value}
          status={status}
        />
        {status === "error" ? (
          <ErrorMessage>{field.validationErrorMessage}</ErrorMessage>
        ) : (
          field.fieldHelperText && (
            <FieldHint>{field.fieldHelperText}</FieldHint>
          )
        )}
      </Field>
    )
  }
}

export default Input
