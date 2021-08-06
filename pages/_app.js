import {ChakraProvider} from "@chakra-ui/react";
import {PageShell} from "../components/Layout/Pageshell"
function MyApp({ Component, pageProps }) {
 return(
   <ChakraProvider>
     <PageShell>
     <Component {...pageProps}/>
     </PageShell>
   </ChakraProvider>
 )
}

export default MyApp
