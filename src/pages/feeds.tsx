import React, { useEffect, useState } from "react";
import { MdOutlinePostAdd } from "react-icons/md";
import { Button, Stack, Tooltip, useDisclosure } from "@chakra-ui/react";
import { postsMock } from "@/__mocks__/posts";
import FeedPost from "@/components/feedPost";
import CustomModal from "@/components/common/Modal";
import CreatePost from "@/components/feedPost/createPost";
import LoyaltyIcon from "@/assets/svg/Loyalty";
<<<<<<< Updated upstream
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
=======
import {getPostData, setPostData} from "../firebase"


const Feeds = () => {
  const [postsList, setPostsList] = useState<Post[]>([])
  const { isOpen, onOpen, onClose } = useDisclosure()

  // states for create flow
  const [images, setImages] = useState(['']);
  const [areasValues, setAreasValues] = useState(['']);
  const [hotelsValues, setHotelsValues] = useState([''])
  const [commuteValues, setCommuteValues] = useState([''])
  const [hashtagValues, setHashtagValues] = useState([''])
  const [starRating, setStarRating] = useState(0)
  const [ctFeedback, setCtFeedback] = useState('')
  const [postDesc, setPostDesc] = useState('')

  useEffect(() => {
    console.log({
      images,
      areasValues,
      hotelsValues,
      commuteValues,
      hashtagValues,
      starRating,
      ctFeedback,
      postDesc
    })
  }, [images, areasValues, hotelsValues, commuteValues, hashtagValues, starRating, ctFeedback, postDesc])
  const handleAreaChange = (values: string[]) => {
    setAreasValues(values)
  }
  const handleHotelsChange = (values: string[]) => {
    setHotelsValues(values)
  }
  const handleCommuteChange = (values: string[]) => {
    setCommuteValues(values)
  }
  const handleStarRatingChange = (value: number) => {
    setStarRating(value)
  }

  const handleCtFeedbackChange = (value: string) => {
    setCtFeedback(value)
  }

  const handleDescChange = (value: string) => {
    setPostDesc(value)
  }

  const handleHashtagChange = (values: string[]) => {
    setHashtagValues(values)
  }

  const setImagesValue = (values: string[]) => {
    setImages(values)
  }


  const addPost = () => {
    const hotelsBooked = hotelsValues.map((hotel) => {
        return {
          ctUrl: "https://www.ctrip.com/",
          name: hotel,
          heroImage: ""
        }
    })

    const newPost = {
      images,
      areasVisited: areasValues,
      hotelsBooked,
      commuteOpted: commuteValues,
      hashtags: hashtagValues,
      overallRating: starRating,
      ctFeedback,
      postDescription: postDesc
    }

    setPostData(newPost)
    onClose()
  }

  const getData = async ()=>{
  

    const data = await getPostData();
    const postsData = data[1][0].posts;
    const postDataValue = Object.values(postsData) as Post[]
    console.log(postsData, "postsData")
  
    setPostsList(postDataValue)
  }

  useEffect(() => {
    getData()
  }, [])


  const heading = <div className="font-medium flex flex-row gap-x-2 items-center text-lg"><MdOutlinePostAdd />Create a post</div>

>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
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
=======
                color={"white"} background={'rgb(52,53,65)'} onClick={onOpen}>Create a post</Button>
            </Stack>
            <CustomModal
              heading={heading}
              isOpen={isOpen}
              onClose={onClose}
              content={<CreatePost 
                handleImageUpload={setImagesValue} 
                handleAreaChange={handleAreaChange} 
                handleHotelsChange={handleHotelsChange}
                handleCommuteChange={handleCommuteChange}
                handleStarRatingChange={handleStarRatingChange}
                handleCtFeedbackChange={handleCtFeedbackChange}
                handleDescChange={handleDescChange}
                handleHashtagChange={handleHashtagChange}
              />}
              footerCTA={<Button style={{ marginRight: 0 }} colorScheme='blue' mr={3} onClick={addPost}>Create post</Button>}
            />
          </div>
          <div className="flex flex-row gap-4">
            <div>
              {postsList?.map((post: Post, index) => {
                return <FeedPost {...post} key={post.postDescription + index + ""} />
              })}
            </div>
>>>>>>> Stashed changes
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Feeds