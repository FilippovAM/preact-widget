import { useEffect } from 'preact/compat'

const ModalWrapper = ({children, onClose}) => {
  const listenKeyboard = (e) => {
    if (e.key === `Escape` || e.keyCode === 27) {
      onClose && onClose()
    }
  }

  useEffect(() => {
    window.addEventListener(`keydown`, listenKeyboard, true)

    return () => {
      window.removeEventListener(`keydown`, listenKeyboard, true)
    }
  }, [])

  return children
}

export default ModalWrapper
