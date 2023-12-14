import {  Tag, useDisclosure } from "@chakra-ui/react"
import ImageSlider from "../common/ImageSlider"
import StarRating from "../common/StarRating"
import TextWithChip from "../common/TextWithChip.tsx"

const FeedPost: React.FC<Post> = ({postId, postDescription, images, areasVisited, commuteOpted, hotelsBooked, overallRating, shareUrls, hashtags}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <div className="flex flex-col border-2 rounded-lg pb-4 mb-4">
            <div className="flex flex-row gap-6">
                <div className="p-4 w-6/12">
                    <ImageSlider images={images} />
                </div>
                <div className="flex flex-col pt-4 pb-4 gap-6">
                    <TextWithChip title={"Areas visited"} values={areasVisited} />
                    <TextWithChip title={"Hotels visited"} values={hotelsBooked.map((hotel) => hotel.name)} />
                    <TextWithChip title={"Commute opted"} values={commuteOpted} />
                    <div className="flex flex-row cl-gap-4">
                        <div className="text-xs mr-4 font-medium">Overall rating</div>
                        <StarRating rating={overallRating} size={12}  />
                    </div>
                    <div className="flex flex-row gap-x-2">
                    {hashtags.map((hashtag, i) => {return <Tag> <div className="text-xs cursor-pointer">#{hashtag}</div></Tag>})}</div>
                </div>
            </div>
            <div className="flex flex-col gap-y-4 -mt-8 pl-4 pr-4 text-sm">
            
                    {postDescription}
            </div>

        </div>
    )
    
}

export default FeedPost