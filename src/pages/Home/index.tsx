import Produto from '../../assets/images/Produto.png'
import Idosos from '../../assets/images/Velhos.svg'
import { ButtonLink } from '../../components/ButtonLink'
import { MainContainer } from './styles'

export function Home() {
  return (
    <MainContainer>
      <section className="introduction-section all-sections mobile">
        <div className='introduction-section-img'>
          <img src={Produto} />
        </div>

        <div className="text-container">
          <h1>Introduzindo ao nosso trabalho</h1>

          <h3>O que é nosso projeto?</h3>

          <p>
            Nosso projeto é uma espécie de relógio
            que coloca o seu remédio e te avisa para
            não ter riscos de você esquecer de tomar
            o seu remédio, pesquisamos muito sobre
            isso e podemos afirmar que muitas pessoas
            tem problema com isso e vamos deixar um
            artigo abaixo para você se informar melhor
          </p>

          <ButtonLink title="Saiba Mais" link='https://www.youtube.com/watch?v=wljjjGLW29A' />
        </div>
      </section>

      <section className='target-audience all-sections row-default mobile'>
        <div className='target-audience-img'>
          <img src={Idosos} />
        </div>

        <div className="text-container">
          <h1>Público alvo</h1>

          <h3>Qual o publico do nosso projeto?</h3>

          <p>
            Nosso projeto é voltado para o público
            idoso, escolhemos esse público porque
            como pode ver na pesquisa a cima eles são
            o publico que mais esquece tem dificulcade
            tanto em separar o remédio quanto em
            lembar o horário certo do remédio
            artigo abaixo para você se informar melhor
          </p>

          <ButtonLink title="Saiba Mais" link='https://www.youtube.com/watch?v=wljjjGLW29A' />
        </div>
      </section>
    </MainContainer>
  )
}
