import { Box,Text } from '@chakra-ui/react'
import React from 'react'

function Tailer() {
  return (
    <Box position="fixed" bottom="0" py="3" pl="350">
        <Text as='em' fontSize='xs' align="center">
            We Don't store any data / account details generated on the site. You can even generate new accounts after disconnecting from the internet aswell.
        </Text>
    </Box>
  )
}

export default Tailer