import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Box,Button,Text } from '@chakra-ui/react'
import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
function Tailer() {
  return (
    <Box >
        <Text as='em' fontSize={['3xs','xs']} noOfLines={[2,1]} align="center" px={[10,2]} py={[3,2]}>
            We Don't store any data / account details generated on the site. You can even generate new accounts after disconnecting from the internet aswell.
        </Text>
        <a href="https://github.com/hoysal08/etherforge" target='_blank' >

        <Button colorScheme='none' leftIcon={<FaGithub/>}>
        <Text  as='b' fontSize={['3xs','xs']} noOfLines={[2,1]} align="center" px={[1,2]} py={[1,2]}>
          Hoysal08/EtherForge <ExternalLinkIcon mx='2px' />
         </Text>
        </Button>
        </a>
        
    </Box>
  )
}

export default Tailer

//position={[null,"fixed"]} bottom={[null,"0"]} py={[null,"3"]} pl={[null,"350"]}