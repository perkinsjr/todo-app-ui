import {useBoolean, useBreakpointValue} from "@chakra-ui/react";
import {useEffect} from "react";

export const useMobileMenuState = () => {
    const [isMenuOpen, actions] = useBoolean();
    const isMobileBreakpoint = useBreakpointValue({
        base: true,
        lg: false,
    });
    useEffect(() => {
        if(isMobileBreakpoint == false){
            actions.off();
        }
    }, [isMobileBreakpoint, actions]);
    return{
        isMenuOpen,
        ...actions,
    };
};