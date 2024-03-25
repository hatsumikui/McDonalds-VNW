import styled,{css} from "styled-components";

const center = css`
 display: flex;
 justify-content: center;
 align-items: center;
`;

export const Footer = styled.footer`
${center}
justify-content: space-between;
padding-left: 60px;
height: 7vh;
`;

export const AppDwn = styled.div`
width: 30vw;
${center}
justify-content: space-evenly;
img {
    width: 100px;
}
`;

export const Logo = styled.div`
width: 10vw;
height: 3vh;
${center}
p{
    font-size: 0.7rem;
}
img{
    width: 20px;
    margin-right: 10px;
}
`;

