import React from "react"

const Form = ({ section, title, formFields }) => {
  const { setAddressValue } = useUser()
  const inputRefs = formFields.map(() => useRef(null))
  return (
    <Form>
      <Subtitle section={section}>{title}</Subtitle>
      <FieldsWrapper>
        {formFields &&
          formFields.map((field, index) => (
            <FormInput
              key={field.fieldName}
              ref={inputRefs[index]}
              section={section}
              field={field}
              onValue={value => {
                setFormValue(field.fieldName, value)
              }}
            />
          ))}
        <button
          type="button"
          onClick={() => inputRefs.forEach(ref => ref.current.validate())}
        >
          Continue
        </button>
      </FieldsWrapper>
    </Form>
  )
}
