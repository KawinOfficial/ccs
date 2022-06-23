import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Divider,
  Icon,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";
import { FaEdit } from "react-icons/fa";
import tree from "../img/tree.jpg";
import TreeInformation from "./TreeInformation";

export default function TreeModal({ isOpen, onClose }) {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size="6xl"
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text>รายละเอียดต้นไม้</Text>
            <Text fontSize="sm">Tree Information</Text>
            <Divider border="1px" mt={3} />
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody textAlign="center">
            <Grid templateColumns="repeat(3,1fr)" gap={4}>
              <GridItem>
                <Image
                  srcSet={tree}
                  fallbackSrc="https://rct-dev.com/iccs/assets/tree.71f7f4d8.jpg"
                  w="100%"
                  rounded="xl"
                  shadow="md"
                />
              </GridItem>

              <GridItem colSpan={2} w="100%">
                <TreeInformation />
              </GridItem>
            </Grid>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="yellow"
              fontWeight="bold"
              rounded="full"
              size="sm"
              disabled={window.location.pathname == "/snc-layout"}
            >
              <Icon as={FaEdit} mr={1} />
              แก้ไขข้อมูล
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
