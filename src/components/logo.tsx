import React from 'react'
import styled from 'styled-components'

const LogoContainer = styled.div`
    & a{
        font-size: 20px;
        font-weight: bold;
    }
    @media only screen and (max-width: 767px) {
        display:none;
}
`;

const Logo = () => {
    return (
        <LogoContainer>
            <a>wanted</a>
        </LogoContainer>
    )
}

export default Logo