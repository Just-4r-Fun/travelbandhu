import { Input, Text } from "@chakra-ui/react";
import { FormKeys } from "./GetTravellerDetails";

function GetDateComponent({ onChangeHandler }) {
  return (
    <div className="mt-4 flex items-center gap-4">
      <Text style={{ fontWeight: "bold" }}>Start:</Text>
      <Input
        placeholder="Select Date and Time"
        size="md"
        type="datetime-local"
        onChange={onChangeHandler(FormKeys.START_DATE)}
      />

      <Text style={{ fontWeight: "bold" }}>end:</Text>
      <Input
        placeholder="Select Date and Time"
        size="md"
        type="datetime-local"
        onChange={onChangeHandler(FormKeys.END_DATE)}
      />
    </div>
  );
}

export default GetDateComponent;
