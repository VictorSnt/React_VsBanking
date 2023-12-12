import styled from 'styled-components'


const StyledHeader = styled.div`

    background-color: rgb(43, 43, 43);
    width: auto;
    height: 100px;
    text-align: center;
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

`

const LogoDiv = styled.div`

    background: linear-gradient(to right, rgb(138, 43, 226), rgb(0, 153, 255));
    width: 200px;
    height: 30px;
    margin: auto;
    border-radius: 10px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

`

const HeaderTitle = styled.h3`
    background: linear-gradient(to right, rgb(138, 43, 226), rgb(0, 153, 255));
    -webkit-background-clip: text;
    color: transparent;
    vertical-align: middle;
    margin: 0;
    padding: 0;
    font-size: 40px;
`

export const Header = () => {
    return(
        
        <StyledHeader>
            <div>
                <HeaderTitle>VS_Banking</HeaderTitle>
            </div>
        </StyledHeader>

    )
}