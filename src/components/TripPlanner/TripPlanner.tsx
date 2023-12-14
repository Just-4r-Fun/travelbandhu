import React from "react";

import {
  Box,
  Button,
  Container,
  HStack,
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

function TripPlanner() {
  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  });

  const planTripForm = useAppSelector(getTripPlanTripForm);

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

                {ChildComponent && <ChildComponent onCompleted={onCompleted} />}
              </Box>
              <StepSeparator />
            </Step>
          );
        })}
      </Stepper>

      <div className="mt-16">
        Hooray! Here is what we think you should plan your trip
      </div>

      <div className="mt-16">
        Booking buttons
        <div className="flex gap-4 mt-4">
          <Button>Book flight tickets</Button>
          <Button>Book flight tickets</Button>
          <Button>Book flight tickets</Button>
        </div>
      </div>
    </div>
  );
}

export default TripPlanner;
