import styled from "styled-components"
import {
  SURFACE,
  BACKGROUND,
  ON_BACKGROUND,
  FADED_TEXT_COLOR,
  ERROR,
  DP6,
} from "../../constants/theme"

export const Wrapper = styled.div`
  margin: 1rem 0;
  background: ${SURFACE};
  padding: 1rem;
  box-shadow: ${DP6};
`

export const Button = styled.button`
  margin: 1rem 0;
  padding: 1rem;
  background-color: ${BACKGROUND};
  color: ${ON_BACKGROUND};
  border: none;
  width: 100%;
  box-shadow: ${DP6};
  text-transform: uppercase;
  cursor: pointer;
`

export const FieldHint = styled.p`
  margin: 0;
  color: ${FADED_TEXT_COLOR};
`

export const ErrorMessage = styled(FieldHint)`
  color: ${ERROR};
`