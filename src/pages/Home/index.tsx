import Produto from '../../assets/images/Produto.svg'
import Idosos from '../../assets/images/Teste.svg'
import { Button } from '../../components/Button'
import { MainContainer } from './styles'
import { Footer } from '../../components/Footer'

export function Home() {
  return (
    <MainContainer>
      <section className="First-Content Desktop">
        <img src={Produto} className='Product' />

        <div className="Text">
          <h1>Introduzindo ao nosso trabalho</h1>

          <h3>O que é nosso projeto?</h3>

          <p>Nosso projeto é uma espécie de relógio
            que coloca o seu remédio e te avisa para
            não ter riscos de você esquecer de tomar
            o seu remédio, pesquisamos muito sobre
            isso e podemos afirmar que muitas pessoas
            tem problema com isso e vamos deixar um
            artigo abaixo para você se informar melhor</p>

          <Button title="Saiba Mais" />
        </div>
      </section>

      <section className='Second-Content Desktop Inverse'>
        <img src={Idosos} className='Idosos' />

        <div className="Text">
          <h1>Público alvo</h1>

          <h3>Qual o publico do nosso projeto?</h3>

          <p>Nosso projeto é voltado para o público
            idoso, escolhemos esse público porque
            como pode ver na pesquisa a cima eles são
            o publico que mais esquece tem dificulcade
            tanto em separar o remédio quanto em
            lembar o horário certo do remédio
            artigo abaixo para você se informar melhor</p>

          <Button title="Saiba Mais" />
        </div>
      </section>

      <Footer />
    </MainContainer>
  )
}
