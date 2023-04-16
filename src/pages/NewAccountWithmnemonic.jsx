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
  NumberInputStepper,
  NumberInput,
  NumberInputField,
  NumberDecrementStepper,
  NumberIncrementStepper,
  Select,
  useToast
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { CopyIcon, DownloadIcon, RepeatIcon } from '@chakra-ui/icons';
import { ethers } from 'ethers';
import { saveAs } from 'file-saver';
import Header from '../components/Header';


function NewAccountWithmnemonic() {

  const [mnemonic,setmnenoic]=useState('')
  const [pvtkey, setpvtkey] = useState('');
  const [address, setaddress] = useState('');
  const[accountnumber,setaccountnumber]=useState(0)
  const[inccorectmnemonic,setinccoremnemonic] = useState(false)


  function handlemnenoicchange(newmnemonic){
    setaddress('')
    setpvtkey('')
      setmnenoic(newmnemonic) 
  }
  const toast=useToast()

  function genaddress(){

    try{
      if(!inccorectmnemonic && accountnumber>=0 && mnemonic.length>0){
   let path=`m/44'/60'/${accountnumber}'/0/0`
   let w=ethers.Wallet.fromMnemonic(mnemonic,path)
   setpvtkey(w.privateKey)
   setaddress(w.address)
    }
    
  }
  catch(e){
    console.error(e)
  }
  }
  function isvalidmnenoic(){
    if(mnemonic.length!=0 && mnemonic.length!=undefined){
    setinccoremnemonic(!ethers.utils.isValidMnemonic(mnemonic))
  }
}

  useEffect(()=>{
    isvalidmnenoic()
  },[mnemonic])

  useEffect(()=>{
    genaddress()
  },[accountnumber,mnemonic,inccorectmnemonic])
  
  function ExportFile() {
    let Tobewritten="Mnemonic : "+mnemonic+"\n"+ "Account number : "+accountnumber+"\n"+"Private key : "+pvtkey+"\n"+"Address : "+address

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
          <VStack >
            //minH="70vh" minW="70vw"
            <Card variant="elevated" size="lg" boxShadow="md">
              <CardHeader>
                <Heading size="md">New account details</Heading>
              </CardHeader>
              <CardBody pt={0}>
                <Stack spacing="0">
                  <Box w={[80,"60vw"]}>
                    <Heading size="xs" textTransform="uppercase" py="5">
                      Mnemonic{' '}
                    </Heading>
                    <Flex  >
                      <FormControl  isInvalid={inccorectmnemonic}>
                        <Input
                          variant="filled"
                          placeholder=""
                          w={["2xs","2xl"]}
                          onChange={(e)=>handlemnenoicchange(e.target.value)}
                          value={mnemonic}
                        />
                        {!inccorectmnemonic
                          ? mnemonic.length != 0 && (
                              <FormHelperText pl="2">
                                Your Private key/Mnemonic is secure, and has not left
                                your browser
                              </FormHelperText>
                            )
                          : mnemonic.length != 0 && (
                              <FormErrorMessage>
                                Incorrect Mnemonic!
                              </FormErrorMessage>
                            )}
                      </FormControl>
      
                      <CopyIcon
                      _hover={{cursor:"pointer"}}
                        onClick={() => {navigator.clipboard.writeText(pvtkey); toast({title:"Copied",status:"success",duration:2000,isClosable:true})}}
                        px="4"
                        pb="3"
                        boxSize="14"
                      />
                    </Flex> 
                    <Heading size="xs" textTransform="uppercase" py="5">
                    Account Number
                    </Heading>
                    <NumberInput variant="filled" maxW="xs"placeholder='Account number' onChange={(e)=>setaccountnumber(parseInt(e))} value={accountnumber} min={0} max={10}>
                        <NumberInputField />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                  </Box>
                  <Box w={[80,"60vw"]}>
                    <Heading size="xs" textTransform="uppercase" py="5">
                   
                      Private Key
                    </Heading>
                    <Flex>
                      <Input
                        variant="filled"
                        placeholder=""
                        value={pvtkey}
                        readOnly={true}
                      />{' '}
                      <Spacer />
                      <CopyIcon
                      _hover={{cursor:"pointer"}}
                        onClick={() => {navigator.clipboard.writeText(address); toast({title:"Copied",status:"success",duration:2000,isClosable:true})}}
                        px="4"
                        pb="3"
                        boxSize="14"
                      />
                    </Flex>
                  </Box>
                  <Box w={[80,"60vw"]}>
                    <Heading size="xs" textTransform="uppercase" py="5">
                      Address
                    </Heading>
                    <Flex>
                      <Input
                        variant="filled"
                        placeholder="0x"
                        value={address}
                        readOnly={true}
                      />{' '}
                      <Spacer />
                      <CopyIcon
                      _hover={{cursor:"pointer"}}
                        onClick={() => {navigator.clipboard.writeText(address); toast({title:"Copied",status:"success",duration:2000,isClosable:true})}}
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

export default NewAccountWithmnemonic;

//4c2dda1f1a7750b4978a55145e8955847e4d0cc42e191765eac21852c117fd7b
