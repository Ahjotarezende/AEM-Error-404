import styled from "styled-components"

export const ImageComp = styled.img`
    width: 500px;
    margin-left: 20px;
    @media screen and (max-width: 968px){
        width: 450px;
    }
    @media screen and (max-width: 860px){
        width: 400px;
    }
    @media screen and (max-width: 768px){
        width: 320px;
        margin: 0 0 0 20px;
    }
    @media screen and (max-height: 667px){
        width: 280px;
    }
    @media screen and (max-width: 280px) {
        margin-left: 57px;
    }
`;