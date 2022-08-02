import styled from "styled-components"

export const Texto = styled.p`
    font-family: 'Space Mono', monospace;
    font-style: normal;
    font-weight: 700;
    font-size: 3.4rem;
    line-height: 5rem;
    letter-spacing: -0.035em;
    color: #333333;
    margin: 0 0 30px 30px;
    width: 100%;

    @media screen and (max-width: 1024px){
        font-size: 3rem;
        margin: 0 0 20px 30px;
        width: 90%;
    }

    @media screen and (max-width: 968px){
        font-size: 2.8rem;
        width: 320px;
    }
    @media screen and (max-width: 768px){
        font-size: 2.5rem;
        line-height: 3rem;
        margin: 20px 0 30px 0;
    }
    @media screen and (max-height: 896px){
        font-size: 2.8rem;
    }
    @media screen and (max-height: 667px){
        font-size: 2.5rem;
    }
    @media screen and (max-width: 280px) {
        margin-left: 60px;
        font-size: 2.4rem;
        width: 300px;
    }
`;