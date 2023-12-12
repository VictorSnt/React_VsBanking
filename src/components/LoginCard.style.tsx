import styled, {keyframes} from 'styled-components'

const LoginContainer = styled.div`
    background-color: rgb(0, 0, 0);
    width: 700px;
    margin: auto; 
    padding: 100px;
    border-radius: 20px;
    min-height: 550px;
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;
    text-align: center; /* Adicionado para centralizar o conteúdo horizontalmente */
`;


const TextoH1 = styled.h1`
    color: white;
    font-size: 70px;
`

const TextoP = styled.p`
    color: white;
    margin-bottom: 50px;
`

const LoginInput = styled.input`
    border: none;
    border-radius: 20px;
    background: linear-gradient(to right, rgb(138, 43, 226), rgb(0, 153, 255));
    font-weight: bold;
    color: white;
    margin: 15px 0;
    padding: 15px;
    width: 100%;
    box-sizing: border-box;
    display: block;
    transition: background 0.3s ease-in-out;

    &:hover,
    &:focus {
        background: linear-gradient(to right, rgb(106, 27, 154), rgb(0, 122, 204));
        outline: none;
    }
`;


const borderAnimation = keyframes`
    0% {
        border-color: rgb(106, 27, 154);
    }
    50% {
        border-color: rgb(0, 122, 204);
    }
    100% {
        border-color: rgb(106, 27, 154);
    }
`;

const LoginButton = styled.input`
    font-weight: bold;
    width: 150px;
    margin: 15px auto;
    color: white;
    background: black;
    padding: 12px;
    border: 2px solid rgb(106, 27, 154);
    border-radius: 2px;
    cursor: pointer;
    transition: background 0.3s ease-in-out;

    animation: ${borderAnimation} 3s infinite; /* Aplicando a animação */

    &:hover,
    &:focus {
        background: linear-gradient(to right, rgb(106, 27, 154), rgb(0, 122, 204));
        animation: none; /* Removendo a animação durante o hover/foco */
        border-color: linear-gradient(to right, rgb(106, 27, 154), rgb(0, 122, 204));
        outline: none;
    }
`;



const ContainerHyperLink = styled.a`
    background: linear-gradient(to right, rgb(138, 43, 226), rgb(0, 153, 255));
    -webkit-background-clip: text;
    color: transparent;
    margin: 20px;
    display: inline;
`

const LogoColorSpan = styled.span`
    background: linear-gradient(to right, rgb(138, 43, 226), rgb(0, 153, 255));
    -webkit-background-clip: text;
    color: transparent;
`

export const LoginCard = () => {
    return (
        <LoginContainer>
            <form action="" method="get">
                <TextoH1>Ja é um cliente <LogoColorSpan>VS ?</LogoColorSpan></TextoH1>
                <LoginInput id='emailInput' type='email' placeholder='Endereço de email ou cpf' />
                <LoginInput id='passwordInput' type='password' placeholder='Senha' />
                <LoginButton type='submit' value='Entrar' />
                <div>
                    <ContainerHyperLink href="#">Esqueci minha senha</ContainerHyperLink>
                    <ContainerHyperLink href="#">Criar minha conta</ContainerHyperLink>
                </div>
            </form>
        </LoginContainer>
    )
}
