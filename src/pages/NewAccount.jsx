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
import { ethers } from 'ethers';
import {saveAs } from "file-saver"
import { useToast } from '@chakra-ui/react'
//generate new mnemonic,private key and eth addr

function NewAccount() {

    const [mnemonic,setmnemonic]=useState("")
    const [pvtkey,setpvtkey]=useState("")
    const [address,setaddress]=useState("")
     
    async function gennewaccount() {

        const wallet =  ethers.Wallet.createRandom()
        setaddress(wallet.address)
        setpvtkey(wallet.privateKey)
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

    const breakpoints = {
        sm: '30em', // 480px
        xl: '80em', // 1280px
      }
      
      const toast = useToast()
    return (

    <ChakraProvider theme={theme}>
<Box fontSize="xl" minH="10vh" bgGradient={[
    'linear(to-tr, teal.300, yellow.400)',
    'linear(to-t, blue.200, teal.500)',
    'linear(to-b, orange.100, purple.300)',
  ]}>
     <Grid minH="100vh" w="100vw" p={3} >
     <ColorModeSwitcher justifySelf="flex-end"/>
     <VStack  >
        {/* //minH="70vh" minW="70vw" */}
     <Card p={[7,0]} borderRadius="5" variant = "elevated"  size={[null,"lg"]} boxShadow="md" >
     <CardHeader>
            <Heading size="md">New account details</Heading>
    </CardHeader>
    <CardBody>
        <Stack spacing="2" >
            <Box w={[80,"50vw"]}>     
            <Heading size="xs" textTransform="uppercase" pt="5">mnemonic :</Heading>
             <Flex >
                <Text noOfLines={[2,null]} >{mnemonic}</Text>
                <Spacer/>
                <CopyIcon _hover={{cursor:"pointer"}} onClick={() => {navigator.clipboard.writeText(mnemonic); toast({title:"Copied",status:"success",duration:2000,isClosable:true})}} px="4" pb="3" boxSize="14" />
            </Flex>
            </Box>
            <Box w={[80,"50vw"]}>               
                 <Heading size="xs" textTransform="uppercase" pt="5">Private Key :</Heading>
             <Flex >
                <Text noOfLines={[2,null]}>{pvtkey}</Text>
                <Spacer/>
                <CopyIcon _hover={{cursor:"pointer"}} onClick={() =>  {navigator.clipboard.writeText(pvtkey); toast({title:"Copied",status:"success",duration:2000,isClosable:true})}} px="4" pb="3" boxSize="14"/>
            </Flex>
            </Box>
            <Box w={[80,"50vw"]}>               
                 <Heading size="xs" textTransform="uppercase" pt="5">ETH address :</Heading>
             <Flex >
                <Text noOfLines={[2,null]}>{address}</Text>
                <Spacer/>
                <CopyIcon _hover={{cursor:"pointer"}} onClick={() => { navigator.clipboard.writeText(address); toast({title:"Copied",status:"success",duration:2000,isClosable:true})}} px="4" pb="3"  boxSize="14"/>
            </Flex>
            </Box>
        </Stack>
    </CardBody>
    </Card>
    <Flex >
        <ButtonGroup size={["md","lg"]} gap={["5","10"]} variant="outline" colorScheme="black" pt={10}>
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
