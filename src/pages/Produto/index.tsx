import { MainContainer } from "./styles";
import { Button } from "../../components/Button";
import { Footer } from '../../components/Footer';
import { IconText } from '../../components/IconText';

import ProdutoImg from '../../assets/images/Produto.png';
import Remedio from '../../assets/icons/Remedio.svg'
import Acess from '../../assets/icons/Acess.svg'
import Relogio from '../../assets/icons/Relogio.svg'

export function Produto() {
  return (
    <MainContainer>
      <section className="First-Content">
        <img src={ProdutoImg} className='Product' />

        <div className="Text">
          <h1>Como chegamos
            a esse projeto</h1>

          <h3>Inspirações e ideias</h3>

          <p>Nosso projeto é uma ideia já existente, mas
            com algumas modificações no nosso estilo,
            a ideia surgiu para solucionar problemas
            reais dentro de nossas casas, e como todo
            bom projeto de tcc ele tem muitos benefecios:
          </p>

          <div className='Line-Product'></div>

          <IconText
            Text='Ajuda a tomar o remedio na quantidade correta'
            Link={Remedio}
          />

          <IconText
            Text='Fornecemos acessibilidade para os idosos '
            Link={Acess}
          />

          <IconText
            Text='Auxilia a tomar o remédio no horário certo'
            Link={Relogio}
          />

          <Button title="Saiba Mais" />
        </div>
      </section>

      <section className='Second-Content'>
      </section>

      <Footer />
    </MainContainer>
  )
}