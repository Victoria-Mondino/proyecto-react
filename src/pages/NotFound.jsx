import React from 'react'
import { Flex, Heading, Text, Button } from '@chakra-ui/react'

export const NotFound = () => {
  return (
    <Flex alignItems={"center"} 
    justifyContent={"center"}
    flexDirection={"column"}
    >
        <Heading> 404 Not Found </Heading>
        <Text>Parece que no encontrammos la pagina solicitada</Text>
        <Button>Volver al Home </Button>

    </Flex>
  )
}
