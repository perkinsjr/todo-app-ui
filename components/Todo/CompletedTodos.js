import {
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    Box,
    Heading
} from "@chakra-ui/react";

export const CompletedTodos = () => {
    return(
        <Box as="section" py="12">
         <Box 
            maxW={{
                base: "xl",
                md: "7xl"
            }}   
            mx="auto"
            px={{
                base: "6",
                md: "8",
            }}>
            <Box overflowX="auto">
                <Heading size="lg" mb="6">
                    Thing you have done!
                </Heading>
                <Table my="8" borderWidth="1px" fontSize="sm">
                    <Thead bg="gray.50">
                        <Tr>
                            <Th whiteSpace="nowrap" scope="col">
                                Title
                            </Th>
                            <Th whiteSpace="nowrap" scope="col">
                                Note
                            </Th>
                            <Th whiteSpace="nowrap" scope="col">
                                Completed At
                            </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr key="id">
                            <Td>{"This course"}</Td>
                            <Td>{"You've finally finished"}</Td>
                            <Td>{"08/06/2021"}</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </Box>
            </Box>
        </Box>
    )
}