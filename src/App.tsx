import { ChakraProvider } from "@chakra-ui/react";

import People from "./Components/People.tsx";

function App() {
  return (
    <ChakraProvider>
      <People />
    </ChakraProvider>
  );
}

export default App;
