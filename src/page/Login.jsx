import React from "react";
import {
  Box,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Image,
  Center,
  Button,
  FormControl,
  FormLabel,
  Checkbox,
  Icon,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import { FaUnlock, FaUserAlt } from "react-icons/fa";
import { BsArrowLeft } from "react-icons/bs";
import logo from "../components/img/logo.png";
import { Leaf } from "../components/lottie";
import { ForgotModal } from "../components/modal";

import { useNavigate } from "react-router-dom";

const font = {
  base: "md",
  md: "lg",
};

export default function Login() {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmit = () => {
    navigate("/export");
  };

  return (
    <>
      <Box className="bg-login" h="100vh" position="relative" pb="40">
        <Center flexDirection="column" position="absolute">
          <Image
            srcSet={logo}
            w={{ base: "30vw", sm: "14vw" }}
            fallbackSrc="https://rct-dev.com/iccs/assets/logo.63ae820a.png"
          />
          <Box
            shadow="lg"
            w={{ base: "80vw", md: "50vw", xl: "30vw" }}
            rounded="3xl"
            bgColor="white"
            px={{ base: "5", md: "12", xl: "16" }}
            textAlign="center"
          >
            <Box display="flex" justifyContent="center" my={5}>
              <Text fontSize={font} fontWeight="bold" color="green">
                iCarbon Credit System
              </Text>
              <Leaf height={30} width={30} />
            </Box>

            <Text fontSize="smaller" mb={2}>
              Sign in to start your session
            </Text>

            {/* Input */}
            <FormControl
              mb={5}
              onKeyPress={({ key }) => {
                if (key === "Enter") {
                  handleSubmit();
                }
              }}
            >
              <FormLabel fontSize={font}>ชื่อผู้ใช้ (Username)</FormLabel>
              <InputGroup>
                <Input
                  id="username"
                  type="text"
                  variant="filled"
                  placeholder="Type your username."
                />
                <InputLeftElement children={<FaUserAlt color="gray" />} />
              </InputGroup>

              <FormLabel fontSize={font} mt={5}>
                รหัสผ่าน (Password)
              </FormLabel>
              <InputGroup mb={8}>
                <Input
                  id="password"
                  type="password"
                  variant="filled"
                  placeholder="Type your password."
                />
                <InputLeftElement children={<FaUnlock color="gray" />} />
              </InputGroup>

              <Button
                variant="ghost"
                rounded="full"
                w="50%"
                onClick={() => navigate("/snc-layout")}
              >
                <Icon as={BsArrowLeft} mr={2} />
                <Text fontWeight="bold" fontSize="sm" color="green">
                  Home Page
                </Text>
              </Button>

              <Button
                w="50%"
                rounded="full"
                colorScheme="gray"
                onClick={() => handleSubmit("")}
              >
                Sign in
              </Button>
            </FormControl>

            <Box textAlign="left" mb={5}>
              <Checkbox mb={3}>
                <Box fontSize={{ base: "x-small", md: "smaller" }}>
                  <Text>จดจำฉัน (Remember Me)</Text>
                </Box>
              </Checkbox>

              {/* Forgot */}
              <Link
                w="100%"
                variant="link"
                fontWeight="semibold"
                onClick={onOpen}
                fontSize={{ base: "x-small", md: "smaller" }}
                color="blue"
              >
                <Text>ลืมรหัสผ่าน (Forgot password?)</Text>
              </Link>
            </Box>
          </Box>
        </Center>
      </Box>

      <ForgotModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}
