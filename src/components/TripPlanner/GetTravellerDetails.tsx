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
  Text,
} from "@chakra-ui/react";
import GetDateComponent from "./GetDateComponent";
import ChipInputTextArea from "./ChipInputTextArea";

function GetTravellerDetails({ onCompleted }) {
  return (
    <div className="mt-4 flex items-center">
      <FormControl>
        <FormLabel>Traveller details</FormLabel>

        <div className="flex flex-row gap-8 mt-4">
          <Select
            placeholder="Number of Adults"
            style={{ borderRadius: "20px" }}
            width={400}
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
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
        </Select>

        <GetDateComponent />

        <FormLabel className="mt-4">Stay Location prefrences</FormLabel>
        <ChipInputTextArea></ChipInputTextArea>

        <div className="flex items-center">
          <FormLabel className="mt-4">Bringing pets along? </FormLabel>
          <Switch id="email-alerts" />
        </div>

        <div className="flex items-center">
          <FormLabel className="mt-4">Commute preference ? </FormLabel>
          <Select
            placeholder="commute"
            style={{ borderRadius: "20px" }}
            width={400}
          >
            <option>flight</option>
            <option>hotel</option>
            <option>bus</option>
          </Select>
        </div>

        <div className="flex items-center">
          <FormLabel className="mt-4">Budget preference ? </FormLabel>
          <Select
            placeholder="commute"
            style={{ borderRadius: "20px" }}
            width={400}
          >
            <option>flight</option>
            <option>hotel</option>
            <option>bus</option>
          </Select>
        </div>

        <div className="flex items-center">
          <FormLabel className="mt-4">Range preference ? </FormLabel>
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
