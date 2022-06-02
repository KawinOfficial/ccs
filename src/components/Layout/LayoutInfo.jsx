import React from "react";
import { Text, Divider, Box, Grid, GridItem, Input } from "@chakra-ui/react";

const DividerGrid = () => (
  <GridItem colSpan={5} my={3} border="1px" borderColor="gray.200">
    <Divider />
  </GridItem>
);

export default function LayoutInfo() {
  const infoOption = [
    { text: "พื้นที่ทั้งหมด", unit: "ตร.ม.", value: "XXX,XXX.XX" },
    { text: "พื้นที่ต้นไม้โดยประมาณ", unit: "ตร.ม.", value: "XX,XXX.XX" },
    { text: "อัตราส่วน", unit: "%", value: "XX.XX" },
  ];
  const gridOption = [
    { text: "ขนาดพื้นที่", unit: "ตร.ม.", value: "5.00" },
    { text: "จำนวนต้นไม้", unit: "ต้น", value: "XX" },
  ];

  return (
    <>
      <Box textAlign="center">
        <Text fontSize="xl" fontWeight="semibold">
          Plant Layout
        </Text>

        {/* Area */}
        <Grid templateColumns="repeat(5,1fr)" mt={2} alignItems="center">
          {infoOption.map((info) => (
            <React.Fragment key={info.text}>
              <GridItem colSpan={2} textAlign="left">
                <Text>{info.text}</Text>
              </GridItem>
              <GridItem colSpan={2} textAlign="end" fontWeight="semibold">
                <Text>{info.value}</Text>
              </GridItem>
              <GridItem>
                <Text textAlign="left" pl={7}>
                  {info.unit}
                </Text>
              </GridItem>
            </React.Fragment>
          ))}

          <DividerGrid />

          {/* Grid */}
          <GridItem rowSpan={2} fontWeight="bold" fontSize="4xl" color="green">
            G3
          </GridItem>
          {gridOption.map((info) => (
            <React.Fragment key={info.text}>
              <GridItem colSpan={2} textAlign="left">
                <Text>{info.text}</Text>
              </GridItem>
              <GridItem textAlign="end" fontWeight="semibold" letterSpacing={1}>
                <Text>{info.value}</Text>
              </GridItem>
              <GridItem>
                <Text textAlign="left" pl={7}>
                  {info.unit}
                </Text>
              </GridItem>
            </React.Fragment>
          ))}

          <DividerGrid />

          <GridItem colSpan={2}>
            <Text>
              MtCO<sub>2</sub>
            </Text>
          </GridItem>
          <GridItem />
          <GridItem colSpan={2}>
            <Text>USD</Text>
          </GridItem>

          <GridItem colSpan={2}>
            <Input variant="filled" />
          </GridItem>
          <GridItem>to</GridItem>
          <GridItem colSpan={2}>
            <Input variant="filled" />
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}
