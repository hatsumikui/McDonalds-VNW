import * as S from "./footer_styled"
import logo from "../../assets/logo.png"
import playstore from "../../assets/playstore.png"
import appstore from "../../assets/appstore.png"

export default function Footer() {
  return (
    <S.Footer>
        <S.Logo>
        <img src={logo} alt="" />
        <p>© McDonald’s 2024</p>
        </S.Logo>
        <S.AppDwn>
        <img src={playstore} alt=""/>   
        <img src={appstore} alt=""/>
        </S.AppDwn>
    </S.Footer>
  )
}
