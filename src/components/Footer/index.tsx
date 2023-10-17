import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FooterStyle } from "./styles";
import { faInstagram, faLinkedinIn, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Copyright } from "@phosphor-icons/react";

export function Footer() {
  return (
    <FooterStyle>

      <div className='Icons'>
        <a href="https://www.linkedin.com/in/med-box-045036297/" target="blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
        <a href="https://www.youtube.com/channel/UCiKBk3yXaJmRMlWEtbqn4xw" target="blank"><FontAwesomeIcon icon={faYoutube} /></a>
        <a href="https://twitter.com/BoxMed_" target="blank"><FontAwesomeIcon icon={faXTwitter} /></a>
        <a href="https://www.instagram.com/medbox56/" target="blank"><FontAwesomeIcon icon={faInstagram} /></a>
      </div>

      <div className='Line'></div>

      <div className='Text-Footer'>
        <span>Copyright </span>
        <Copyright size={22} />
        <span>Todos os direitos reservados</span>
      </div>

    </FooterStyle>
  )
}