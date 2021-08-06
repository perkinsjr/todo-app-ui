import {Stack} from "@chakra-ui/react";
import {Todo} from "./Todo";

export const Todos = () => {
    return(
        <Stack spacing="5" justify="flex-start">
            <Todo/> 
        </Stack>
    )
}