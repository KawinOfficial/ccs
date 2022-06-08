import React, { useState } from "react";
import {
  Text,
  Grid,
  GridItem,
  Box,
  Input,
  Textarea,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import DatePicker from "react-datepicker";

const textInput = [
  { thai: "รหัสทะเบียน", eng: "Tree Code" },
  { thai: "ชื่อต้นไม้", eng: "Tree Name" },
  { thai: "ชื่อวิทยาศาสตร์", eng: "Scientific Name" },
  { thai: "จำนวนที่ปลูก", eng: "Planted Number" },
];

const detailInput = [
  { thai: "GPS (Latitude)", eng: "GPS (Longitude)" },
  { thai: "วันที่ปลูก", eng: "Plant Date" },
  { thai: "อายุ (ปี)", eng: "Tree Age (year.)" },
  {
    thai: "คาร์บอนเครดิต/วัน (กก.คาร์บอน)",
    eng: "Carbon Credit/Day (KgCarbon)",
  },
];

const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
  <FormControl variant="floating" ref={ref}>
    <Input placeholder=" " onClick={onClick} value={value} readOnly />
    <FormLabel fontWeight="normal">วันที่ปลูก</FormLabel>
  </FormControl>
));

export default function TreeInformation() {
  const [startDate, setStartDate] = useState();
  const [plantNum, setPlantNum] = useState(Array(2).fill(0));

  const handleShowInput = (text) => {
    return text == "Tree Name"
      ? true
      : text == "Scientific Name"
      ? true
      : text == "GPS (Longitude)"
      ? true
      : false;
  };

  return (
    <>
      <Grid templateColumns="repeat(2,1fr)" gap={2}>
        {textInput.map((info, i) => (
          <React.Fragment key={i}>
            <GridItem my={1}>
              <FormControl variant="floating">
                <Input placeholder=" " type={i != 3 ? "text" : "number"} />
                <FormLabel fontWeight="normal">{info.thai}</FormLabel>
              </FormControl>
            </GridItem>

            <GridItem my={1}>
              {handleShowInput(info.eng) ? (
                <FormControl variant="floating">
                  <Input placeholder=" " />
                  <FormLabel fontWeight="normal">{info.eng}</FormLabel>
                </FormControl>
              ) : (
                <Input placeholder={info.eng} readOnly />
              )}
            </GridItem>
          </React.Fragment>
        ))}

        {detailInput.map((info, j) => (
          <React.Fragment key={info.eng}>
            <GridItem my={1}>
              {j != 1 ? (
                <FormControl variant="floating">
                  <Input placeholder=" " />
                  <FormLabel fontWeight="normal">{info.thai}</FormLabel>
                </FormControl>
              ) : (
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  customInput={<CustomInput />}
                />
              )}
            </GridItem>
            <GridItem my={1}>
              {handleShowInput(info.eng) ? (
                <FormControl variant="floating">
                  <Input placeholder=" " />
                  <FormLabel fontWeight="normal">{info.eng}</FormLabel>
                </FormControl>
              ) : (
                <Input placeholder={info.eng} readOnly />
              )}
            </GridItem>
          </React.Fragment>
        ))}

        <GridItem my={1} colSpan={2}>
          <FormControl variant="floating">
            <Textarea placeholder=" " rows={5} />
            <FormLabel fontWeight="normal">
              ข้อมูลอื่นๆ (Other information)
            </FormLabel>
          </FormControl>
        </GridItem>
      </Grid>
    </>
  );
}
