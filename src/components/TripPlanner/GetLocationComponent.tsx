import Search from "@/assets/svg/Search";
import { handleAskBundhuSearchSubmit } from "@/utils";
import { Button, Card, List, ListItem, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import SearchPlaces from "./SearchPlaces";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  getTripPlanTripForm,
  setTripPlanDetails,
} from "@/redux/manager/tripPlan";

function GetLocationComponent({ onCompleted }) {
  const dispatch = useAppDispatch();
  const tripForm = useAppSelector(getTripPlanTripForm) || {};
  const onLocationFilled = (placeName: string) => {
    dispatch(
      setTripPlanDetails({
        form: {
          ...tripForm,
          startingLocation: placeName,
        },
      })
    );
    onCompleted();
  };

  return (
    <div className="mt-4 flex items-center">
      <Button
        backgroundColor="#223040"
        variant={"solid"}
        color={"white"}
        borderRadius="20px"
      >
        Use your current location
      </Button>

      <Text className="m-4">OR</Text>
      <SearchPlaces onLocationFilled={onLocationFilled} />
    </div>
  );
}

export default GetLocationComponent;
