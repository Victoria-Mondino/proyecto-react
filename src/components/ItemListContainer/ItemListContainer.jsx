import { Flex, Text } from "@chakra-ui/react";

const ItemListContainer = ({ greeting }) => {
    return (
        <Flex 
            alignItems="center" 
            justifyContent="center" 
            height="100vh" 
            bgGradient="linear(to-r, teal.400, blue.500)"
            p={8} 
            borderRadius="lg" 
            boxShadow="xl" 
        >
            <Text
                fontSize="4xl" 
                fontWeight="extrabold" 
                color="white" 
                textTransform="uppercase" 
                letterSpacing="wide" 
                textShadow="2px 2px 4px rgba(0, 0, 0, 0.7)"
                fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" 
            >
                {greeting}
            </Text>
        </Flex>
    );
};

export default ItemListContainer;