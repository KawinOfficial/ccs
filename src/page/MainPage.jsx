import React, { useState } from "react";
import {
  Grid,
  GridItem,
  Text,
  Box,
  Tabs,
  TabList,
  Tab,
} from "@chakra-ui/react";
import { Graph, OverallChart } from "../components/chart";
import { Map, LayoutInfo, LayoutTable } from "../components/Layout";

export default function FactoryLayout() {
  const [tab, setTab] = useState(true);

  return (
    <>
      <Grid
        templateColumns={{
          base: "repeat(1,1fr)",
          lg: "repeat(3,1fr)",
          xl: "repeat(10,1fr)",
        }}
        gap={2}
      >
        <GridItem colSpan={{ base: 1, xl: 3 }}>
          <Box>
            <Text
              fontSize="xl"
              fontWeight="bold"
              textAlign="center"
              position="absolute"
              w={{ base: "100vw", lg: "30vw" }}
              mt={3}
            >
              ประเภทต้นไม้ (Tree Type)
            </Text>
            <OverallChart />
          </Box>

          <Tabs variant="enclosed" size="sm" isFitted my={2}>
            <TabList>
              <Tab onClick={() => setTab(true)}>ปริมาณต้นไม้สะสม</Tab>
              <Tab onClick={() => setTab(false)}>คาร์บอนเครดิต</Tab>
            </TabList>
          </Tabs>

          {tab ? (
            <Box shadow="md" p={2} rounded="lg">
              <Graph
                color="#B1DE80"
                legendArea="ปริมาณต้นไม้สะสม+(Tree Volume)"
                legendBar="ปริมาณต้นไม้ปลูกใหม่+(New Planted Volume)"
              />
            </Box>
          ) : (
            <Box shadow="md" p={2} rounded="lg">
              <Graph
                color="#63C6FF"
                legendArea="คาร์บอนเครดิตสะสม+(Carbon Credit: MtCO2)"
                legendBar="คาร์บอนเครดิต / ปี+(Carbon Credit / Year)"
              />
            </Box>
          )}
        </GridItem>

        {/* Map */}
        <GridItem colSpan={{ base: 1, lg: 2, xl: 7 }}>
          {/* <Box h="60vh" border="1px" /> */}
          <Map />

          <Grid
            templateColumns={{
              base: "repeat(2,1fr)",
              md: "repeat(3,1fr)",
            }}
            h="30vh"
          >
            {/* Information */}
            <GridItem mt={3} px={2}>
              <LayoutInfo />
            </GridItem>

            {/* Table */}
            <GridItem colSpan={2} mt={4} overflowY="auto">
              <LayoutTable />
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </>
  );
}
