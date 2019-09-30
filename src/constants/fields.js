/* eslint no-useless-escape: 0 */
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
    validationRegex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  },
  {
    fieldName: "password",
    type: "password",
    label: "Password",
    placeholder: "Enter strong password...",
    required: true,
    validationErrorMessage:
      "Weak password, should be at least 8 letters and consist of alphabetical, numeric and special characters",
    validationRegex: /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
  },
  {
    fieldName: "repeatPassword",
    type: "password",
    placeholder: "Repeat password...",
    required: true,
    validationErrorMessage: "",
    validationRegex: /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
  },
]

export const LOGIN_FIELDS = [
  {
    fieldName: "loginEmail",
    type: "email",
    label: "E-mail",
    placeholder: "Enter your e-mail...",
    required: true,
    validationRegex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  },
  {
    fieldName: "loginPassword",
    type: "password",
    label: "Password",
    placeholder: "Enter your password...",
    required: true,
    validationRegex: /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
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
    validationRegex: /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
  },
]
