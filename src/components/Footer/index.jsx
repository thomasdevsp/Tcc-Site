import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FooterStyle } from "./styles";
import { faInstagram, faLinkedinIn, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  return (
    <FooterStyle>

      <div className='Icons'>
        <a href=""><FontAwesomeIcon icon={faLinkedinIn} /></a>
        <a href=""><FontAwesomeIcon icon={faYoutube} /></a>
        <a href=""><FontAwesomeIcon icon={faXTwitter} /></a>
        <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
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