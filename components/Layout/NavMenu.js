import {Box, Flex, HStack} from "@chakra-ui/react";
import {HiViewGrid, HiMail} from "react-icons/hi";
import {NavItem} from "./NavItem";

const MobileNavMenu = (props) => {
    const {isOpen} = props;
    return(
        <Flex
        hidden={!isOpen}
        as="nav"
        direction="column"
        bg="blue.600"
        position="fixed"
        height="calc(100vh -4rem)"
        top="16"
        insetX="0"
        zIndex={10}
        w="full">
            <Box px="4">
                <NavItem.Mobile label="home" href="/"/>
                <NavItem.Mobile label="Completed" href="/completed"/>
            </Box>
        </Flex>
    )
}

const DesktopNavMenu = () => (
    <HStack spacing="3" flex="1" display={{base: "none", lg:"flex"}}>
        <NavItem.Desktop icon={<HiViewGrid/>} label="Home" href="/"/>
        <NavItem.Desktop icon={<HiMail/>} label="Completed" href="/completed"/>
    </HStack>
)

export const NavMenu = {
    Desktop: DesktopNavMenu,
    Mobile: MobileNavMenu,
}