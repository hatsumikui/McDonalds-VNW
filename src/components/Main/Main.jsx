import Card from "./Card"
import * as S from "./main_styled"
import sofa from "../../assets/sofa.png"
import loja from "../../assets/loja.png"
import homem from "../../assets/homem.png"
import sorvete from "../../assets/sorvete.png"
import bigmac from "../../assets/bigmac.png"
import batata from "../../assets/batata.png"
import { useState } from "react"

export default function Main() {
  const [item, setItem] = useState(bigmac);

  return (
    <main>
      <S.Item>
        <S.display>
        <img src={item} alt="" />
          <S.Caixa>
            <S.Texto>
            <S.Normal>BATEU</S.Normal><S.Normal>AQUELA</S.Normal> 
            </S.Texto>
            <S.Texto>
            <S.Destaque>#FOME</S.Destaque> <S.Normal> DE </S.Normal><S.Destaque>MÉQUI</S.Destaque><S.Normal>?</S.Normal>
            </S.Texto>
          </S.Caixa>
        </S.display>
        <S.buttonItem>
        <img onClick={item1} src={bigmac}/>
        <img onClick={item2} src={batata}/>
        <img onClick={item3} src={sorvete}/>
        </S.buttonItem>
      </S.Item>

      <S.Promocao>
        <h2>Promoção</h2>
        <S.Center>
          <Card imagem={sofa} texto={"Que tal um #MéquiNoSofá"} />
          <Card imagem={loja} texto={"Venha conhecer nossa nova loja"} />
          <Card imagem={homem} texto={"Confira as medidas que o Méqui adotou!"} />
        </S.Center>
      </S.Promocao>
    </main>
  )

  function item1() {
    setItem(bigmac);
  }
  function item2() {
    setItem(batata);
  }
  function item3() {
    setItem(sorvete);
  }
}
