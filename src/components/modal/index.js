import style from './style.css'
import ModalWrapper from './wrapper'
import CloseIcon from './assets/close.svg'

const Modal = ({children, onClose, isOpen}) => (
  children({
    isOpen,
    Wrapper: props => (
      <ModalWrapper {...props} onClose={onClose} />
    ),
    Content: props => (
      <div class={style.modal} {...props} />
    ),
    Overlay: props => (
      <div class={style.modalBackground} onClick={onClose} {...props} />
    ),
    CloseButton: props => (
      <button class={style.closeButton} onClick={onClose} {...props}>
        <CloseIcon />
      </button>
    )
  })
)

export default Modal
