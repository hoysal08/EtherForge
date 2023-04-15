import React from 'react'
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Box, Grid ,Image, Stack} from '@chakra-ui/react';
import logo from "../logo.png"
function Header() {
  return (
    <Grid>
        <Stack direction="row" justifyContent="space-between">
        <Box p="0" size="xs">
        <Image p="5" size="sm" width="8%" src={logo}/>
        </Box>
       <ColorModeSwitcher justifySelf="flex-end" />
        </Stack>
        
    </Grid>
  )
}

export default Header