import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import GetDateComponent from "./GetDateComponent";
import ChipInput from "../common/ChipInput";

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
        <ChipInput></ChipInput>
      </FormControl>
    </div>
  );
}

export default GetTravellerDetails;
