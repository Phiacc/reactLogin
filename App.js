import { Input } from "./Input";
import { Text } from "./text";
import { Button } from "./button";
import { Flex } from "./Flex";

function App() {
  return (
    <Flex flexDirection="column">
      <Text
        type="h1"
        color="#00000"
        padding="5px"
      >
       Log in to your account
      </Text>
      <Text type="p" fontSize="16px">
        Don't have an account  
       <Text type="span" color="purple" fontSize="10px">
        Get Started</Text>
      </Text> 
      <Flex 
      flexDirection="column"
      width="14rem"
      fontSize="12px"
      margin="0 2rem" 
       >
      <Input labelTxt="Email:" type="email"/> 
      <Input labelTxt="Password:"  type="password"/> 
      <Button onClick>Login</Button>
      </Flex>
    
  </Flex>
  );
}

export default App;