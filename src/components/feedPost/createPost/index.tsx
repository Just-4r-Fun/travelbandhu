import ChipInput from "@/components/common/ChipInput";
import StarRating from "@/components/common/StarRating";
import UploadImage from "@/components/common/UploadImage";
import {  Textarea } from "@chakra-ui/react"
import React, {  useState } from "react"

interface IOwnProps {

}

const CreatePost:React.FC<IOwnProps> = () => {
    const [starRating, setStarRating] = useState(0)
    const setRating = (starInput: number) => {
        setStarRating(starInput)
    }

    return (
        <div>
            <UploadImage />

            <div className="mt-4">
                <div className="text-sm">Add what areas you covered through out the trip?</div>
                <ChipInput></ChipInput>
            </div>
             <div className="mt-4">
                <div className="text-sm">Add what hotels you stayed?</div>
                <ChipInput></ChipInput>
            </div>
            <div className="mt-4">
                <div className="text-sm">Add what commute options were available?</div>
                <ChipInput></ChipInput>
            </div>
            <div className="mt-4">
                <div className="text-sm">Description</div>
                <Textarea className="w-full" placeholder="Enter a short description about your beautiful trip :)"></Textarea>
            </div>

            <div className="mt-4">
                <div className="text-sm">It's time to make your travel trendy. Add your desired hashtags here.</div>
                <ChipInput></ChipInput>
            </div>
            <div className="mt-4">
                <div className="text-sm">Would you like to give an overall rating now?</div>
                <StarRating rating={starRating} setRating={setRating} />
            </div>
        </div>
    );
}

export default CreatePost
