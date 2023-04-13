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
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { useNavigate } from 'react-router-dom';

function Home() {
  
  const navigate=useNavigate();

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" bgGradient={[
    'linear(to-tr, teal.300, yellow.400)',
    'linear(to-t, blue.200, teal.500)',
    'linear(to-b, orange.100, purple.300)',
  ]} >
        <Grid minH="100vh" p={3} >
          <ColorModeSwitcher justifySelf="flex-end" />
          <HStack spacing={20} justify="center" mb={200} direction="row">
            <Card variant = "elevated"   maxW="sm"  size="md"  boxShadow="dark-lg" onClick={()=>{navigate("/newaccount")}}>
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

            <Card maxW="sm" size="md"  variant="elevated" boxShadow="dark-lg" onClick={()=>{navigate("/newAddress")}}>
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

            <Card maxW="sm" size="md"  variant="elevated" boxShadow="dark-lg" onClick={()=>{navigate("/newaccountwmnemonic")}}>
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
          </HStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default Home;
