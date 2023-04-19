import { ChakraProvider } from "@chakra-ui/react";

import People from "./Components/People.tsx";

function App() {
  return (
    <ChakraProvider>
      <div>teste</div>
      <People />
    </ChakraProvider>
  );
}

export default App;
