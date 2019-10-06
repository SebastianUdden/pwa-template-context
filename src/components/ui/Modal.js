import React, { useState } from "react"
import ModalUI from "./ModalUI"
import { Button, Span } from "../user/common"

const Modal = ({ title, description, onConfirm, onDeny }) => {
  const [modalOpen, setModalOpen] = useState(true)

  return (
    <>
      {modalOpen && (
        <ModalUI
          title={title}
          onClose={() => {
            setModalOpen(false)
          }}
          open={modalOpen}
        >
          <Span>{description}</Span>
          <div
            style={{
              display: "flex",
              marginTop: "32px",
              justifyContent: "center",
            }}
          >
            <Button
              onClick={() => {
                setModalOpen(false)
                onConfirm()
              }}
            >
              Yes
            </Button>
            <Button
              onClick={() => {
                setModalOpen(false)
                onDeny()
              }}
            >
              No
            </Button>
          </div>
        </ModalUI>
      )}
    </>
  )
}

export default Modal
