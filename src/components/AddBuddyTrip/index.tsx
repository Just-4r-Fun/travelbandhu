import Image from "next/image";
import React, { useState } from "react";
import BackButton from "@/assets/images/BackButton.png";
import { PlacesResponseType, getPlaceImage } from "@/network/Places";
import { Skeleton, Text } from "@chakra-ui/react";

function AddBuddyTrip({ onBack }: { onBack: () => void }) {
  const [placeText, setPlaceText] = React.useState("");
  const [placesImageData, setPlacesImageData] = useState<PlacesResponseType>();
  const [selectedImageUrl, setSelectedImageUrl] = useState("");
  const [isLoading, setLoading] = useState(false);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      const placeResponse = await getPlaceImage(placeText);
      setPlacesImageData(placeResponse);
      setSelectedImageUrl(placeResponse.results[0].urls.full);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full px-4">
      <div className="flex justify-start">
        <Image
          src={BackButton}
          alt="BackButton"
          onClick={onBack}
          width={34}
          height={18}
          className="mr-3"
          style={{ cursor: "pointer", objectFit: "contain" }}
        />
        <h1 className="text-3xl font-bold">Add Buddy Trip</h1>
      </div>
      <div
        className="px-3 py-2 rounded-[28px] border border-gray-400 w-[473px] flex items-center mt-4"
        style={{
          borderRadius: "50px",
          border: "1px solid rgba(0, 0, 0, 0.24)",
          background: "#FFF",
          boxShadow: " 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        <input
          placeholder={"I am planning trip too"}
          className="w-full outline-none"
          value={placeText}
          onChange={(e) => setPlaceText(e.target.value)}
          onKeyPress={handleKeyPress}
        />
      </div>
      <div className="flex justify-between">
        <div
          className={`w-[550px] h-[290px] ${
            isLoading ? "" : "bg-slate-300"
          } rounded-xl mt-6`}
        >
          {!!selectedImageUrl ? (
            <Image
              src={selectedImageUrl}
              alt="selected"
              style={{ objectFit: "cover" }}
              height={290}
              width={550}
              className="rounded-xl w-full h-full"
            />
          ) : (
            <>
              {isLoading && <Skeleton height="100%" className="!rounded-xl" />}
            </>
          )}
        </div>
        <div>
          <div>
            <div className="w-[550px] h-[250px] border border-slate-500 rounded-xl mt-6 overflow-y-auto">
              {placesImageData ? (
                <div className="flex flex-wrap">
                  {placesImageData.results.map((place) => (
                    <div
                      className="w-[160px] h-[100px] m-2"
                      key={place.urls.full}
                    >
                      <Image
                        key={place.urls.full}
                        src={place.urls.full}
                        alt="image suggestion"
                        style={{ objectFit: "cover" }}
                        height={100}
                        width={160}
                        className="rounded-xl w-full h-full"
                        onClick={() => {
                          setSelectedImageUrl(place.urls.full);
                        }}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  {isLoading ? (
                    <>
                      <div className="flex flex-wrap">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
                          <div
                            className="w-[160px] h-[100px] m-2"
                            key={Math.random()}
                          >
                            <Skeleton
                              height="100%"
                              className="!rounded-xl"
                              width={160}
                            />
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <div className="text-center mt-[110px]">
                      Enter place planning to visit for image suggestion
                    </div>
                  )}
                </>
              )}
            </div>
            <div>
              <Text>Choose suggested image</Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBuddyTrip;
