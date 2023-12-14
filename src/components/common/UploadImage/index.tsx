import Upload from "@/assets/svg/Upload";
import { Container } from "@chakra-ui/react";
import React, { useState } from "react";

const UploadImage = () => {
    const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const files = e.target.files;

    if (files) {
      const newImages = Array.from(files).map((file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        return new Promise((resolve) => {
          reader.onload = () => {
            resolve(reader.result);
          };
        });
      });

      Promise.all(newImages).then((imageDataUrls) => {
        setImages((prevImages) => [...prevImages, ...imageDataUrls]);
      });
    }
  };
    return (
        <Container className="flex flex-col border border-dashed p-4">
                {images.length > 0 && (
                    <div>
                    <div className="flex text-xs mb-2">Preview:</div>
                    <div className="flex flex-row gap-2 h-max flex-wrap overflow-scroll w-120">
                        {images.map((image, index) => (
                            <img
                            key={index}
                            src={image}
                            alt={`Preview ${index + 1}`}
                            style={{ width: '100px', height: '100px', marginRight: '10px', objectFit: 'cover', marginBottom: '20px' }}
                            />
                        ))}
                    </div>
                    </div>
                )}
                <div className="flex items-center justify-center">
                    
                    <input id="fileUpload" type="file" accept="image/*" multiple onChange={handleImageChange} hidden />
                    <label for="fileUpload" className="flex flex-row cursor-pointer">Upload your images here <Upload /></label>
                </div>
                
            </Container>
    )
}

export default UploadImage