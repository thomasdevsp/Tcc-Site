import styled from 'styled-components'

export const MainContainer = styled.main`
  max-width: 1400px;
  margin-top: 120px;

  .Product {
  width: 284px;
  height: 229px;
  margin-bottom: 40px;
}

  .Idosos {  
  margin-top: 130px;
  margin-bottom: 40px;
}

  .Text {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 36px;
}

  .Second-Content {
    margin-bottom: 20rem;
  }

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

@media (min-width: 770px) { 
    max-width: 400px;

    .First-Content {
      margin-bottom: 200px;
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

      .Text {
        align-items: flex-end;
      }

      p {
        text-align: right;
      }

      img {
        width: 927px;
        height: 479px;
      }
    }
  }
`
