import BaseLayout from "@/components/BaseLayout";
import SearchPlaceholder from "@/components/SearchPlaceholder";
import TripPlanner from "@/components/TripPlanner/TripPlanner";
import { useAppSelector } from "@/redux/hooks";
import { getTripPlanTripDescription } from "@/redux/manager/tripPlan";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

function AskBandu() {
  const planTripDescription = useAppSelector(getTripPlanTripDescription);

  const [enableEditTripDescription, setEnableEditTripDescription] =
    useState(false);

  return (
    <BaseLayout className="pt-6">
      <div className="w-full min-h-fit">
        <div className="flex  w-full justify-end">
          <Card width={"50%"} background="aliceblue">
            <CardBody>
              <Text pt="2" fontSize="medium">
                {planTripDescription}
              </Text>
            </CardBody>
          </Card>
        </div>

        <div className="flex  w-full justify-start pt-4">
          <Card width={"50%"} background="#F2F2F2">
            <CardBody>
              <Text pt="2" fontSize="medium">
                Beach Bliss: Explore Palolem Beach's serene ambiance. Relax on
                the pristine sands of Colva Beach Historical Charm: Visit Cabo
                de Rama fort for panoramic views. Spiritual Sojourn: Immerse in
                the divine at Shri Manguesh Temple. Cultural Exploration: Marvel
                at the architecture of Basilica of Bom Jesus. Market Delights:
                Shop for local treasures at Margao's vibrant markets. Riverside
                Cruise: Conclude your day with a Sal River cruise. Resort
                Retreats: Stay at charming resorts for a delightful experience.
                December Delights: Enjoy Goa's pleasant weather and festive
                vibe.
              </Text>
              <Text pt="2" fontSize="medium">
                Beach Bliss: Explore Palolem Beach's serene ambiance. Relax on
                the pristine sands of Colva Beach Historical Charm: Visit Cabo
                de Rama fort for panoramic views. Spiritual Sojourn: Immerse in
                the divine at Shri Manguesh Temple. Cultural Exploration: Marvel
                at the architecture of Basilica of Bom Jesus. Market Delights:
                Shop for local treasures at Margao's vibrant markets. Riverside
                Cruise: Conclude your day with a Sal River cruise. Resort
                Retreats: Stay at charming resorts for a delightful experience.
                December Delights: Enjoy Goa's pleasant weather and festive
                vibe.
              </Text>
            </CardBody>
          </Card>
        </div>

        {enableEditTripDescription && (
          <div className="m-4  w-full flex justify-end ml-2">
            <SearchPlaceholder customSearchValue={planTripDescription} />
          </div>
        )}

        <div>
          <ButtonGroup spacing="6" className="w-full mt-12 flex justify-center">
            <Button
              backgroundColor="#223040"
              variant={"solid"}
              color={"white"}
              borderRadius="20px"
              onClick={() => {
                document.getElementById("trip-planner")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              {" "}
              Plan your itinerary
            </Button>
            <Button
              variant={"outline"}
              color="#223040"
              borderRadius="20px"
              onClick={() => {
                setEnableEditTripDescription(true);
              }}
            >
              Continue to Chat
            </Button>
          </ButtonGroup>
        </div>

        <div id="trip-planner" className="pt-20 h-fit bg-white">
          <TripPlanner />
        </div>
      </div>
    </BaseLayout>
  );
}

export default AskBandu;
