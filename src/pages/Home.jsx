import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  HStack,
  Code,
  Grid,
  theme,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Stack,
  Flex,
  Spacer,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Tailer from '../components/Tailer';

function Home() {
  
  const navigate=useNavigate();

  const breakpoints = {
    sm: '30em', // 480px
    xl: '80em', // 1280px
  }

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" bgGradient={[
    'linear(to-tr, teal.300, yellow.400)',
    'linear(to-t, blue.200, teal.500)',
    'linear(to-b, orange.100, purple.300)',
  ]} >
        <Grid minH={["95vh","90vh"]}  minW="95vw" >
        <Header py="0" my="0"/>
          {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
          <Flex pt={["10",0]} justify="center" px={[0,20]} align="center" pb={[null,200]}  direction={["column","row"]} >
            <Card variant = "elevated"   maxW="sm"  size="md" _hover={{cursor:"pointer"}}  boxShadow="dark-lg" onClick={()=>{navigate("/newaccount")}}>
              <CardHeader>
                <Heading size="md">Generate new account</Heading>
              </CardHeader>
              <CardBody>
                <Stack spacing="4">
                  <Box>
                    <Heading size="xs" textTransform="uppercase" pt="5" >
                      Summary
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      Generate a new set of mnemonic , private key and ETH
                      Address. In a truly secure and random way
                    </Text>
                  </Box>
                </Stack>
              </CardBody>
            </Card>
            <Spacer/>
            
            <Card maxW="sm" size="md" _hover={{cursor:"pointer"}}  variant="elevated" boxShadow="dark-lg" onClick={()=>{navigate("/newAddress")}}>
              <CardHeader>
                <Heading size="md">
                  Generate address for existing private key
                </Heading>
              </CardHeader>
              <CardBody>
                <Stack spacing="4">
                  <Box>
                    <Heading size="xs" textTransform="uppercase" >
                      Summary
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      Generate the public key for your existing private key,
                      that's shareable with others.
                    </Text>
                  </Box>
                </Stack>
              </CardBody>
            </Card>
            <Spacer/>

            <Card maxW="sm" size="md" _hover={{cursor:"pointer"}} variant="elevated" boxShadow="dark-lg" onClick={()=>{navigate("/newaccountwmnemonic")}}>
              <CardHeader>
                <Heading size="md">
                  Generate new account with existing mnemonic
                </Heading>
              </CardHeader>
              <CardBody>
                <Stack spacing="4">
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Summary
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      Generate a new unique account from an existing mnemonic
                    </Text>
                  </Box>
                </Stack>
              </CardBody>
            </Card>
            <Spacer/>
          </Flex>
        </Grid>
        <Tailer/>
      </Box>
    </ChakraProvider>
  );
}

export default Home;
