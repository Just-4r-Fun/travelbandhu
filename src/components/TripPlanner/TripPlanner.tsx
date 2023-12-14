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
import GetDateComponent from "./GetDateComponent";

const steps = [
  {
    title: "PLEASE TELL ME YOUR STARTING LOCATION.",
    description: "",
    ChildComponent: GetLocationComponent,
  },
  { title: "Date & Time", description: "",   ChildComponent:  GetDateComponent },
  {
    title: "PLEASE TELL ME SOME DETAILS ABOUT YOUR TRIP",
    description: "",
  },
];

function TripPlanner() {
  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  });

  return (
    <div className="w-full flex">
      <Stepper
        index={activeStep}
        orientation="vertical"
        height="400px"
        gap="0"
        className="m-0"
      >
        {steps.map((step, index) => {
          const { ChildComponent } = step;

          const onCompleted = ()=>{
            setActiveStep(activeStep+1);
          }

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
    </div>
  );
}

export default TripPlanner;
