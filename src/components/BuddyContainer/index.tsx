import { Button, Text } from "@chakra-ui/react";
import React from "react";

import { buddyTrips } from "@/__mocks__/buddy";
import TripCard from "./TripCard";

function BuddyContainer({ onAddBuddy }: { onAddBuddy: () => void }) {
  const { exploreTrips, myTrips } = buddyTrips;
  const { pastTrips, upcomingTrips } = myTrips;

  const scrollToMyTrips = () => {
    const element = document.getElementById("my-trips-container");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full min-h-fit">
      <div className="flex justify-end">
        <Button
          className="!rounded-[14px] border-2"
          color={"var(--primary-color)"}
          variant={"outline"}
          onClick={scrollToMyTrips}
        >
          My Buddy Trips
        </Button>
        <Button
          className="!rounded-[14px] ml-4"
          background={"var(--primary-color)"}
          _hover={{
            background: "var(--primary-color-light)",
          }}
          color={"white"}
          onClick={onAddBuddy}
        >
          I am looking for travel Buddy
        </Button>
      </div>
      <Text fontWeight={600} fontSize={"2xl"} className="mb-4">
        Explore Trips
      </Text>
      <div className="flex max-w-[full] overflow-x-auto">
        {exploreTrips.map((trip, index) => {
          return (
            <div key={"exploreTrip" + index} className="mr-5">
              <TripCard
                tripData={trip}
                key={"exploreTrip" + index}
                canJoinTrip={true}
              />
            </div>
          );
        })}
      </div>
      <Text
        fontWeight={600}
        fontSize={"2xl"}
        className="mb-4 mt-8"
        id="my-trips-container"
      >
        Upcoming Trips
      </Text>
      <div className="flex max-w-[full] overflow-x-auto mb-4">
        {upcomingTrips.map((trip, index) => {
          return (
            <div key={"exploreTrip" + index} className="mr-5">
              <TripCard
                tripData={trip}
                key={"exploreTrip" + index}
                canJoinTrip={false}
              />
            </div>
          );
        })}
      </div>
      <Text fontWeight={600} fontSize={"2xl"} className="mb-4 mt-8">
        Previous Trips
      </Text>
      <div className="flex max-w-[full] overflow-x-auto mb-4">
        {pastTrips.map((trip, index) => {
          return (
            <div key={"exploreTrip" + index} className="mr-5">
              <TripCard
                tripData={trip}
                key={"exploreTrip" + index}
                canJoinTrip={false}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BuddyContainer;
