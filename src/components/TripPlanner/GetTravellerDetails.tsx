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

export enum FormKeys {
  ADULTS = "adults",
  CHILD = "child",
  ROOMS = "noOfRooms",
  COMMUTE_PREFRENCE = "commutePrefrence",
  LOCATIONS = "locations",
  BRING_PETS = "bringPets",
  START_DATE = "startDate",
  END_DATE = "endDate",
}

function GetTravellerDetails({ onCompleted }) {
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

      default: {
        val = e.target.value;
        break;
      }
    }

    dispatch(
      setTripPlanDetails({
        form: {
          ...tripForm,
          [key]: val,
        },
      })
    );
  };

  return (
    <div className="mt-4 flex items-center">
      <FormControl>
        <FormLabel>Traveller details</FormLabel>

        <div className="flex flex-row gap-8 mt-4">
          <Select
            placeholder="Number of Adults"
            style={{ borderRadius: "20px" }}
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
            style={{ borderRadius: "20px" }}
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
          style={{ borderRadius: "20px" }}
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

        <GetDateComponent onChangeHandler={onChangeHandler} />

        <FormLabel className="mt-4">Stay Location prefrences</FormLabel>

        <ChipInputTextArea onChangeChip={onChangeHandler(FormKeys.LOCATIONS)} />

        <div className="flex items-center">
          <FormLabel className="mt-4">Bringing pets along? </FormLabel>
          <Switch
            id="pets-switch"
            isChecked={tripForm.bringPets}
            onChange={onChangeHandler(FormKeys.BRING_PETS)}
          />
        </div>

        <div className="flex items-center">
          <FormLabel className="mt-4">Commute preference ? </FormLabel>
          <Select
            placeholder="commute prefrence"
            style={{ borderRadius: "20px" }}
            width={400}
            onChange={onChangeHandler(FormKeys.COMMUTE_PREFRENCE)}
          >
            <option>flight</option>
            <option>hotel</option>
            <option>bus</option>
          </Select>
        </div>

        <div className="flex items-center">
          <FormLabel className="mt-4">Budget preference ? </FormLabel>
          <RangeSlider
            aria-label={["min", "max"]}
            onChangeEnd={(val) => console.log(val)}
            defaultValue={[1000, 300000]}
          >
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} />
            <RangeSliderThumb index={1} />
          </RangeSlider>
        </div>
      </FormControl>
    </div>
  );
}

export default GetTravellerDetails;
