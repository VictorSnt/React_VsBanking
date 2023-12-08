import styled from 'styled-components'


const FooterContainer = styled.div`

    background-color: rgb(43, 43, 43);
    color: white;
    width: auto;
    height: auto;
    text-align: center;
    margin: auto;
    border-radius: 20px;

`
const SocialContainer = styled.div`

    background: linear-gradient(to right, rgb(138, 43, 226), rgb(0, 153, 255));
    border-radius: 10px;
    width: 300px;
    margin: auto;

`

const FooterLogoDiv = styled.div`

    width: 200px;
    height: 30px;
    margin: auto;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

`
const HeaderTitle = styled.h3`
    color: white;
    vertical-align: middle;
    margin: 0;
    padding: 0;
`

const SocialHyperLink = styled.a`

    margin: 10px;

`

export const Footer = () => {
    return(

        <FooterContainer>

            <SocialContainer>

                <FooterLogoDiv>

                    <HeaderTitle>VS_Banking</HeaderTitle>

                </FooterLogoDiv>
            
                <SocialHyperLink className='social'  href="#">Instagran</SocialHyperLink>
                <SocialHyperLink className='social' href="#">Facebook</SocialHyperLink>
                <SocialHyperLink className='social' href="#">Twitter</SocialHyperLink>
            </SocialContainer>
            
        </FooterContainer>
    )
}