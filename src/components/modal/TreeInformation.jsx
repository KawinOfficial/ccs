import React, { useState } from "react";
import { Text, Grid, GridItem, Box, Input, Textarea } from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import addDays from "date-fns/addDays";

const textInput = [
  { thai: "รหัสทะเบียน", eng: "Tree Code" },
  { thai: "ชื่อต้นไม้", eng: "Tree Name" },
  { thai: "ชื่อวิทยาศาสตร์", eng: "Scientific Name" },
  { thai: "วันที่ปลูก", eng: "Plant Date" },
  { thai: "อายุ (ปี)", eng: "Tree Age (year.)" },
  {
    thai: "คาร์บอนเครดิต/วัน (กก.คาร์บอน)",
    eng: "Carbon Credit/Day (KgCarbon)",
  },
  { thai: "ตำแหน่งปลูก", eng: "Plant Location" },
  { thai: "ตำแหน่ง GPS", eng: "GPS Coordinates" },
  { thai: "ข้อมูลอื่นๆ", eng: "Other information" },
];

const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
  <Input onClick={onClick} ref={ref} value={value} readOnly variant="filled" />
));

export default function TreeInformation() {
  const [startDate, setStartDate] = useState();
  return (
    <>
      <Grid templateColumns="repeat(3,1fr)">
        {textInput.map((info, i) => (
          <React.Fragment key={i}>
            <GridItem my={2} colSpan={i == 8 ? 3 : 1}>
              <Box textAlign="left">
                <Text fontWeight="semibold">{info.thai}</Text>
                <Text fontSize="smaller">{info.eng}</Text>
              </Box>
            </GridItem>

            <GridItem
              my={2}
              display="flex"
              alignItems="center"
              justifyContent="center"
              colSpan={i == 8 ? 3 : 2}
            >
              {info.thai == "ข้อมูลอื่นๆ" ? (
                <Textarea variant="filled" rows={8} />
              ) : info.thai == "วันที่ปลูก" ? (
                <DatePicker
                  dateFormat="dd/MM/yyyy"
                  startDate={startDate}
                  onChange={(date) => {
                    setStartDate(date);
                  }}
                  maxDate={addDays(new Date(), 0)}
                  customInput={<CustomInput />}
                />
              ) : (
                <Input variant="filled" />
              )}
            </GridItem>
          </React.Fragment>
        ))}
      </Grid>
    </>
  );
}
