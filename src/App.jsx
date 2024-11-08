import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { ChakraProvider} from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";


function App() {

  const loading = false;



  return (

    <ChakraProvider>
      <NavBar />
      <ItemListContainer greeting={"Mi primer proyecto de React"} />

    </ChakraProvider>

  );

}

export default App;

