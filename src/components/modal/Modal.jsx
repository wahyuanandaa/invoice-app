// react
import { useEffect } from "react"

// styles
import styles from "../../assets/styles/modules/modal/modal.module.css"

// redux
import { useSelector, useDispatch } from "react-redux"
import { toggleModal, loadModal } from "../../redux/modal/modalSlice"

// components
import ConfirmDelete from "./modalToRender/ConfirmDelete"

// rrd
import { useParams, useNavigate } from "react-router-dom"

const Modal = () => {
  // rrd
  const { id } = useParams()
  const navigate = useNavigate()

  // redux
  const { isOpen, contentKey } = useSelector((state) => state.modal)
  const dispatch = useDispatch()

  // disable scrolling
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  // event handlers
  const handleClose = () => {
    dispatch(toggleModal())
    dispatch(loadModal(""))
  }

  // utils
  const getKey = () => {
    switch (contentKey) {
      case "confirm-delete":
        return <ConfirmDelete id={id} close={handleClose} goHome={goHome} />
    }
  }

  const goHome = () => {
    navigate("/")
  }

  return (
    <>
      {isOpen && (
        <div className={styles.modalBackdrop}>
          <div className={styles.modal}>{getKey()}</div>
        </div>
      )}
    </>
  )
}

export default Modal
