import { Input, Text } from "@chakra-ui/react";
import { FormKeys } from "./GetTravellerDetails";

function GetDateComponent({ onChangeHandler }: {onChangeHandler: any}) {
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
      <div style={{flex: '1'}}>
        <Text style={{ fontWeight: "bold" }}>Starts At:</Text>
        <Input
          placeholder="Select Date and Time"
          size="md"
          type="datetime-local"
          style={{
            border: "1px solid #aaa",
            borderRadius: "20px",
            width: "90%",
            marginTop: '10px'

          }}
          onChange={() => {}}
        />
      </div>
      <div  style={{flex: '1'}}>
        <Text style={{ fontWeight: "bold" }}>Ends At:</Text>
        <Input
          placeholder="Select Date and Time"
          size="md"
          type="datetime-local"
          style={{
            border: "1px solid #aaa",
            borderRadius: "20px",
            width: "90%",
            marginTop: '10px'
          }}
        />
      </div>
    </div>
  );
}

export default GetDateComponent;
