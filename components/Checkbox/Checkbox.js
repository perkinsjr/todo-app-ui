import {Box, HStack, Text, useCheckbox} from "@chakra-ui/react";
import {MdCheckBox, MdCheckBoxOutlineBlank} from "react-icons/md";
import {CheckboxBox} from "./CheckboxBox";
import {DeleteTodo} from "../Todo/DeleteTodo";

export const ButtonCheckbox = (props) =>{
    const {title, note, value, ...rest} = props;
    const {getCheckboxProps, getInputProps, getLabelProps, state} = useCheckbox(rest);
    return(
        <HStack spacing="4" borderWidth="2px" px="4" py="3" borderRadius="md">
            <label {...getLabelProps()}>
                <input {...getInputProps()} aria-labelledby={value}/>
                <CheckboxBox {...getCheckboxProps()} id={value}>
                    <Box data-checked={state.isChecked ? "" : undefined}
                    fontSize="2xl"
                    _checked= {{
                        color: "blue.500"
                    }}
                    color="gray.300">
                        {state.isChecked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
                    </Box>
                </CheckboxBox>
                </label>
                <Box flex="1" pl={2}>
                  <Text pl={4} fontWeight="bold">
                      {title}</Text>      
                <Text pl={4} fontSize="sm">
                      {note}</Text>
                </Box>
            <DeleteTodo id={value}/>
        </HStack>
    )
}