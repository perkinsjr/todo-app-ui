import {Box} from "@chakra-ui/react";

export const CheckboxBox = (props) =>(
    <Box
    cursor="pointer"
    transition="all 0.2s"
    _focus={{
        shadow: "outline"
    }}
    _checked={{
        bg: "gray.50",
        borderColor: "blue.500",
    }}
    {...props}/>
)