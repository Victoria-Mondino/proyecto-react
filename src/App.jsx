
import { ChakraProvider} from "@chakra-ui/react";
import { Layout } from "./layouts";
import  { Home } from "./pages/Home";




function App() {

  const loading = false;



  return (

    <ChakraProvider>

      <Layout>

          <Home />
      </Layout>
      
      

    </ChakraProvider>

  );

}

export default App;

