import React, { use, useEffect } from "react";

import {
  Box,
  Button,
  Card,
  CardBody,
  Container,
  HStack,
  Spinner,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  Text,
  useSteps,
} from "@chakra-ui/react";
import SearchPlaces from "./SearchPlaces";
import GetLocationComponent from "./GetLocationComponent";
import GetTravellerDetails from "./GetTravellerDetails";
import { useAppSelector } from "@/redux/hooks";
import { getTripPlanTripForm } from "@/redux/manager/tripPlan";

const steps = [
  {
    title: "PLEASE TELL ME YOUR STARTING LOCATION.",
    description: "",
    ChildComponent: GetLocationComponent,
  },
  {
    title: "PLEASE TELL ME SOME DETAILS ABOUT YOUR TRIP",
    description: "",
    ChildComponent: GetTravellerDetails,
  },
];

function TripPlanner({ recommendedPlaces = [] }) {
  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  });

  const [firstResponse, setFirstResponse] = React.useState({});
  const [showBottom, setShowBottom] = React.useState(false);

  const planTripForm = useAppSelector(getTripPlanTripForm);

  const generatePlan = () => {
    setShowBottom(true);
    fetch("/api/chatbuddy-2", {
      method: "POST",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(planTripForm),
    })
      .then((res) => res.json())
      .then((data) => {
        const innerHTML = data.daywisePlan.map((ele, index: number) => {
          return (
            <div key={index}>
              <Text pt="3" fontSize={"medium"} fontWeight={500}>
                {ele.title}
              </Text>
              {ele.points.map((el, ind) => (
                <Text key={ind} pt="2" fontSize={"medium"}>
                  {el}
                </Text>
              ))}
            </div>
          );
        });
        setFirstResponse(innerHTML);
      });
  };

  return (
    <div className="w-full">
      <Stepper
        index={activeStep}
        orientation="vertical"
        height="100%"
        gap="0"
        className="m-0"
      >
        {steps.map((step, index) => {
          const { ChildComponent } = step;

          const onCompleted = () => {
            setActiveStep(activeStep + 1);
          };

          return (
            <Step key={index}>
              <StepIndicator>
                <StepStatus
                  complete={<StepIcon />}
                  incomplete={<StepNumber />}
                  active={<StepNumber />}
                />
              </StepIndicator>

              <Box flexShrink="0">
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
                {ChildComponent && <ChildComponent onCompleted={onCompleted} recommendedPlaces={recommendedPlaces} />}
              </Box>
              <StepSeparator />
            </Step>
          );
        })}
      </Stepper>

      <div
        style={{
          padding: "30px",
        }}
      >
        <Button
          backgroundColor="#223040"
          variant={"solid"}
          color={"white"}
          borderRadius="20px"
          onClick={() => {
            generatePlan();
          }}
        >
          make my travel plan
        </Button>
      </div>
      {showBottom ? (
        <>
          <div className="flex  w-full justify-start">
            <Card
              width={"50%"}
              height={
                Object.keys(firstResponse).length > 0 ? "fit-content" : "600px"
              }
              background="#F2F2F2"
              style={{
                borderRadius: "20px",
              }}
            >
              <CardBody
                style={{
                  display: Object.keys(firstResponse).length > 0 ? "" : "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {Object.keys(firstResponse).length > 0 ? (
                  <>{firstResponse}</>
                ) : (
                  <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="xl"
                  />
                )}
              </CardBody>
            </Card>
          </div>
          <div className="mt-16">
            Booking buttons
            <div className="flex gap-4 mt-4">
              <Button style={{
                borderRadius: '20px'
              }}>Book flight tickets</Button>
              <Button style={{
                borderRadius: '20px'
              }}>Book flight tickets</Button>
              <Button style={{
                borderRadius: '20px'
              }}>Book flight tickets</Button>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default TripPlanner;
