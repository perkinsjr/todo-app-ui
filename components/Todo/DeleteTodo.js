import {Box, IconButton} from "@chakra-ui/react";
import {MdDelete} from "react-icons/md";

export const DeleteTodo = (value) => {
    return(
        <Box>
            <IconButton
            variant="outline"
            border="none"
            color="blue.500"
            aria-label="delete"
            fontSize="20px"
            onClick={console.log("deleted")}
            icon={<MdDelete/>}/>
        </Box>
    )
}