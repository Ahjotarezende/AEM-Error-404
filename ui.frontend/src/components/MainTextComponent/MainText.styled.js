import styled from "styled-components"

export const TextMain = styled.p`
    font-family: 'Space Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: -0.035em;
    color: #4F4F4F;
    margin: 0 0 30px 30px;
    max-width: 370px;

    @media screen and (max-width: 1024px){
        font-size: 20px;
        margin: 0 0 20px 30px;
    }
    @media screen and (max-width: 968px){
        font-size: 17px;
        margin-bottom: 10px;
    }
    @media screen and (max-width: 768px){
        line-height: 1.5rem;
        width: 320px;
        margin: 0 0 30px 0;
    }
    @media screen and (max-height: 896px){
        font-size: 1.2rem;
    }
    @media screen and (max-height: 667px){
        font-size: 17px;
    }
    @media screen and (max-width: 280px) {
        margin-left: 60px;
        width: 300px;
    }
`;