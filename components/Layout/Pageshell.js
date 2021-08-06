
import {Box, Container,Flex} from "@chakra-ui/react";
import {NavMenu} from "./NavMenu";
import {MobileHamburgerMenu} from "./MobileHamburgerMenu"
import {useMobileMenuState} from "./useMobileMenuState";
export const PageShell = ({children}) => { 
    const {isMenuOpen, toggle} = useMobileMenuState();
    return(
    <Flex direction="column" bg="gray.100" height="100vh">
        <Flex align="center" bg="blue.600" color="white" px="6" minH="16">
            <Flex justify="space-between" align="center" w="full">
            <MobileHamburgerMenu onClick={toggle} isOpen={isMenuOpen}/>
            <NavMenu.Mobile isOpen={isMenuOpen}/>
            <NavMenu.Desktop/>
            </Flex>
        </Flex>
    <Box as="main" py="8" flex="1">
        <Container maxW="7xl">
            <Box bg="white" p="6" rounded="lg" shadow="base">
                {children}
            </Box>
        </Container>
    </Box>
    </Flex>
    )
};