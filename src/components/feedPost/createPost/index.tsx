import { Container } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
interface IOwnProps {

}
const CreatePost:React.FC<IOwnProps> = () => {
    const [files, setFiles] = useState<string[]>([]);

    const handleChange = (e) => {
        console.log(e.target.files);
        const modifiedFiles = files
        modifiedFiles.push(URL.createObjectURL(e.target.files[0]))
        setFiles(modifiedFiles);
    }

    return (
        <Container className="flex flex-col p-4">
            <Container className="border border-dashed items-center p-8 justify-items-center h-60 overflow-scroll">
                    <input type="file" onChange={handleChange} />
                    {files?.map((image, i) => {
                        return <img src={image} />
                    })}
            </Container>    
        </Container>
    )
}

export default CreatePost
