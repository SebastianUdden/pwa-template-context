import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { LARGE } from "../constants/sizes"
import {
  BASE_TEXT_HOVER_COLOR,
  LINK_TEXT_HOVER_COLOR,
  ON_SURFACE,
  HIGH_EMPHASIS,
  PRIMARY,
  DP6,
  BACKGROUND_ACTIVE,
} from "../constants/theme"
import { useUser } from "../contexts/UserContext"

const Wrapper = styled.header`
  background: ${BACKGROUND_ACTIVE};
  box-shadow: ${DP6};
  margin-bottom: 1.45rem;
`

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${LARGE};
  padding: 1.45rem 1.0875rem;
`

const Home = styled.h1`
  margin: 0;
`

const MainLink = styled(Link)`
  color: ${ON_SURFACE};
  opacity: ${HIGH_EMPHASIS};
  text-decoration: none;
  :hover {
    color: ${BASE_TEXT_HOVER_COLOR};
  }
`

const User = styled.h5`
  margin: 0;
  color: ${PRIMARY};
  :hover {
    color: ${LINK_TEXT_HOVER_COLOR};
  }
`

const Header = ({ siteTitle }) => {
  const { user, setPage } = useUser()

  return (
    <Wrapper>
      <Head>
        <Home>
          <MainLink onClick={() => setPage("home")}>{siteTitle}</MainLink>
        </Home>
        <User>{user.signedUp && (user.username || user.email)}</User>
      </Head>
    </Wrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header