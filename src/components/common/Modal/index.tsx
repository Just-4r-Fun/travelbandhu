import React from 'react'
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'


interface IOwnProps {
    heading: React.ReactElement;
    isOpen: boolean;
    onClose: () => void;
    content: React.ReactElement
    footerCTA: React.ReactElement
}

const CustomModal:React.FC<IOwnProps> = ({heading, isOpen, onClose, content, footerCTA}) => {

    return (
        <Modal isOpen={isOpen} onClose={onClose} size={'lg'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{heading}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {content}
          </ModalBody>

          <ModalFooter>
            {footerCTA}
          </ModalFooter>
        </ModalContent>
      </Modal>
    )
}

export default CustomModal