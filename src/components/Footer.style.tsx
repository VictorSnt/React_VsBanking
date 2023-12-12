import styled from 'styled-components'


const FooterContainer = styled.div`

    background: linear-gradient(to right, rgb(138, 43, 226), rgb(0, 153, 255));
    color: white;
    width: auto;
    height: 50px;
    text-align: center;
   
    

`
const SocialContainer = styled.div`
    width: 300px;
    margin: auto;

`

const SocialHyperLink = styled.a`

    /* background: linear-gradient(to right, rgb(138, 43, 226), rgb(0, 153, 255)); */
    -webkit-background-clip: text;
    color: transparent;
    margin: 10px;

`

export const Footer = () => {
    return(

        <FooterContainer>

            <SocialContainer>

                <SocialHyperLink className='social'  href="#">Instagran</SocialHyperLink>
                <SocialHyperLink className='social' href="#">Facebook</SocialHyperLink>
                <SocialHyperLink className='social' href="#">Twitter</SocialHyperLink>
                
            </SocialContainer>
            
        </FooterContainer>
    )
}