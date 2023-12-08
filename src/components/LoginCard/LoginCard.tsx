import './LoginCard.css'

export const LoginCard = () => {
    return(
        <div className="loginCard">
            <form action="" method="get">
            
                <h1 className='texto'>Ja é nosso cliente?</h1>
                <p className='texto'>Faça seu login</p>
                <input className='loginInput' id='emailInput' type='email' placeholder='Endereço de email' />
                <input className='loginInput' id='passwordInput' type='password' placeholder='Senha' />
                <div>
                    <input className='loginButton' type='submit' value='ENTRAR' />
                </div>
                <div>
                    <a href="#">Esqueci minha senha</a>
                    <a href="#">Criar minha conta</a>
                </div>
                
            
            </form>
        </div>
         
    )
}