import React, { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import styled from "styled-components"
import { MEDIA_MAX_SMALL, MEDIA_MIN_LARGE } from "../../constants/sizes"
import {
  FADED_TEXT_COLOR,
  TRANSITION_DURATION,
  PRIMARY_BACKGROUND,
  ON_SURFACE,
  DP6,
  ON_BACKGROUND,
  HIGH_EMPHASIS,
} from "../../constants/theme"

const Overlay = styled.div`
  top: 0;
  left: 0;
  background-color: rgba(0, 8, 28, 0.8);
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
  opacity: ${p => (p.isAnimating ? 0 : 1)};
  transition: opacity ${TRANSITION_DURATION}ms ease;
  padding: 0.5rem;
`

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`

const InnerModal = styled.div`
  padding: 1rem;
  background-color: ${PRIMARY_BACKGROUND};
  color: ${ON_BACKGROUND};
  border-radius: 0;
  width: auto;
  display: block;
  position: relative;
  z-index: 2;
  height: auto;
  max-width: 100%;
  margin: 40px 20px;

  /* box-shadow: ${DP6}; */
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.13), 0 3px 9px 0 rgba(0, 0, 0, 0.19);
  
  ${MEDIA_MIN_LARGE} {
    margin: 40px auto;
    width: 705px;
  }
`

const Header = styled.div`
  box-sizing: border-box;
  position: relative;
  border-bottom: 1px solid
    ${p => (p.hasTitle ? FADED_TEXT_COLOR : "transparent")};
  opacity: ${HIGH_EMPHASIS};
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70px;
  margin-bottom: 1rem;
  padding: 1rem 2rem 2rem 0.5rem;

  > h3 {
    margin: 0;
  }

  ${MEDIA_MAX_SMALL} {
    min-height: 45px;
    > h3 {
      margin-top: 1px;
    }
  }
`

const Close = styled.button`
  padding: 0;
  margin: -1rem -0.5rem;
  border: 0;
  position: absolute;
  cursor: pointer;
  color: ${ON_SURFACE};
  transition: all 300ms ease;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  right: 32px;
  background-color: transparent;

  > svg {
    fill: ${ON_SURFACE};
    height: 15px;
    width: 15px;
  }

  ${MEDIA_MAX_SMALL} {
    right: 20px;

    > svg {
      height: 12px;
      width: 12px;
    }
  }
`

const onOverlayClick = (e, onClose) => {
  e.preventDefault()
  e.stopPropagation()
  onClose()
}

const ModalUI = ({ children, title, onClose, open }) => {
  const [isAnimating, setIsAnimating] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsAnimating(false)
    }, TRANSITION_DURATION)
  }, [open, setIsAnimating])

  return typeof window !== "undefined" && open
    ? createPortal(
        <Overlay
          onClick={e => onOverlayClick(e, onClose)}
          isAnimating={isAnimating}
        >
          <Wrapper>
            <InnerModal onClick={e => e.stopPropagation()}>
              <Header hasTitle={title}>
                {title}
                <Close onClick={onClose}>&times;</Close>
              </Header>
              {children}
            </InnerModal>
          </Wrapper>
        </Overlay>,
        document.body
      )
    : null
}

export default ModalUI
