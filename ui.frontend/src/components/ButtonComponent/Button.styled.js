import styled from "styled-components"

export const ButtonComp = styled.button`
    color: white;
    font-family: 'Space Mono';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.035em;
    text-transform: uppercase;
    background-color: #333333;
    width: 216px;
    height: 68px;
    border: none;
    cursor: pointer;
    margin: 30px 0 0 30px;

    @media screen and (max-width: 1024px){
        width: 210px;
        height: 62px;
    }

    @media screen and (max-width: 968px){
        width: 200px;
        height: 52px;
    }
    @media screen and (max-width: 768px){
        margin: 0 120px 0 0;
    }
    @media screen and (max-width: 280px) {
        margin-left: 70px;
    }
`;