import { Flex } from "@chakra-ui/react"

import { NavBar } from "../components"
import Footer from "../components/Footer/Footer"

export const Layout = ({children}) => {
    return (
        <Flex flexDirection={"column"}>

            <NavBar />

                {children}

            
            <Footer />


        </Flex>
    )
}
