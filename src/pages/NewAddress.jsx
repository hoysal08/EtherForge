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
  Input,
  FormErrorMessage,
  FormHelperText,
  FormControl,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { CopyIcon, DownloadIcon, RepeatIcon } from '@chakra-ui/icons';
import { ethers } from 'ethers';
import { saveAs } from 'file-saver';
//generate new mnemonic,private key and eth addr

function NewAddress() {
  const [pvtkey, setpvtkey] = useState('');
  const [address, setaddress] = useState('');
  const [incorrectpvtkey,setincorrectpvtkey] = useState(false);

  
  function checkforvalidpvtkey(){ 
     try{
     let w= new ethers.Wallet(pvtkey)
      setincorrectpvtkey(false)
     }
     catch(e){
      if(pvtkey.length>0){
        setincorrectpvtkey(true)
      }
     }
  }

  function genaddress() {
    setaddress('')
    try{
      const wallet = new ethers.Wallet(pvtkey)
      setaddress(wallet.address);
    }
    catch(e){
      console.log(e)
    }
  }

  function handlepvtkeychange(pvttkey){
      setpvtkey(pvttkey)
  }

  useEffect(()=>{
    checkforvalidpvtkey()
    genaddress()
  },[pvtkey])

  useEffect(()=>{
     if(!incorrectpvtkey && pvtkey.length>0){
      genaddress()
     }
  },[incorrectpvtkey])
  

  function ExportFile() {
    let Tobewritten = 'Private key : ' + pvtkey + '\n' + 'Address : ' + address;

    let blob = new Blob([Tobewritten], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'PrivatKey.txt');
  }

  return (
    <ChakraProvider theme={theme}>
      <Box
        fontSize="xl"
        minH="10vh"
        bgGradient={[
          'linear(to-tr, teal.300, yellow.400)',
          'linear(to-t, blue.200, teal.500)',
          'linear(to-b, orange.100, purple.300)',
        ]}
      >
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack minH="70vh" minW="70vw">
            <Card variant="elevated" size="lg" boxShadow="md">
              <CardHeader>
                <Heading size="md">New account details</Heading>
              </CardHeader>
              <CardBody pt={0}>
                <Stack spacing="0">
                  <Box>
                    <Heading size="xs" textTransform="uppercase" py="5">
                      Private key{' '}
                    </Heading>
                    <Flex>
                      <FormControl isInvalid={incorrectpvtkey}>
                      <Input variant="filled" placeholder="" w="xl" onChange={(e)=>{handlepvtkeychange(e.target.value)}} value={pvtkey} />{' '}
                      {(!incorrectpvtkey)?( (pvtkey.length!=0) && <FormHelperText pl="2">Your Private key is secure, and has not left your browser</FormHelperText>):( (pvtkey.length!=0) && <FormErrorMessage>Incorrect Private Key!</FormErrorMessage> )}
                      </FormControl>
                      <Spacer />
                      <CopyIcon
                        onClick={() => navigator.clipboard.writeText(pvtkey)}
                        px="4"
                        pb="3"
                        boxSize="14"
                      />
                    </Flex>
                  </Box>
                  <Box>
                    <Heading size="xs" textTransform="uppercase" py="5">
                      {' '}
                      Address
                    </Heading>
                    <Flex>
                      <Input variant="filled" placeholder="0x" value={address} readOnly={true}/> <Spacer />
                      <CopyIcon
                        onClick={() => navigator.clipboard.writeText(address)}
                        px="4"
                        pb="3"
                        boxSize="14"
                      />
                    </Flex>
                  </Box>
                </Stack>
              </CardBody>
            </Card>
            <Flex>
              <ButtonGroup
                size="lg"
                gap="10"
                variant="outline"
                colorScheme="black"
                pt={10}
              >
                <Button
                  onClick={() => ExportFile()}
                  rightIcon={<DownloadIcon />}
                >
                  Download
                </Button>
              </ButtonGroup>
            </Flex>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default NewAddress;


//4c2dda1f1a7750b4978a55145e8955847e4d0cc42e191765eac21852c117fd7b