import Image from "next/image";
import React, { useState } from "react";
import BackButton from "@/assets/images/BackButton.png";
import { PlacesResponseType, getPlaceImage } from "@/network/Places";
import { Button, Input, Skeleton, Text } from "@chakra-ui/react";
import UploadLogo from "@/assets/images/upload.png";
import { Textarea } from "@chakra-ui/react";
import PlusImg from "@/assets/images/plus.png";
import Minus from "@/assets/images/minus.png";

interface IMyItineraryPlans {
  planFreeText: string;
  tripDate: {
    start: string;
    end: string;
  };
}

function AddBuddyTrip({
  onBack,
  onTripPlanPost,
}: {
  onBack: () => void;
  onTripPlanPost: (data: any) => void;
}) {
  const [placeText, setPlaceText] = React.useState("");
  const [placesImageData, setPlacesImageData] = useState<PlacesResponseType>();
  const [selectedImageUrl, setSelectedImageUrl] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [myItinerary, setMyItinerary] = useState<IMyItineraryPlans[]>([]);
  const [currentDateData, setCurrentTripData] = useState<{
    startDate?: any;
    endEndDate?: any;
    freeText?: string;
  }>();

  const [tripPriceAndLocation, setTripPriceAndLocation] = useState<{
    tripPrice?: string;
    tripLocation?: string;
  }>();

  const [tripDates, setTripDates] = useState<{
    startDate?: any;
    endEndDate?: any;
  }>();

  const disableButton = myItinerary.length < 1 || selectedImageUrl.length < 1;

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

  const handleAddPlan = () => {
    if (!currentDateData) return;
    console.log(currentDateData);
    setMyItinerary([
      ...myItinerary,
      {
        planFreeText: currentDateData?.freeText || "",
        tripDate: {
          start: currentDateData?.startDate,
          end: currentDateData?.endEndDate,
        },
      },
    ]);
    setCurrentTripData(undefined);
  };

  const handlePostSubmit = () => {
    const tripData = {
      tripTitle: `Trip to ${placeText}`,
      tripStartDate: tripDates?.startDate,
      tripEndDate: tripDates?.endEndDate,
      contributionPerHead: tripPriceAndLocation?.tripPrice,
      tripStartPoint: tripPriceAndLocation?.tripLocation,
      tripId: Date.now().toString(),
      itinerary: myItinerary,
      imageUrl: selectedImageUrl,
    };
    onTripPlanPost(tripData);
  };

  return (
    <div className="w-full px-4">
      <div className="flex justify-start mb-8">
        <Image
          src={BackButton}
          alt="BackButton"
          onClick={onBack}
          width={34}
          height={18}
          className="mr-3"
          style={{ cursor: "pointer", objectFit: "contain" }}
        />
        <h1 className="text-2xl font-bold">Add Buddy Trip</h1>
      </div>
      <div className="flex justify-between">
        <div
          className="px-3 py-2 rounded-[28px] border border-gray-400 w-[473px] flex items-center mt-4 mb-2"
          style={{
            borderRadius: "50px",
            border: "1px solid rgba(0, 0, 0, 0.24)",
            background: "#FFF",
            boxShadow: " 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          }}
        >
          <input
            placeholder={"My Destination"}
            className="w-full outline-none"
            value={placeText}
            onChange={(e) => setPlaceText(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </div>
        <div className="flex my-2 items-center justify-end">
          <label>
            Trip Start Date:
            <Input
              type="date"
              placeholder="Start Date"
              width={200}
              title="Start Date"
              className="ml-2 mr-4"
              value={tripDates?.startDate || ""}
              onChange={(e) => {
                setTripDates({
                  ...tripDates,
                  startDate: e.target.value,
                });
              }}
            />
          </label>
          <label>
            Trip End Date
            <Input
              type="date"
              placeholder="End Date"
              width={200}
              title="End Date"
              className="ml-2"
              value={tripDates?.endEndDate || ""}
              onChange={(e) => {
                setTripDates({
                  ...tripDates,
                  endEndDate: e.target.value,
                });
              }}
            />
          </label>
        </div>
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
            <div className="flex py-2 items-center">
              <Text fontWeight={800} fontSize={16} className="mr-3">
                Choose suggested image
              </Text>
              <Text className="text-xs text-slate-500 mr-3">or</Text>
              <div
                className="flex justify-center items-center px-2 py-1"
                style={{
                  borderRadius: "16px",
                  border: "1px solid #000",
                }}
              >
                <Image
                  src={UploadLogo}
                  alt="upload"
                  height={12}
                  width={20}
                  className="mr-1"
                />
                <span className="text-xs font-normal">
                  Upload your own image
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center pt-8">
        <label>
          Average cost per person:
          <Input
            width={200}
            placeholder="Average trip cost"
            value={tripPriceAndLocation?.tripPrice || ""}
            onChange={(e) =>
              setTripPriceAndLocation({
                ...tripPriceAndLocation,
                tripPrice: e.target.value,
              })
            }
            className="mx-2 mr-4"
          />
        </label>
        <label>
          Meetup location
          <Input
            width={200}
            placeholder="Meetup Location"
            value={tripPriceAndLocation?.tripLocation || ""}
            onChange={(e) =>
              setTripPriceAndLocation({
                ...tripPriceAndLocation,
                tripLocation: e.target.value,
              })
            }
            className="ml-2"
          />
        </label>
      </div>
      <Text fontWeight={800} fontSize={20} className="mt-6 mb-2">
        My Itinerary plans:
      </Text>
      {myItinerary.map((plan, index) => (
        <div key={index} className="mb-3">
          <div className="flex my-2 items-center">
            <div className="w-[30px]">{index + 1} .</div>
            <div className="w-full border border-slate-200 rounded p-2">
              {plan.planFreeText}
            </div>
            <div className="w-[50px] ml-4">
              <Image
                src={Minus}
                alt="minus"
                height={50}
                width={50}
                onClick={() =>
                  setMyItinerary(myItinerary.filter((_, i) => i !== index))
                }
              />
            </div>
          </div>
          <div className="flex my-2 items-center justify-end pr-[48px]">
            <span>
              <label>
                Start Date:
                <Input
                  type="date"
                  placeholder="Start Date"
                  width={200}
                  title="Start Date"
                  className="ml-2 mr-4"
                  value={plan?.tripDate.start || ""}
                  disabled
                />
              </label>
            </span>
            <span>
              <label>
                End Date:
                <Input
                  type="date"
                  placeholder="End Date"
                  width={200}
                  title="End Date"
                  className="ml-2 mr-4"
                  value={plan?.tripDate.end || ""}
                  disabled
                  onChange={(e) =>
                    setMyItinerary(
                      myItinerary.map((d, i) =>
                        i === index ? { ...d, endDate: e.target.value } : d
                      )
                    )
                  }
                />
              </label>
            </span>
          </div>
        </div>
      ))}
      <div className="flex my-2 items-center">
        <div className="w-[30px]">{myItinerary.length + 1} .</div>
        <Textarea
          value={currentDateData?.freeText || ""}
          onChange={(e) =>
            setCurrentTripData({ ...currentDateData, freeText: e.target.value })
          }
          placeholder="Enter your plans"
        />
        <div className="w-[50px] ml-4">
          <Image
            src={PlusImg}
            alt="plus"
            height={50}
            width={50}
            onClick={handleAddPlan}
          />
        </div>
      </div>
      <div className="flex my-2 items-center justify-end pr-[65px]">
        <label>
          Start Date:
          <Input
            type="date"
            placeholder="Start Date"
            width={200}
            title="Start Date"
            className="ml-2 mr-4"
            value={currentDateData?.startDate || ""}
            onChange={(e) => {
              setCurrentTripData({
                ...currentDateData,
                startDate: e.target.value,
              });
            }}
          />
        </label>
        <label>
          End Date
          <Input
            type="date"
            placeholder="End Date"
            width={200}
            title="End Date"
            className="ml-2"
            value={currentDateData?.endEndDate || ""}
            onChange={(e) => {
              setCurrentTripData({
                ...currentDateData,
                endEndDate: e.target.value,
              });
            }}
          />
        </label>
      </div>
      <div className="flex w-full"></div>
      <div className="flex w-full items-center justify-center p-3 py-4">
        <div>
          <Button
            className="!rounded-[14px]"
            {...(!disableButton
              ? {
                  background: "var(--primary-color)",
                  _hover: {
                    background: "var(--primary-color-light)",
                  },
                  color: "white",
                }
              : {})}
            disabled={disableButton}
            onClick={handlePostSubmit}
          >
            Post
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AddBuddyTrip;
