import React, { useState } from 'react';
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
  Button,
  VStack,
  Flex,
  Spacer,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import {CopyIcon} from '@chakra-ui/icons'
import {validateMnemonic,generateMnemonic,mnemonicToSeed} from "bip39"

//generate new mnemonic,private key and eth addr

function NewAccount() {

    const [mnemonic,setmnemonic]=useState("indoor dish desk flag debris potato excuse depart ticket judge file exit")
    const [pvtkey,setpvtkey]=useState("")
    const [address,setaddress]=useState("")

 
    return (

    <ChakraProvider theme={theme}>
<Box fontSize="xl" minH="10vh" bgGradient={[
    'linear(to-tr, teal.300, yellow.400)',
    'linear(to-t, blue.200, teal.500)',
    'linear(to-b, orange.100, purple.300)',
  ]}>
     <Grid minH="100vh" p={3} >
     <ColorModeSwitcher justifySelf="flex-end"/>
     <VStack minH="70vh" minW="70vw" >
     <Card variant = "elevated"  size="lg"  boxShadow="md">
     <CardHeader>
            <Heading size="md">New account details</Heading>
    </CardHeader>
    <CardBody>
        <Stack spacing="2">
            <Box>                <Heading size="xs" textTransform="uppercase" pt="5">mnemonic :</Heading>
             <Flex >
                <Text>{mnemonic}</Text>
                <Spacer/>
                <CopyIcon px="4" pb="3" boxSize="14"/>
            </Flex>
            </Box>
            <Box>               
                 <Heading size="xs" textTransform="uppercase" pt="5">Private Key :</Heading>
             <Flex >
                <Text>{pvtkey}</Text>
                <Spacer/>
                <CopyIcon px="4" pb="3" boxSize="14"/>
            </Flex>
            </Box>
            <Box>               
                 <Heading size="xs" textTransform="uppercase" pt="5">ETH address :</Heading>
             <Flex >
                <Text>{address}</Text>
                <Spacer/>
                <CopyIcon px="4" pb="3" justifySelf="flex-end" alignItems="flex-end" boxSize="14"/>
            </Flex>
            </Box>
        </Stack>
    </CardBody>
    </Card>
     </VStack>
        </Grid>      
      </Box>
    </ChakraProvider>
  );
}

export default NewAccount;
