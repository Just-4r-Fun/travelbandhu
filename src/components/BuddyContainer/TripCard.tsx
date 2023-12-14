import React from "react";
import Image from "next/image";
import { Button } from "@chakra-ui/react";

function TripCard({ tripData, canJoinTrip }: any) {
  const {
    tripTitle,
    tripStartDate,
    contributionPerHead,
    tripEndDate,
    tripStartPoint,
    tripId,
    imageUrl,
  } = tripData;

  return (
    <div className="rounded-lg  w-[350px]">
      <Image
        src={imageUrl}
        alt="trip"
        width={350}
        height={200}
        className="rounded-t-lg max-h-[200px]"
        style={{ objectFit: "cover" }}
      />

      <div className="p-2 bg-[#E9E9E9] rounded-b-lg py-3 flex items-start">
        <div>
          <span className="text-lg font-medium">{tripTitle}</span>
          <p className="text-xs">
            <span className="font-bold mr-1">Trip Starts at:</span>{" "}
            <span>{tripStartDate}</span>
          </p>
          <p className="text-xs">
            <span className="font-bold mr-1">Trip End at:</span>
            <span>{tripEndDate}</span>
          </p>
          <p className="text-xs">
            <span className="font-bold mr-1">Contribution per head:</span>
            <span>Rs. {contributionPerHead}</span>
          </p>
          <p className="text-xs">
            <span className="font-bold mr-1">Trip meetup point:</span>
            <span>{tripStartPoint}</span>
          </p>
        </div>
        {canJoinTrip && (
          <div className="h-full flex items-center">
            <Button
              className="w-[100px] !rounded-xl"
              background={"var(--primary-color)"}
              _hover={{
                background: "var(--primary-color-light)",
              }}
              color={"white"}
              size={"sm"}
            >
              Join
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default TripCard;
