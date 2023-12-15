// ChipInput.js
import React, { useState } from "react";
import { Flex, Input, Text } from "@chakra-ui/react";
import { MdCancel } from "react-icons/md";

const ChipInputTextArea = ({onChangeChip, initialChipsData = []}) => {
  const [chips, setChips] = useState(initialChipsData);
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      setChips([...chips, inputValue.trim()]);
      onChangeChip([...chips, inputValue.trim()]);
      setInputValue("");
      event.preventDefault(); // Prevents the default behavior of the Enter key
    }
  };

  const handleRemoveChip = (index) => {
    const newChips = [...chips];
    newChips.splice(index, 1);
    setChips(newChips);
  };

  return (
    <div>
      {chips.length > 0 && (
        <>
          <Flex className="mt-4">
            {chips.map((chip, index) => (
              <div
                key={index}
                style={{
                  background: "#EDF2F7",
                  borderRadius: "20px",
                  padding: "5px 10px 5px 15px",
                  marginRight: "5px",
                  marginBottom: "5px",
                  display: "flex",
                  alignItems: "center",
                  border: '1px solid #777777'
                }}
              >
                <Text>{chip}</Text>
                <div
                  style={{ marginLeft: "10px", cursor: "pointer", fontWeight: 'bold' }}
                  onClick={() => handleRemoveChip(index)}
                >
                  <MdCancel size={20}/>
                </div>
              </div>
            ))}
          </Flex>
        </>
      )}

      <Flex flexWrap="wrap" alignItems="center">
        <Input
          placeholder="Enter your preferences here"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{
            border: "1px solid #aaa",
            outline: "none",
            background: "transparent",
            flexGrow: 1,
            marginRight: "5px",
            marginTop: "4px",
            borderRadius: '20px'
          }}
        />
      </Flex>
    </div>
  );
};

export default ChipInputTextArea;
