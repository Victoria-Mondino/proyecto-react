import { Flex } from "@chakra-ui/react"



export const Layout = ({children}) => {
    return (
        <Flex flexDirection={"column"}>

                {children}

        </Flex>
    )
}
