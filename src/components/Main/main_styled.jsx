import styled,{css} from "styled-components";

const center = css`
 display: flex;
 justify-content: center;
 align-items: center;
`

export const Promocao = styled.section`
background-color: #FEB706;
height: 60vh;
${center}
flex-direction: column;
justify-content: space-around;
h2{
    color: white;
}
`
export const Center = styled.div`
/* border: solid 2px red; */
width: 70vw;
${center}
justify-content: space-around;
`
export const Card = styled.div`
/* border: solid 2px green; */
height: 38vh;
width: 280px;
text-align: center;
background-color: white;
border-radius: 13px;
p{
   /* border: solid 2px green;  */
   height: 9vh;
   ${center}
}
button{
    background-color: #FFBC0D;
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
}
`

export const Item = styled.div`
// border: solid 2px green;
${center}
height: 600px;
padding-left: 60px;
background-color: #FFC72C;
justify-content: space-around;
flex-direction: column;
`;

export const display = styled.div`
// border: 1px solid green;
${center}
display: flex;
width: 1500px;
justify-content: space-around;
  img{
    width: 350px;
  }
`;

export const buttonItem = styled.div`
// border: 1px solid red;
width: 30vw;
${center}
justify-content: space-evenly;
img {
    width: 140px;
}
`;

export const Texto = styled.p`
//   border: solid 2px green;
  width: 600px;
  font-size: 40px;
  font-family: 'Inter';
  font-weight: 800; 
  height: 9vh;
  word-wrap: break-word;
`;

export const Caixa = styled.div`
flex-direction: column;
`;

export const Destaque = styled.span`
margin-right: 10px;
color: red; 
`;

export const Normal = styled.span`
  color: white; 
  margin-right: 10px;
`;