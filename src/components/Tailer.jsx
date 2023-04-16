import { Box,Text } from '@chakra-ui/react'
import React from 'react'

function Tailer() {
  return (
    <Box >
        <Text as='em' fontSize={['3xs','xs']} noOfLines={[2,1]} align="center" px={[10,2]} py={[3,2]}>
            We Don't store any data / account details generated on the site. You can even generate new accounts after disconnecting from the internet aswell.
        </Text>
    </Box>
  )
}

export default Tailer

//position={[null,"fixed"]} bottom={[null,"0"]} py={[null,"3"]} pl={[null,"350"]}