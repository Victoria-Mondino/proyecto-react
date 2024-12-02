

import {Flex} from "@chakra-ui/react";

//estilo DEL NAVAR 
import { BsCartCheckFill} from "react-icons/bs"; // Importar el ícono del carrito


// Estilo del navbar
export const CartWidet = () => {
    return (
        <Flex 
            alignItems={"center"} 
            justifyContent={"center"} 
            height={"60vh"}  
            fontSize={"1rem"}
            marginRight={"50px"}
            gap={"9px"}
        >
            <BsCartCheckFill />
            0
        </Flex>
    );
}

