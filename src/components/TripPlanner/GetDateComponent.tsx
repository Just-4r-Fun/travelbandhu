import { Input, Text } from "@chakra-ui/react";

function GetDateComponent({ onCompleted }) {
  return (
    <div className="mt-4 flex items-center gap-4">
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
