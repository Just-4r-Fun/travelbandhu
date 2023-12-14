import React from "react";
import { Button, ButtonGroup, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import { postsMock } from "@/__mocks__/posts";
import FeedPost from "@/components/feedPost";
import CustomModal from "@/components/common/Modal";
import CreatePost from "@/components/feedPost/createPost";

interface IOwnProps {
  posts: Post[]
}

const Feeds: React.FC<IOwnProps> = ({posts = postsMock}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const heading = <div className="font-medium">Create a post</div>
  return (
    <div className="mt-8 h-max">
      <div className="bg-white h-max p-4 rounded">
          <div className="flex flex-col">
            <div className="ml-auto mb-4">
              <Button background={'rgb(52,53,65)'} color={'white'} onClick={onOpen}>Create a post</Button>
              <CustomModal heading={heading} isOpen={isOpen} onClose={onClose} content={<CreatePost />} footerCTA={<Button colorScheme='blue' mr={3} onClick={onClose}></Button>} />
            </div>
            <div className="flex flex-row gap-4">
              <div>
                {posts.map((post, index) => {
                  return <FeedPost {...post} />
                })}
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feeds;
