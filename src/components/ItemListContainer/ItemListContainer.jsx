import { Flex } from "@chakra-ui/react";
import { IteamCard } from "../index";

export const ItemListContainer = ({ products }) => {
    return (
        <Flex 
        display="flex"
        flexWrap="wrap" 
        justifyContent="center" 
        gap={6} 
        bgGradient="linear(to-r, teal.400, blue.500)"
        p={8} 
        borderRadius="lg"   
        boxShadow="xl"
    
        >
            
            { 
                products.map((product) => {
                    return (

                        <IteamCard key= {product.id} data={product}/>

                    )
                })
            }
        </Flex>
    );
};

