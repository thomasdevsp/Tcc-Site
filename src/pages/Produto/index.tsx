import { ButtonCard, MainContainer } from "./styles";
import { Button } from "../../components/Button";
import { Footer } from '../../components/Footer';
import { IconText } from '../../components/IconText';

import ProdutoImg from '../../assets/images/Produto.svg';
import Remedio from '../../assets/icons/Remedio.svg'
import Acess from '../../assets/icons/Acess.svg'
import Relogio from '../../assets/icons/Relogio.svg'
import Arduino from '../../assets/images/uno_r3 1 (1) 1.svg'
import Cabos from '../../assets/images/Cabos.svg'

export function Produto() {
  return (
    <MainContainer>
      <section className="First-Content Desktop">
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

        <div>
          <span class="material-symbols-outlined Arrow">
            arrow_back_ios
          </span>
        </div>

        <div className='Card'>   {/* Transformar Card em um componente */}
          <img src={Arduino} />
          <p>Arduino Uno</p>
          <span>R$ 70,00</span>

          <ButtonCard title="Aonde Comprar" > Aonde Comprar </ButtonCard>
        </div>

        <div>
          <span class="material-symbols-outlined Arrow">
            arrow_forward_ios
          </span>
        </div>

      </section>

      <section className='Third-Content Desktop Inverse'>
        <img className="Cabos" src={Cabos} />

        <div className="Card-Group">
          <div className='Porcentagem'></div>
          <div className='Porcentagem'></div>
          <div className='Porcentagem'></div>
        </div>

      </section>

      <Footer />
    </MainContainer>
  )
}