import styled from 'styled-components'
import { ButtonComponent } from '../../components/Button/styles'

export const MainContainer = styled.main`
  height: 100%;
  margin: 68px 40px 0;

  .Line-Product {
    width: 180px;
    border: 2px solid #176CCB;
    border-radius: 3px;
  }

  .Product {
  width: 284px;
  height: 229px;
  margin-bottom: 40px;
}

  .Second-Content {
    margin-top: 8.125rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .Card {
      width: 180px;
      height: 224px;
      border-radius: 15px;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
      
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 10px;

      p {
      font-size: 10px;
    }

    span {
      font-size: 9px;
    }

    }

    .Arrow {
      font-size: 2.25rem;
      color: #176CCB;
    }
    
  }

  .Text {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 36px;

  h1 {
  font-size: 2.625rem;
}

  h3 {
  font-size: 1.375rem;
  max-width: 340px;
}

  p {
  font-size: 1rem;
  max-width: 340px;
}

}

.Third-Content {
  margin-top: 12.5rem;

  img {
    margin-bottom: 70px;
  }

  .Card-Group {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .Porcentagem {
    width: 195px;
    height: 59.235px;

    border-radius: 6px;
    background: #F3F3F3;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    filter: blur(2px);
  }
}

@media (min-width: 1200px) { 
    margin: 120px;

    .First-Content {
      margin-bottom: 200px;
    }

    .Second-Content {

      .Card {
        width: 419px;
        height: 524px;

      p {
        font-size: 24px;
      }

      span {
      font-size: 20px;
      }
    }
     
      .Arrow {
      font-size: 3.5rem;
      color: #5D9CE3;
    }

    .Arrow:hover {
      color: #176CCB;
      transition: all 0.2s ease;
      cursor: pointer;
    }
    }

    .Second-Content {
      margin-bottom: 300px;
    }

    .Desktop {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: center;

      .Product {
        margin: 0;
        width: 700px;
        height: 550px;
      }

      h1 {
        font-size: 4rem;
        max-width: 40.125rem;
      }

      h3 {
        font-size: 1.75rem;
      }

      p {
        font-size: 1.5rem;
        max-width: 31.125rem;
      }
    }

    .Inverse {
      flex-direction: row;

      .Porcentagem {
        width: 451px;
        height: 137px;
        margin: 0;
      }

      .Text {
        align-items: flex-end;
      }

      p {
        text-align: right;
      }

      img {
        width: 812px;
        height: 541px;
        margin: 0;
      }
    }
  }

`
export const ButtonCard = styled(ButtonComponent)`
  width: 96px;
  height: 18px;

  font-size: 9px;

  @media (min-width: 1200px) {
  width: 225px;
  height: 43px;

  font-size: 20px;
  }
`