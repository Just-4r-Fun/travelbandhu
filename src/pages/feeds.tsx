import React from "react";
import { MdOutlinePostAdd } from "react-icons/md";
import { Button, Stack, Tooltip, useDisclosure } from "@chakra-ui/react";
import { postsMock } from "@/__mocks__/posts";
import FeedPost from "@/components/feedPost";
import CustomModal from "@/components/common/Modal";
import CreatePost from "@/components/feedPost/createPost";
import LoyaltyIcon from "@/assets/svg/Loyalty";
import BaseLayout from "@/components/BaseLayout";

interface IOwnProps {
  posts: Post[];
}

const Feeds: React.FC<IOwnProps> = ({ posts = postsMock }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const heading = (
    <div className="font-medium flex flex-row gap-x-2 items-center text-lg">
      <MdOutlinePostAdd />
      Create a post
    </div>
  );

  const addPost = () => {
    onClose();
  };

  return (
    <BaseLayout>
      <div className="flex flex-col">
        <div className="ml-auto mb-4">
          <Stack spacing={4} direction="row" align="center">
            <Tooltip label="Keep creating posts to gain more loyalty bonuses">
              <Button
                _hover={{
                  background: "var(--primary-color-light)",
                }}
                style={{ borderRadius: "20px" }}
                color={"white"}
                background={"rgb(52,53,65)"}
                onClick={onOpen}
              >
                <LoyaltyIcon value={100} />
              </Button>
            </Tooltip>
            <Button
              _hover={{
                background: "var(--primary-color-light)",
              }}
              style={{ borderRadius: "20px" }}
              color={"white"}
              background={"rgb(52,53,65)"}
              onClick={onOpen}
            >
              Create a post
            </Button>
          </Stack>
          <CustomModal
            heading={heading}
            isOpen={isOpen}
            onClose={onClose}
            content={<CreatePost />}
            footerCTA={
              <Button
                style={{ marginRight: 0 }}
                colorScheme="blue"
                mr={3}
                onClick={addPost}
              >
                Create post
              </Button>
            }
          />
        </div>
        <div className="flex flex-row gap-4">
          <div>
            {posts.map((post, index) => {
              return <FeedPost {...post} />;
            })}
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Feeds;
