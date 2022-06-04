import React from "react";
import {
  Box,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Checkbox,
  useDisclosure,
  Button,
  Icon,
} from "@chakra-ui/react";
import { Filter } from "../components/button";
import { TreeModal } from "../components/modal";

const tableHead = [
  { thai: "ลำดับที่", eng: "No.", w: "5%", textAlign: "center" },
  { thai: "รหัสต้นไม้", eng: "Tree Code.", w: "10%", textAlign: "center" },
  { thai: "ชื่อต้นไม้", eng: "Tree Name.", w: "", textAlign: "left " },
  { thai: "วันที่ปลูก", eng: "Planting Date.", w: "10%", textAlign: "center" },
  {
    thai: "อายุต้นไม้ (ปี)",
    eng: "Tree Age (Year).",
    w: "10%",
    textAlign: "center",
  },
  {
    thai: "คาร์บอนเครดิต / วัน (กก.คาร์บอน)",
    eng: "Carbon Credit / Day ",
    w: "20%",
    textAlign: "center",
  },
];

export default function Export() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  var date = Math.random() * 31 + "/" + Math.random() * 31;

  return (
    <>
      <Box h="92vh" pb={2} overflowY="auto">
        {/* Filter Nav */}
        <Accordion allowToggle defaultIndex={[0]}>
          <AccordionItem>
            <h2>
              <AccordionButton
                _expanded={{ bgColor: "gray.100" }}
                _hover={{ bgColor: "gray.200" }}
              >
                <Box flex="1" textAlign="left" fontWeight="bold">
                  Filter Table & Export
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <Filter />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        {/* Table */}
        <TableContainer>
          <Table>
            <Thead
              bgGradient="linear(to-r,#9bf8f4,#00ff87)"
              sx={{
                position: "sticky",
                top: "0",
              }}
            >
              <Tr>
                <Th w="2%"></Th>
                {tableHead.map((info, i) => (
                  <Th key={i} w={info.w} textAlign={info.textAlign}>
                    <Text fontSize="sm">{info.thai}</Text>
                    <Text fontSize="smaller">
                      {info.eng}
                      {i == 5 && (
                        <React.Fragment>
                          (KGCO<sub>2</sub>)
                        </React.Fragment>
                      )}
                    </Text>
                  </Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {Array(25)
                .fill(0)
                .map((_, i) => (
                  <Tr
                    key={i}
                    _hover={{ bgColor: "gray.100" }}
                    _active={{ bgColor: "gray.200" }}
                    onClick={onOpen}
                  >
                    <Td>
                      <Checkbox />
                    </Td>
                    <Td isNumeric pr={10}>
                      {i + 1}
                    </Td>
                    <Td textAlign="center">XXXXX</Td>
                    <Td>XXXXXXXXXXXXXXXXXXX</Td>
                    <Td textAlign="center">XX/XX/XXXX</Td>
                    <Td isNumeric pr={20}>
                      {(Math.random() * 99 + 1).toFixed(0)}
                    </Td>
                    <Td textAlign="center">XXXXX</Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>

      <TreeModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}
