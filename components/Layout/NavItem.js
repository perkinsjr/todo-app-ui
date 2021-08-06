import {Box, HStack} from "@chakra-ui/react";
import {useRouter} from "next/router";

const DesktopNavItem = (props) => {
    const router = useRouter();
    const handleClick = (e) => {
        e.preventDefault();
        router.push(href);
    }

    const {icon, label, href} = props;
    return(
        <HStack
        as="a"
        href={href}
        onClick={handleClick}
        spacing="2"
        px="3"
        py="2"
        rounded="md"
        transitions="all 0.2s"
        color="white"
        _hover={{
            bg: "whiteAlpha.200"
        }}>
            {icon && (
                <Box aria-hidden fontSize="md">
                    {icon}
                </Box>
            )}
            <Box fontWeight="semibold">{label}</Box>
        </HStack>
    )
}

const MobileNavItem = (props) => {
    const {label, href} = props;
    const router = useRouter();
    const handleClick = (e) => {
        e.preventDefault();
        router.push(href);
    }
    return(
        <Box 
        as="a"
        display="block"
        href={href}
        onClick={handleClick}
        px="3"
        py="3"
        rounded="md"
        fontWeight="semibold">
            {label}
        </Box>
    )
}

export const NavItem = {
    Desktop: DesktopNavItem,
    Mobile: MobileNavItem
}