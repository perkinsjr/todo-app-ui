import {Box, Heading} from "@chakra-ui/react";
import {Todos} from "../components/Todo/Todos"
import {AddTodo} from "../components/Todo/AddTodo"
export default function Home() {
  return (
    <Box as="section" py="12">
      <Box
      maxW="xl"
      mx="auto"
      width="full"
      px={{
        base: "6",
        md: "8"
      }}
      >
      <Heading size="lg" mb="8" fontWeight="extrabold">
        Things you gotta do!
      </Heading>
      <AddTodo/>
      <Todos/>
      </Box>
      
    </Box>
  
  )
}
