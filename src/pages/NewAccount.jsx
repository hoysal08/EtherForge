import React, { useEffect, useState } from 'react';
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
  ButtonGroup,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import {CopyIcon, DownloadIcon, RepeatIcon} from '@chakra-ui/icons'
import {ethers} from "ethers"
import {saveAs } from "file-saver"
//generate new mnemonic,private key and eth addr

function NewAccount() {

    const [mnemonic,setmnemonic]=useState("")
    const [pvtkey,setpvtkey]=useState("")
    const [address,setaddress]=useState("")
     
    function gennewaccount() {
        const wallet = ethers.Wallet.createRandom()
        setaddress(wallet.address)
        setpvtkey(wallet.signingKey.privateKey)
        setmnemonic(wallet.mnemonic.phrase)
    }

    function ExportFile(){
        let Tobewritten="Mnemonic : "+mnemonic+"\n"+"Private key : "+pvtkey+"\n"+"Address : "+address

        let blob=new Blob([Tobewritten],{type:"text/plain;charset=utf-8"});
        saveAs(blob,"PrivatKey.txt")
    }
    
    useEffect(()=>{
       gennewaccount();
    },[]);

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
                <CopyIcon onClick={() =>  navigator.clipboard.writeText(mnemonic)} px="4" pb="3" boxSize="14"/>
            </Flex>
            </Box>
            <Box>               
                 <Heading size="xs" textTransform="uppercase" pt="5">Private Key :</Heading>
             <Flex >
                <Text>{pvtkey}</Text>
                <Spacer/>
                <CopyIcon onClick={() =>  navigator.clipboard.writeText(pvtkey)} px="4" pb="3" boxSize="14"/>
            </Flex>
            </Box>
            <Box>               
                 <Heading size="xs" textTransform="uppercase" pt="5">ETH address :</Heading>
             <Flex >
                <Text>{address}</Text>
                <Spacer/>
                <CopyIcon onClick={() =>  navigator.clipboard.writeText(address)} px="4" pb="3"  boxSize="14"/>
            </Flex>
            </Box>
        </Stack>
    </CardBody>
    </Card>
    <Flex >
        <ButtonGroup size="lg" gap="10" variant="outline" colorScheme="black" pt={10}>
            <Button onClick={()=>ExportFile()} rightIcon={<DownloadIcon/>} >
                 Download
            </Button>
            <Button rightIcon={<RepeatIcon/>} onClick={()=>gennewaccount()}>
                Generate new
            </Button>
        </ButtonGroup>
    </Flex>
     </VStack>
        </Grid>      
      </Box>
    </ChakraProvider>
  );
}

export default NewAccount;
