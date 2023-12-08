import styled from 'styled-components'


const LoginContainer = styled.div`

    background-color: rgb(220, 218, 218);
    width: 700px;
    text-align: center;
    margin: auto; 
    padding: 100px;
    border-radius: 20px;
`

const TextoH1 = styled.h1`
    color: white;
    margin-bottom: 50px;
`

const TextoP = styled.p`
    color: white;
    margin-bottom: 50px;
`

const LoginInput = styled.input`

    border-radius: 20px;
    border-color: rgb(0, 153, 255);
    background-color: rgb(0, 174, 255);
    font-weight: bolder;
    color: white;
    margin: 10px;
    padding: 5px;
    width: 300px;

`
const LoginButton = styled.input`

    width: 400px;
    margin: 15px;
    border-radius: 20px;
    background-color: rgb(0, 153, 255);
    color: white;
    border-color: rgb(0, 153, 255);

`

const ContainerHyperLink = styled.a`

    margin: 10px;

`


export const LoginCard = () => {
    return(
        <LoginContainer>
            <form action="" method="get">
            
                <TextoH1>Ja é nosso cliente?</TextoH1>
                <TextoP>Faça seu login</TextoP>
                <LoginInput id='emailInput' type='email' placeholder='Endereço de email' />
                <LoginInput id='passwordInput' type='password' placeholder='Senha' />
                <div>
                    <LoginButton type='submit' value='ENTRAR' />
                </div>
                <div>
                    <ContainerHyperLink href="#">Esqueci minha senha</ContainerHyperLink>
                    <ContainerHyperLink href="#">Criar minha conta</ContainerHyperLink>
                </div>
                
            
            </form>
        </LoginContainer>
         
    )
}