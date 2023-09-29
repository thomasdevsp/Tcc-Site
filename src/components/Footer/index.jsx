import Linkedin from '../../assets/icons/Link.svg'
import Youtube from '../../assets/icons/You.svg'
import Twitter from '../../assets/icons/Twitter.svg'
import Instagram from '../../assets/icons/Insta.svg'

import { FooterStyle } from "./styles";

export function Footer() {
  return (
    <FooterStyle>

      <div className='Icons'>
        <a href=""><img src={Linkedin} alt="" /></a>
        <a href=""><img src={Youtube} alt="" /></a>
        <a href=""><img src={Twitter} alt="" /></a>
        <a href=""><img src={Instagram} alt="" /></a>
      </div>

      <div className='Line'></div>

      <div className='Text-Footer'>
        <span>Copyright </span>
        <span class="material-symbols-outlined">
          copyright
        </span>
        <span>Todos os direitos reservados</span>
      </div>

    </FooterStyle>
  )
}