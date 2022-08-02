import styled from "styled-components"

export const TextoHeader = styled.p`
    font-family: 'Inconsolata';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 25px;
    letter-spacing: -0.08em;
    text-transform: uppercase;
    color: #333333;
    margin: 20px 0 110px 0;

    @media screen and (max-width: 1024px){
        margin-left: 20px;
    }
    @media screen and (max-width: 768px){
        margin-bottom: 55px;
    }
    @media screen and (max-height: 896px){
        margin-bottom: 90px;
    }
    @media screen and (max-height: 812px){
        margin-bottom: 70px;
    }
    @media screen and (max-height: 667px){
        margin-bottom: 35px;
    }
`;