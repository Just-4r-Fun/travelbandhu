import {  Tag, Text, position, useDisclosure } from "@chakra-ui/react"
import ImageSlider from "../common/ImageSlider"
import StarRating from "../common/StarRating"
import TextWithChip from "../common/TextWithChip.tsx"
import { IoMdArrowDropdownCircle } from "react-icons/io";
import Testimonial from "../common/Testimonial"
import { FaRegComments } from "react-icons/fa6";

<<<<<<< Updated upstream

const FeedPost: React.FC<Post> = ({postId, postDescription, images, areasVisited, commuteOpted, hotelsBooked, overallRating, shareUrls, hashtags}) => {
=======
const FeedPost: React.FC<Post> = ({postId, postDescription, images, areasVisited, commuteOpted, hotelsBooked, overallRating, shareUrls, hashtags, ctFeedback}) => {
>>>>>>> Stashed changes
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <div className="flex flex-col border-2 rounded-lg pb-4 mb-4" style={{ borderRadius: "20px" }}>
            <div className="flex flex-row gap-6">
                <div className="p-4 w-6/12">
                    <ImageSlider images={images} />
                </div>
                <div className="flex flex-col pt-8 gap-4">
                    <TextWithChip title={"Areas visited"} values={areasVisited} />
                    <TextWithChip title={"Hotels visited"} values={hotelsBooked.map((hotel) => hotel.name)} />
                    <TextWithChip title={"Commute opted"} values={commuteOpted} />
                    <div className="flex flex-row cl-gap-4">
                        <div className="text-s mr-4 font-medium">Overall rating</div>
                        <StarRating rating={overallRating} size={20}  />
                    </div>
                    <div className="flex flex-row gap-x-2">
<<<<<<< Updated upstream
                        {hashtags.map((hashtag, i) => {return <Tag> <div className="text-xs cursor-pointer">#{hashtag}</div></Tag>})}
                    </div>
                    <div>
                        <div className="text-xs font-bold mb-1 flex flex-row gap-x-2" style={{color: 'rgb(52,53,65)'}}>
                            <FaRegComments /> A word for Cleartrip
                        </div>
                        <Testimonial message="Booking through the Cleartrip app is a breeze! With its user-friendly design, transparent pricing, and real-time updates, it offers a seamless and secure experience. From flights to hotels, Cleartrip simplifies travel planning, ensuring a hassle-free journey every time."/>
                    </div>
=======
                    {hashtags.map((hashtag, i) => {return <Tag> <div className="text-xs cursor-pointer">#{hashtag}</div></Tag>})}</div>
                    <>
                    <div className="text-xs font-bold -mb-6 flex flex-row gap-x-2" style={{color: 'rgb(52,53,65)'}}><FaRegComments /> A word for Cleartrip</div>
                    <Testimonial
                        message={ctFeedback}
                    /></>
>>>>>>> Stashed changes
                </div>
            </div>
            <div className="flex flex-col gap-y-4 -mt-8 pl-4 pr-4 text-sm">
                <Text style={{
                    lineHeight: '25px',
                }}>
                    {postDescription}
                    {/* { postDescription.length > 900 && <div style={{
                        width: '100%',
                        height: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <IoMdArrowDropdownCircle size={"30"} style={{
                            marginTop: '50px',
                            position: 'absolute'
                        }}/>
                    </div>} */}
                    
                </Text>
            </div>

        </div>
    )
    
}

export default FeedPost