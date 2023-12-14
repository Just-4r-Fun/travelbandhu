import { Input, Text } from "@chakra-ui/react";

function GetDateComponent({ onCompleted }) {
  return (
    <div className="mt-4 flex items-center gap-4">
      <Text style={{ fontWeight: "bold" }}>Start:</Text>
      <Input
        placeholder="Select Date and Time"
        size="md"
        type="datetime-local"
        onChange={() => {
            
        }}
      />

      <Text style={{ fontWeight: "bold" }}>end:</Text>
      <Input
        placeholder="Select Date and Time"
        size="md"
        type="datetime-local"
      />
    </div>
  );
}

export default GetDateComponent;
