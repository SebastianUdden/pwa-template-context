import React, { useState } from "react"
import ModalUI from "./ModalUI"
import { Button, Span } from "../user/common"

const Modal = () => {
  const [modalOpen, setModalOpen] = useState(true)

  return (
    <>
      <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
      {modalOpen && (
        <ModalUI
          title="Test modal"
          onClose={() => {
            setModalOpen(false)
          }}
          open={modalOpen}
        >
          <Span>Are you sure you want to close this modal?</Span>
          <div
            style={{
              display: "flex",
              marginTop: "32px",
              justifyContent: "center",
            }}
          >
            <Button onClick={() => setModalOpen(false)}>CONFIRM</Button>
            <Button onClick={() => setModalOpen(false)}>DENY</Button>
          </div>
        </ModalUI>
      )}
    </>
  )
}

export default Modal
