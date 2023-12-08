import { Header } from "./Header.style"
import { Footer } from "./Footer/Footer"


export const Layout = ({children}: any) => {
    
    return(

        <> 
        <Header />
        {children}
        <Footer />
        </>
        
    );

}