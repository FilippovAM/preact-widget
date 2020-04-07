import Modal from '../modal'
import { createPortal } from 'preact/compat'

const WidgetModal = ({children, ...props}) => (
  <Modal {...props}>
    {({isOpen, Wrapper, Content, Overlay, CloseButton}) => (
      isOpen && createPortal(
        <Wrapper>
          <Overlay />
          <Content>
            <CloseButton />
            {children}
          </Content>
        </Wrapper>,
        document.body
      )
    )}
  </Modal>
)

export default WidgetModal
