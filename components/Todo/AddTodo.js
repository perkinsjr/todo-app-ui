import {
    Box,
    Button,
    Input,
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionIcon,
    AccordionPanel,
} from "@chakra-ui/react";

export const AddTodo = () => {
    return(
        <Accordion allowToggle mb="8" mt="2">
         <AccordionItem>
         <h2>
         <AccordionButton>
         <Box flex="1" textAlign="left">
             Add Todo
         </Box>
         <AccordionIcon/>
         </AccordionButton>   
        </h2>
        <AccordionPanel pb='4'>
        <form>
        <Input placeholder="Add new title" my={4}/>
        <Input placeholder="Add a new note" my={4}/>
        <Button bg="blue.500" color="white" type="submit">
            Add Todo
        </Button>
        </form>    
        </AccordionPanel>    
         </AccordionItem>   
        </Accordion>
    )
}