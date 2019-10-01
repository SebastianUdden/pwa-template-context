/* eslint no-useless-escape: 0 */
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#:;_\-\$%\^&\*])(?=.{8,})/

export const SIGNUP_FIELDS = [
  {
    fieldName: "username",
    type: "text",
    label: "Username",
    placeholder: "Enter optional username...",
    required: false,
  },
  {
    fieldName: "email",
    type: "email",
    label: "E-mail",
    placeholder: "Enter valid e-mail...",
    required: true,
    validationErrorMessage: "Wrong format, should be johndoe@email.com",
    validationRegex: EMAIL_REGEX,
  },
  {
    fieldName: "password",
    type: "password",
    label: "Password",
    placeholder: "Enter strong password...",
    required: true,
    validationErrorMessage:
      "Weak password, strong passwords must be at least 8 letters and consist of alphabetical, numeric and special characters (!@#:_-%^&).",
    validationRegex: PASSWORD_REGEX,
    fieldHelperText:
      "Strong passwords should be at least 8 letters and consist of alphabetical, numeric and special characters (!@#:;_-%^&).",
  },
  {
    fieldName: "repeatPassword",
    type: "password",
    placeholder: "Repeat strong password...",
    required: true,
    validationErrorMessage: "",
    validationRegex: PASSWORD_REGEX,
  },
]

export const LOGIN_FIELDS = [
  {
    fieldName: "loginEmail",
    type: "email",
    label: "E-mail",
    placeholder: "Enter your e-mail...",
    required: true,
    validationRegex: EMAIL_REGEX,
  },
  {
    fieldName: "loginPassword",
    type: "password",
    label: "Password",
    placeholder: "Enter your password...",
    required: true,
    validationRegex: PASSWORD_REGEX,
  },
]

export const SETTINGS_FIELDS = [
  {
    fieldName: "username",
    type: "text",
    label: "Username",
    placeholder: "Enter optional username...",
    required: false,
  },
  {
    fieldName: "password",
    label: "Password",
    placeholder: "Enter strong password...",
    required: false,
    validationErrorMessage:
      "Weak password, should be at least 8 letters and consist of alphabetical, numeric and special characters",
    validationRegex: PASSWORD_REGEX,
  },
]
