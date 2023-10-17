import { MainContainer } from "./styles";
import { ButtonLink } from "../../components/ButtonLink";
import { ContainerIcon } from '../../components/ContainerIcon';

import { Swiper, SwiperSlide } from 'swiper/react'

import ProdutoImg from '../../assets/images/Produto.png';
import Remedio from '../../assets/icons/Remedio.svg'
import Acess from '../../assets/icons/Acess.svg'
import Relogio from '../../assets/icons/Relogio.svg'

import ProdutoInspiracao from '../../assets/images/ProdutoInspiracao.png'
import Arduino from '../../assets/images/ArduinoUNO.png'
import ProtoBoard from '../../assets/images/ProtoBoard.png'
import Buzzer from '../../assets/images/Buzzer.png'
import Lcd from '../../assets/images/Lcd.png'
import Led from '../../assets/images/Led.png'

export function Produto() {

  return (
    <MainContainer>
      <section className="ideas-section all-sections mobile">
        <div className="ideas-section-img">
          <img src={ProdutoImg} />
        </div>

        <div className="text-container">
          <h1>Como chegamos a esse projeto</h1>

          <h3>Inspirações e ideias</h3>

          <p>
            Nosso projeto é uma ideia já existente, mas
            com algumas modificações no nosso estilo,
            a ideia surgiu para solucionar problemas
            reais dentro de nossas casas, e como todo
            bom projeto de tcc ele tem muitos benefecios:
          </p>

          <div className='line'></div>

          <div className='icons-container'>
            <ContainerIcon
              text='Ajuda a tomar o remedio na quantidade correta'
              link={Remedio}
            />

            <ContainerIcon
              text='Fornecemos acessibilidade para os idosos'
              link={Acess}
            />

            <ContainerIcon
              text='Auxilia a tomar o remédio no horário certo'
              link={Relogio}
            />
          </div>

          <ButtonLink title="Saiba Mais" link="Arroz" />
        </div>
      </section>

      <section id="components-section" className='components-section mobile'>
        <h1>Peças Usadas</h1>

        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}

        >
          <SwiperSlide >
            <div className="slide-item">
              <img src={Arduino} />
              <p>Arduino Uno</p>
              <span>R$ 92,00</span>
              <ButtonLink
                title="Aonde comprar"
                link="https://www.baudaeletronica.com.br/produto/arduino-uno-r3.html" />
            </div>
          </SwiperSlide>

          <SwiperSlide >
            <div className="slide-item">
              <img className="slide-item-img" src={ProtoBoard} />
              <p>ProtoBoard</p>
              <span>R$ 13,80</span>
              <ButtonLink
                title="Aonde comprar"
                link="https://www.baudaeletronica.com.br/produto/protoboard-400-pontos-transparente.html"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide >
            <div className="slide-item">
              <img className="slide-item-img" src={Buzzer} />
              <p>Buzzer</p>
              <span>R$ 3,00</span>
              <ButtonLink
                title="Aonde comprar"
                link="https://www.baudaeletronica.com.br/produto/buzzer-3v.html"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide >
            <div className="slide-item">
              <img className="slide-item-img" src={Lcd} />
              <p>Lcd</p>
              <span>R$ 31,00</span>
              <ButtonLink
                title="Aonde comprar"
                link="https://www.baudaeletronica.com.br/produto/display-lcd-16x2-azul-com-modulo-adaptador-i2c.html"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide >
            <div className="slide-item">
              <img className="slide-item-img" src={Led} />
              <p>Led</p>
              <span>R$ 0,30</span>
              <ButtonLink
                title="Aonde comprar"
                link="https://www.baudaeletronica.com.br/produto/led-difuso-5mm-azul"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section id="bibliography-section" className='bibliography-section all-sections mobile'>
        <div className='bibliography-section-img'>
          <img src={ProdutoInspiracao} />
        </div>

        <div className="text-container">
          <h1>Qual foi nossa inspiração?</h1>

          <h3>Bibliografia</h3>

          <p>
            O nosso projeto foi uma ideia original que foi inspirada
            em uma serie de vídeos do canal "Brincando com Ideias" do
            nosso amigo Flavio, ele tem vários projetos sobre caixas de
            remédios então resolvemos adaptar a ideia da nossa maneira,
            abaixo vamos deixar uma playlist com os vídeos.
          </p>

          <ButtonLink title="Saiba Mais" link='https://youtube.com/playlist?list=PLdxDLx1uFCCE1bOzAJjNvSgMNP4RDqBmk&si=rX4xx3D3dp0UOUvX' />
        </div>


      </section>

      <section id="operating-section" className='operating-section all-sections row-default'>
        <div className='operating-section-iframe'>
          <iframe src="https://www.youtube.com/embed/Fo5RvJS3i88" ></iframe>
        </div>

        <div className="text-container">
          <h1>Funcionamento</h1>

          <h3>Como o produto funciona</h3>

          <p>
            Nosso produto é pensado para ficilitar a vida
            de um publico mais velho, então ele funciona
            de uma forma simples e pratica, para que
            não seja algo complexo e traga dores de
            cabeça para os usuarios
          </p>

        </div>
      </section>

    </MainContainer>
  )
}