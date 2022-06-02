import React from "react";
import { Button, Select } from "@chakra-ui/react";

export default function ZoneSelect({ w, textAlign }) {
  const option = [
    { text: "Overview", value: "" },
    { text: "zone A", value: "A" },
    { text: "zone B", value: "B" },
    { text: "zone C", value: "C" },
    { text: "zone D", value: "D" },
    { text: "SNC Park", value: "SNCPark" },
    { text: "ธนาคารน้ำ", value: "waterBank" },
  ];
  return (
    <>
      <Select
        textAlign={textAlign}
        placeholder="Zone"
        w={w}
        variant="ghost"
        rounded="full"
        fontWeight="semibold"
        _hover={{ bgColor: "gray.100" }}
      >
        {option.map((info, i) => (
          <option value={info.value} key={i}>
            {info.text}
          </option>
        ))}
      </Select>
    </>
  );
}
