import ChipInput from "@/components/common/ChipInput";
import StarRating from "@/components/common/StarRating";
import UploadImage from "@/components/common/UploadImage";
import {  Textarea } from "@chakra-ui/react"
import React, {  useState } from "react"

interface IOwnProps {
    handleImageUpload: (values: any[]) => void
    handleAreaChange: (values: any[]) => void
    handleHotelsChange: (values: any[]) => void
    handleCommuteChange: (values: any[]) => void
    handleDescChange: (value: string) => void
    handleStarRatingChange: (value: number) => void
    handleHashtagChange: (values: any[]) => void
    handleCtFeedbackChange: (value: string) => void
}

const CreatePost:React.FC<IOwnProps> = ({handleImageUpload,  handleAreaChange, handleHotelsChange, handleCommuteChange, handleDescChange, handleHashtagChange, handleStarRatingChange, handleCtFeedbackChange}) => {
    const [starRating, setStarRating] = useState(0)
    const setRating = (starInput: number) => {
        setStarRating(starInput)
        handleStarRatingChange(starInput)
    }

    const onDescChange = (e) => {
        handleDescChange(e.target.value)
    }

    const onCtFeedbackChange = (e) => {
        handleCtFeedbackChange(e.target.value)
    }

    return (
        <div>
            <UploadImage setImagesValue={handleImageUpload} />
            <div className="mt-4">
                <div className="text-sm font-bold">Add what areas you covered through out the trip?</div>
                <ChipInput onChange={handleAreaChange}></ChipInput>
            </div>
             <div className="mt-4">
                <div className="text-sm font-bold">Add what hotels you stayed?</div>
                <ChipInput onChange={handleHotelsChange}></ChipInput>
            </div>
            <div className="mt-4">
                <div className="text-sm font-bold">Add what commute options were available?</div>
                <ChipInput onChange={handleCommuteChange}></ChipInput>
            </div>
            <div className="mt-4">
                <div className="text-sm font-bold">Description</div>
                <Textarea onChange={onDescChange} className="w-full" placeholder="Enter a short description about your beautiful trip :)"></Textarea>
            </div>

            <div className="mt-4">
                <div className="text-sm font-bold">It's time to make your travel trendy. Add your desired hashtags here.</div>
                <ChipInput onChange={handleHashtagChange}></ChipInput>
            </div>
            <div className="mt-4">
                <div className="text-sm font-bold">Would you like to give an overall rating now?</div>
                <StarRating rating={starRating} setRating={setRating} />
            </div>
            <div className="mt-4">
                <div className="text-sm font-bold">If any of the booking is done by Cleartrip, would you mind if you can provide a short feedback about Cleartrip as your companion?</div>
               <Textarea onChange={onCtFeedbackChange} className="w-full" placeholder="We are very critical of our customers feedback"></Textarea>
            </div>
        </div>
    );
}

export default CreatePost
