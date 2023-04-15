import React from 'react'
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Box, Grid ,Image, Flex} from '@chakra-ui/react';

function Header() {
  return (
    <Grid height={90}  >
        <Flex justifyContent="space-between">
        <Box p="0" size="sm" >
        <Image mx="5" my="2" boxSize="80px" src={process.env.PUBLIC_URL+'logo.png'}/>
        </Box>
       <ColorModeSwitcher justifySelf="flex-end" />
        </Flex>
    </Grid>
  )
}

export default Header