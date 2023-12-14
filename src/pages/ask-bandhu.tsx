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
  Spinner,
  Text,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

function AskBandu() {
  const planTripDescription = useAppSelector(getTripPlanTripDescription);
  const [firstResponse, setFirstResponse] = React.useState({});


  const APICall = async () => {
    fetch('/api/chatbuddy-1', {
      method: 'POST',
      headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ summary: planTripDescription})
    }).then((res) => res.json()).then((data)=> {
      const innerHTML = data.res.map((ele, index: number) => {
        return <div key={index}>
          <Text pt="3" fontSize={"medium"} fontWeight={500}>{ele.name}</Text>
          <Text pt="2" fontSize={"medium"}>{ele.description}</Text>
        </div>
      })
      setFirstResponse(innerHTML);
    })
  }


  useEffect(() => {
    APICall();
  }, [])

  const [enableEditTripDescription, setEnableEditTripDescription] =
    useState(false);

  return (
    <BaseLayout className="pt-6">
      <div className="w-full min-h-fit">
        <div className="flex  w-full justify-end">
          <Card width={"50%"} background="aliceblue" style={{
            borderRadius: '20px'
          }}>
            <CardBody>
              <Text fontSize="medium">
                {planTripDescription}
              </Text>
            </CardBody>
          </Card>
        </div>

        <div className="flex  w-full justify-start pt-4">
          <Card width={"50%"} height={Object.keys(firstResponse).length > 0 ? "fit-content" : "600px" } background="#F2F2F2" style={{
            borderRadius: '20px'
          }}>
            <CardBody style={{
              display: Object.keys(firstResponse).length > 0 ? '' : 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {Object.keys(firstResponse).length > 0 ? <>{firstResponse}</> : <Spinner thickness='4px'  speed='0.65s' emptyColor='gray.200'  color='blue.500' size='xl'/> }
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
