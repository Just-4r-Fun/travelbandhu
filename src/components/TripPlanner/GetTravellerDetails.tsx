import {
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Select,
  Switch,
} from "@chakra-ui/react";
import GetDateComponent from "./GetDateComponent";
import ChipInputTextArea from "./ChipInputTextArea";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  getTripPlanTripForm,
  setTripPlanDetails,
} from "@/redux/manager/tripPlan";

import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

export enum FormKeys {
  ADULTS = "adults",
  CHILD = "child",
  ROOMS = "noOfRooms",
  COMMUTE_PREFRENCE = "commutePrefrence",
  LOCATIONS = "locations",
  BRING_PETS = "bringPets",
  START_DATE = "startDate",
  END_DATE = "endDate",
  PRICE_RANGE = "priceRange",
}

function GetTravellerDetails({ recommendedPlaces = [] }) {
  const dispatch = useAppDispatch();
  const tripForm = useAppSelector(getTripPlanTripForm) || {};

  const onChangeHandler = (key: FormKeys) => (e) => {
    let val;
    switch (key) {
      case FormKeys.LOCATIONS: {
        val = e;
        break;
      }

      case FormKeys.BRING_PETS: {
        val = e.target.checked;
        break;
      }

      case FormKeys.START_DATE: {
        val = e.target.value;
        break;
      }

      case FormKeys.END_DATE: {
        val = e.target.value;
        break;
      }

      case FormKeys.PRICE_RANGE: {
        dispatch(
          setTripPlanDetails({
            form: {
              ...tripForm,
              budgetLow: e.min,
              budgetHigh: e.max,
            },
          })
        );

        break;
      }

      default: {
        val = e.target.value;
        break;
      }
    }

    if (key !== FormKeys.PRICE_RANGE) {
      dispatch(
        setTripPlanDetails({
          form: {
            ...tripForm,
            [key]: val,
          },
        })
      );
    }
  };

  return (
    <div
      className="mt-4 flex items-center"
      style={{
        width: "1000px",
      }}
    >
      <FormControl>
        <div
          style={{
            backgroundColor: "#efefef",
            padding: "5px 20px 20px 20px",
            borderRadius: "15px",
            margin: "10px 0px",
          }}
        >
          <FormLabel
            style={{
              marginTop: "15px",
            }}
          >
            Traveller details
          </FormLabel>
          <div className="flex flex-row gap-8 mt-4">
            <Select
              placeholder="Number of Adults"
              style={{ borderRadius: "20px", border: "1px solid #aaa" }}
              width={400}
              onChange={onChangeHandler(FormKeys.ADULTS)}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
            </Select>

            <Select
              placeholder="Number of Kids"
              style={{ borderRadius: "20px", border: "1px solid #aaa" }}
              width={400}
              onChange={onChangeHandler(FormKeys.CHILD)}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
            </Select>
          </div>

          <FormLabel className="mt-4">Stay details</FormLabel>

          <Select
            placeholder="Number of Rooms"
            style={{ borderRadius: "20px", border: "1px solid #aaa" }}
            width={400}
            onChange={onChangeHandler(FormKeys.ROOMS)}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
          </Select>

          {/* <GetDateComponent onChangeHandler={onChangeHandler} /> */}
        </div>

        <div
          style={{
            backgroundColor: "#efefef",
            padding: "5px 20px 20px 20px",
            borderRadius: "15px",
            margin: "10px 0px",
          }}
        >
          <GetDateComponent onChangeHandler={onChangeHandler} />
        </div>

        <div
          style={{
            backgroundColor: "#efefef",
            padding: "5px 20px 20px 20px",
            borderRadius: "15px",
            margin: "10px 0px",
          }}
        >
          <FormLabel className="mt-4">Stay Location prefrences</FormLabel>

          <ChipInputTextArea
            onChangeChip={onChangeHandler(FormKeys.LOCATIONS)}
            initialChipsData={recommendedPlaces}
          />
        </div>
        <div className="flex items-center">
          <FormLabel className="mt-4">Bringing pets along? </FormLabel>
          <Switch
            id="pets-switch"
            isChecked={tripForm.bringPets}
            onChange={onChangeHandler(FormKeys.BRING_PETS)}
          />
        </div>

        <div
          className="flex items-center"
          style={{
            backgroundColor: "#efefef",
            padding: "20px",
            borderRadius: "15px",
            margin: "10px 0px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <FormLabel>Commute preference ? </FormLabel>
          <Select
            placeholder="commute prefrence"
            style={{ borderRadius: "20px", border: "1px solid #aaa" }}
            width={400}
            onChange={onChangeHandler(FormKeys.COMMUTE_PREFRENCE)}
          >
            <option>cheapest possible option</option>
            <option>private taxi</option>
            <option>flight + train</option>
            <option>train + bus</option>
          </Select>
        </div>

        <div className="flex items-center">
          <FormLabel className="mt-4">Budget preference ? </FormLabel>

          <InputRange
            maxValue={30000}
            minValue={1000}
            value={{ min: tripForm.budgetLow, max: tripForm.budgetHigh }}
            onChange={onChangeHandler(FormKeys.PRICE_RANGE)}
          />
        </div>
      </FormControl>
    </div>
  );
}

export default GetTravellerDetails;
