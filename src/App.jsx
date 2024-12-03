
import { ChakraProvider} from "@chakra-ui/react";
import { Layout } from "./layouts";
import { PublicRouter } from "./router";




function App() {

  const loading = false;



  return (

    <ChakraProvider>
      
      <Layout>
          <PublicRouter />
      </Layout>

    </ChakraProvider>

  );

}

export default App;

