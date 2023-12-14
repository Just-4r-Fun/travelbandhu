import BaseLayout from "@/components/BaseLayout";
import TripPlanner from "@/components/TripPlanner/TripPlanner";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Text,
} from "@chakra-ui/react";
import React from "react";

function AskBandu() {
  return (
    <BaseLayout className="pt-6">
      <div className="flex  w-full justify-end">
        <Card width={"50%"} background="aliceblue">
          <CardBody>
            <Text pt="2" fontSize="medium">
              I want to visit Goa in the month of December, I live in Bengalore,
              We are a group of 3 people, we want to explore south Goa, suggest
              me few places near south Goa and help me plan my trip
            </Text>
          </CardBody>
        </Card>
      </div>

      <div className="flex  w-full justify-start pt-4">
        <Card width={"50%"} background="#F2F2F2">
          <CardBody>
            <Text pt="2" fontSize="medium">
              Beach Bliss: Explore Palolem Beach's serene ambiance. Relax on the
              pristine sands of Colva Beach Historical Charm: Visit Cabo de Rama
              fort for panoramic views. Spiritual Sojourn: Immerse in the divine
              at Shri Manguesh Temple. Cultural Exploration: Marvel at the
              architecture of Basilica of Bom Jesus. Market Delights: Shop for
              local treasures at Margao's vibrant markets. Riverside Cruise:
              Conclude your day with a Sal River cruise. Resort Retreats: Stay
              at charming resorts for a delightful experience. December
              Delights: Enjoy Goa's pleasant weather and festive vibe.
            </Text>
            <Text pt="2" fontSize="medium">
              Beach Bliss: Explore Palolem Beach's serene ambiance. Relax on the
              pristine sands of Colva Beach Historical Charm: Visit Cabo de Rama
              fort for panoramic views. Spiritual Sojourn: Immerse in the divine
              at Shri Manguesh Temple. Cultural Exploration: Marvel at the
              architecture of Basilica of Bom Jesus. Market Delights: Shop for
              local treasures at Margao's vibrant markets. Riverside Cruise:
              Conclude your day with a Sal River cruise. Resort Retreats: Stay
              at charming resorts for a delightful experience. December
              Delights: Enjoy Goa's pleasant weather and festive vibe.
            </Text>
          </CardBody>
        </Card>
      </div>

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
          <Button variant={"outline"} color="#223040" borderRadius="20px">
            Continue to Chat
          </Button>
        </ButtonGroup>
      </div>

      <div id="trip-planner" className="pt-20">
        <TripPlanner />
      </div>
    </BaseLayout>
  );
}

export default AskBandu;
