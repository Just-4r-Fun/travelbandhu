import {  Tag, useDisclosure } from "@chakra-ui/react"
import ImageSlider from "../common/ImageSlider"
import StarRating from "../common/StarRating"
import TextWithChip from "../common/TextWithChip.tsx"
import Testimonial from "../common/Testimonial"
import { FaRegComments } from "react-icons/fa6";

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
                    <>
                    <div className="text-xs font-bold -mb-6 flex flex-row gap-x-2" style={{color: 'rgb(52,53,65)'}}><FaRegComments /> A word for Cleartrip</div>
                    <Testimonial
                        message="Booking through the Cleartrip app is a breeze! With its user-friendly design, transparent pricing, and real-time updates, it offers a seamless and secure experience. From flights to hotels, Cleartrip simplifies travel planning, ensuring a hassle-free journey every time."
                    /></>
                </div>
            </div>
            <div className="flex flex-col gap-y-4 -mt-8 pl-4 pr-4 text-sm">
            
                    {postDescription}
            </div>

        </div>
    )
    
}

export default FeedPost